"use client";

import { useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

interface Props {
  pdfUrl: string;
  onClose: () => void;
}

export default function SecurePdfViewer({ pdfUrl, onClose }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    const renderPdf = async () => {
      const container = containerRef.current;
      if (!container) return;

      container.innerHTML = "";

      // ✅ Use visualViewport.scale to detect browser zoom level (e.g. 150% = 1.5)
      // getBoundingClientRect() returns CSS px which are affected by zoom,
      // so we must divide by the zoom scale to get true physical layout width.
      // Without this, at 150% browser zoom the container appears narrower than it is
      // and the PDF gets clipped on the right.
      const browserZoom = window.visualViewport?.scale ?? 1;
      const dpr = window.devicePixelRatio || 1;

      // True layout width unaffected by browser zoom
      const rawWidth = container.getBoundingClientRect().width;
      const cssWidth = rawWidth / browserZoom;

      if (cssWidth <= 0) return;

      const loadingTask = pdfjsLib.getDocument(pdfUrl);
      const pdf = await loadingTask.promise;

      if (cancelled) return;

      const innerWrapper = document.createElement("div");
      innerWrapper.style.display = "flex";
      innerWrapper.style.flexDirection = "column";
      innerWrapper.style.alignItems = "center";
      innerWrapper.style.width = "100%";
      innerWrapper.style.paddingTop = "12px";
      innerWrapper.style.paddingBottom = "20px";
      innerWrapper.style.boxSizing = "border-box";
      innerWrapper.style.gap = "12px";
      container.appendChild(innerWrapper);

      for (let i = 1; i <= pdf.numPages; i++) {
        if (cancelled) return;

        const page = await pdf.getPage(i);
        const baseViewport = page.getViewport({ scale: 1 });

        // CSS scale: fills true layout width exactly
        const cssScale = cssWidth / baseViewport.width;

        // Physical scale: 1:1 with screen pixels — zero blur
        const physicalScale = cssScale * dpr;

        const cssViewport = page.getViewport({ scale: cssScale });
        const physicalViewport = page.getViewport({ scale: physicalScale });

        const cssW = Math.round(cssViewport.width);
        const cssH = Math.round(cssViewport.height);

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d")!;

        canvas.width = Math.round(physicalViewport.width);
        canvas.height = Math.round(physicalViewport.height);
        canvas.style.width = `${cssW}px`;
        canvas.style.height = `${cssH}px`;
        canvas.style.display = "block";
        canvas.style.imageRendering = "crisp-edges";

        const pageContainer = document.createElement("div");
        pageContainer.style.position = "relative";
        pageContainer.style.width = `${cssW}px`;
        pageContainer.style.height = `${cssH}px`;
        pageContainer.style.flexShrink = "0";
        pageContainer.style.overflow = "hidden";
        pageContainer.style.boxShadow = "0 2px 8px rgba(0,0,0,0.12)";
        pageContainer.style.background = "white";

        const textLayerDiv = document.createElement("div");
        textLayerDiv.className = "textLayer";
        textLayerDiv.style.position = "absolute";
        textLayerDiv.style.inset = "0";
        textLayerDiv.style.pointerEvents = "none";
        textLayerDiv.style.overflow = "hidden";

        pageContainer.appendChild(canvas);
        pageContainer.appendChild(textLayerDiv);
        innerWrapper.appendChild(pageContainer);

        await page.render({ canvasContext: ctx, viewport: physicalViewport })
          .promise;

        if (cancelled) return;

        try {
          const textContent = await page.getTextContent();
          const textLayer = new (pdfjsLib as any).TextLayer({
            textContentSource: textContent,
            container: textLayerDiv,
            viewport: cssViewport,
          });
          await textLayer.render();
        } catch {
          // text layer is optional
        }
      }
    };

    const raf = requestAnimationFrame(renderPdf);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [pdfUrl]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
      style={{ height: "100dvh" }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div
        className="relative bg-white flex flex-col overflow-hidden shadow-2xl"
        style={{
          width: "min(99%, 64rem)",
          borderRadius: "clamp(8px, 2vw, 20px)",
          height:
            "calc(100dvh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 16px)",
          maxHeight:
            "calc(100dvh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 16px)",
          marginTop: "env(safe-area-inset-top)",
          marginBottom: "env(safe-area-inset-bottom)",
        }}
      >
        {/* Header */}
        <div className="shrink-0 bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center">
          <h3 className="text-base font-semibold text-gray-800">
            Document Viewer
          </h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex items-center justify-center w-8 h-8 rounded-full text-gray-500 hover:text-black hover:bg-gray-100 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div
          ref={containerRef}
          className="flex-1 overflow-y-auto overflow-x-hidden select-none bg-[#F9FAFB]"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}
