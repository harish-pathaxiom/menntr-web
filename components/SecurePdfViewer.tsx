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

  // ✅ Lock body scroll while modal is open
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  useEffect(() => {
    const renderPdf = async () => {
      const loadingTask = pdfjsLib.getDocument(pdfUrl);
      const pdf = await loadingTask.promise;

      const container = containerRef.current!;
      container.innerHTML = "";

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 1 });
        const containerWidth = container.clientWidth - 32;
        const scale = containerWidth / viewport.width;
        const scaledViewport = page.getViewport({ scale });

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d")!;

        canvas.width = scaledViewport.width;
        canvas.height = scaledViewport.height;
        canvas.style.width = "100%";
        canvas.style.height = "auto";
        canvas.className = "mx-auto rounded-lg shadow-md bg-white";

        container.appendChild(canvas);

        await page.render({ canvasContext: context, viewport: scaledViewport })
          .promise;
      }
    };

    renderPdf();
  }, [pdfUrl]);

  return (
    // ✅ 100dvh = dynamic viewport height, correct on iPhone Safari
    // ✅ safe-area insets so content clears the notch and home bar
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
      style={{ height: "100dvh" }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div
        className="relative bg-[#F9FAFB] flex flex-col overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl"
        style={{
          // ✅ Use dvh instead of vh; subtract safe area so modal doesn't go under home bar
          width: "min(95%, 64rem)",
          height:
            "calc(100dvh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 24px)",
          maxHeight:
            "calc(100dvh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 24px)",
          marginTop: "env(safe-area-inset-top)",
          marginBottom: "env(safe-area-inset-bottom)",
        }}
      >
        {/* Sticky Header */}
        <div className="shrink-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
            Document Viewer
          </h3>

          {/* ✅ SVG icon instead of ✕ text — renders reliably on all devices */}
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

        {/* Scrollable PDF Content */}
        <div
          ref={containerRef}
          className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 select-none"
        />
      </div>
    </div>
  );
}
