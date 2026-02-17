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
        const viewport = page.getViewport({ scale: 1.4 });

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d")!;

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        canvas.className = "mx-auto rounded-lg shadow-md bg-white"; // centered

        container.appendChild(canvas);

        await page.render({
          canvasContext: context,
          viewport,
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
      {/* Modal Container */}
      <div className="relative bg-[#F9FAFB] w-[95%] max-w-5xl h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">
            Document Viewer
          </h3>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-xl font-semibold"
          >
            ✕
          </button>
        </div>

        {/* Scrollable PDF Area */}
        <div
          ref={containerRef}
          className="flex-1 overflow-y-auto px-6 py-8 space-y-8 select-none"
        />
      </div>
    </div>
  );
}
