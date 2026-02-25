"use client";

import { useState } from "react";

interface RequestDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RequestDemoModal({
  isOpen,
  onClose,
}: RequestDemoModalProps) {
  const [formData, setFormData] = useState({
    institutionEmail: "",
    needs: "",
    agreeToContact: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setIsSubmitting(true);

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/request-demo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    // Show success animation
    setIsSuccess(true);

    // Auto close after 2.5s
    setTimeout(() => {
      setIsSuccess(false);
      setIsSubmitting(false);
      setFormData({
        institutionEmail: "",
        needs: "",
        agreeToContact: false,
      });
      onClose();
    }, 2500);
  } catch (error: any) {
    setIsSubmitting(false);
    alert(error.message || "Failed to submit request");
  }
};

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Request a Demo
          </h2>
          <p className="text-sm text-gray-600">
            See how Mentrr can transform your institution.
          </p>
        </div>

        {/* Form */}

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-10">
            <div className="success-animation mb-6 animate-scaleIn">
              <svg viewBox="0 0 60 60" className="success-svg">
                <circle
                  className="success-circle"
                  cx="30"
                  cy="30"
                  r="24"
                  fill="none"
                />
                <path
                  className="success-check"
                  fill="none"
                  d="M20 31l6 6 14-14"
                />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-center text-gray-900 mb-2 animate-fadeIn">
              Request Submitted Successfully 🎉
            </h3>

            <p className="text-sm text-gray-600 text-center animate-fadeIn">
              Our team will contact you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Institution Email */}
            <div>
              <label
                htmlFor="institutionEmail"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Institution Email
              </label>
              <input
                type="email"
                id="institutionEmail"
                name="institutionEmail"
                value={formData.institutionEmail}
                onChange={handleChange}
                placeholder="name@university.edu"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                required
              />
            </div>

            {/* What are you looking for? */}
            <div>
              <label
                htmlFor="needs"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                What are you looking for?
              </label>
              <textarea
                id="needs"
                name="needs"
                value={formData.needs}
                onChange={handleChange}
                placeholder="Tell us about your institution's needs..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm resize-none"
                required
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="agreeToContact"
                name="agreeToContact"
                checked={formData.agreeToContact}
                onChange={handleChange}
                className="mt-1 w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                required
              />
              <label
                htmlFor="agreeToContact"
                className="text-xs text-gray-600 leading-relaxed"
              >
                Your information is secure and encrypted
              </label>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg text-sm font-medium hover:from-purple-700 hover:to-purple-800 transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Send Request"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
