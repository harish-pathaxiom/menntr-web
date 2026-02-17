"use client";

export default function PdfViewerModal({
  isOpen,
  onClose,
  pdfUrl,
  title,
}: {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white w-[95%] h-[95%] rounded-xl overflow-hidden relative">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-semibold">{title}</h2>
          <button onClick={onClose}>Close</button>
        </div>

        <iframe
          src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
          className="w-full h-full"
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>
    </div>
  );
}
