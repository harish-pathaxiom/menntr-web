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
    const renderPdf = async () => {
      const loadingTask = pdfjsLib.getDocument(pdfUrl);
      const pdf = await loadingTask.promise;

      const container = containerRef.current!;
      container.innerHTML = "";

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);

        // 👇 Get base viewport
        const viewport = page.getViewport({ scale: 1 });

        // 👇 Calculate responsive scale
        const containerWidth = container.clientWidth - 32; // padding adjust

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

        await page.render({
          canvasContext: context,
          viewport: scaledViewport,
        }).promise;
      }
    };

    renderPdf();
  }, [pdfUrl]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="relative bg-[#F9FAFB] w-[95%] sm:w-[90%] max-w-5xl h-[95vh] sm:h-[90vh] rounded-xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
            Document Viewer
          </h3>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-lg sm:text-xl font-semibold"
          >
            ✕
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
