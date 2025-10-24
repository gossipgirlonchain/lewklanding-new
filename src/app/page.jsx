import { useState } from "react";
import { X } from "lucide-react";

export default function LandingPage() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleHeartClick = () => {
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error(
          `Registration failed: ${response.status} ${response.statusText}`,
        );
      }

      setSuccess(true);
      setTimeout(() => {
        setShowModal(false);
        setSuccess(false);
        setEmail("");
      }, 3000);
    } catch (err) {
      console.error(err);
      setError("Failed to register. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setEmail("");
    setError("");
    setSuccess(false);
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div
        className="min-h-screen flex flex-col items-center justify-center px-6 relative"
        style={{
          background:
            "radial-gradient(ellipse at center, #f5f5f5 0%, #e8e8e8 25%, #d1d1d1 50%, #b8b8b8 75%, #a0a0a0 100%)",
        }}
      >
        {/* Main Content */}
        <div className="text-center mb-16">
          {/* Logo/Brand */}
          <div className="mb-12">
            <img
              src="https://ucarecdn.com/66d1fb1c-092e-4007-8387-117d1bf1d88b/-/format/auto/"
              alt="LEWK Logo"
              className="mx-auto mb-2 h-12 w-auto"
              style={{
                filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.1))",
              }}
            />
          </div>

          {/* Simple Button */}
          <button
            className="text-gray-700 font-medium py-4 px-16 rounded-lg transition-all duration-200 focus:outline-none transform hover:scale-105 active:scale-95 spacebar-button"
            onClick={handleHeartClick}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Be the first to clock it
          </button>

          {/* Subtitle */}
          <p
            className="text-gray-600 text-sm mt-12 max-w-md mx-auto"
            style={{ textShadow: "0 1px 1px rgba(255,255,255,0.8)" }}
          >
            Join our exclusive waitlist and be among the first to experience the
            future
          </p>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 text-center">
          <p
            className="text-gray-500 text-xs"
            style={{ textShadow: "0 1px 1px rgba(255,255,255,0.8)" }}
          >
            © 2024 Clock It. All rights reserved.
          </p>
        </div>
      </div>

      {/* Registration Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50 backdrop-blur-sm">
          <div
            className="rounded-2xl p-8 w-full max-w-md relative transform animate-in fade-in zoom-in duration-200 border-2"
            style={{
              background:
                "radial-gradient(ellipse at center, #f8f9fa 0%, #f1f3f4 25%, #e9ecef 50%, #dee2e6 75%, #ced4da 100%)",
              borderColor: "#adb5bd",
              borderTopColor: "#f8f9fa",
              borderLeftColor: "#f8f9fa",
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.9), inset 0 -1px 0 rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 p-2 hover:bg-gray-200/50 rounded-lg transition-colors duration-150 focus:outline-none"
              style={{
                background:
                  "linear-gradient(135deg, #ffffff 0%, #f8f9fa 20%, #e9ecef 80%, #dee2e6 100%)",
                border: "1px solid #ced4da",
                borderBottom: "2px solid #adb5bd",
                borderRight: "1px solid #adb5bd",
                boxShadow:
                  "0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
              }}
            >
              <X size={16} className="text-gray-600" />
            </button>

            {/* Modal content */}
            <div className="text-center mb-8">
              <h2
                className="text-2xl font-semibold text-gray-700 mb-2"
                style={{
                  fontFamily: "Inter, sans-serif",
                  textShadow: "0 1px 2px rgba(0,0,0,0.1)",
                }}
              >
                Join the Waitlist
              </h2>
              <p
                className="text-gray-600 text-sm"
                style={{ textShadow: "0 1px 1px rgba(255,255,255,0.8)" }}
              >
                Be the first to know when we launch
              </p>
            </div>

            {success ? (
              <div className="text-center py-8">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 20%, #6ee7b7 80%, #34d399 100%)",
                    border: "1px solid #10b981",
                    borderTop: "1px solid #d1fae5",
                    borderLeft: "1px solid #d1fae5",
                    boxShadow:
                      "0 4px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
                  }}
                >
                  <svg
                    className="w-8 h-8 text-green-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3
                  className="text-lg font-semibold text-gray-700 mb-2"
                  style={{ textShadow: "0 1px 1px rgba(255,255,255,0.8)" }}
                >
                  You're in!
                </h3>
                <p
                  className="text-gray-600 text-sm"
                  style={{ textShadow: "0 1px 1px rgba(255,255,255,0.8)" }}
                >
                  Thanks for joining our waitlist. We'll be in touch soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div
                    className="border-2 rounded-xl p-4"
                    style={{
                      background:
                        "linear-gradient(135deg, #fee2e2 0%, #fecaca 20%, #fca5a5 80%, #f87171 100%)",
                      borderColor: "#dc2626",
                      borderTop: "1px solid #fee2e2",
                      borderLeft: "1px solid #fee2e2",
                      boxShadow:
                        "inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <p
                      className="text-red-700 text-sm font-medium"
                      style={{ textShadow: "0 1px 1px rgba(255,255,255,0.5)" }}
                    >
                      {error}
                    </p>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                    style={{ textShadow: "0 1px 1px rgba(255,255,255,0.8)" }}
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl focus:outline-none transition-all duration-150 text-gray-700"
                    placeholder="Enter your email"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      background:
                        "linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #f1f3f4 100%)",
                      border: "1px solid #ced4da",
                      borderTop: "2px solid #adb5bd",
                      borderLeft: "2px solid #adb5bd",
                      boxShadow:
                        "inset 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(0, 0, 0, 0.05)",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 focus:outline-none transform hover:scale-105 active:scale-95 submit-button"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Joining...
                    </div>
                  ) : (
                    "Join Waitlist"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <style jsx global>{`
        /* Spacebar button styling */
        .spacebar-button {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 20%, #e9ecef 80%, #dee2e6 100%);
          border: 1px solid #ced4da;
          border-bottom: 3px solid #adb5bd;
          border-right: 2px solid #adb5bd;
          box-shadow: 
            0 0 20px rgba(236, 72, 153, 0.3),
            0 4px 8px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.8),
            inset 0 -1px 0 rgba(0, 0, 0, 0.05);
          text-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
          position: relative;
        }
        
        .spacebar-button:hover {
          background: linear-gradient(135deg, #f8f9fa 0%, #f1f3f4 20%, #e3e7ea 80%, #d6dbdf 100%);
          box-shadow: 
            0 0 25px rgba(236, 72, 153, 0.4),
            0 6px 12px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.9),
            inset 0 -1px 0 rgba(0, 0, 0, 0.08);
        }
        
        .spacebar-button:active {
          background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 20%, #ced4da 80%, #adb5bd 100%);
          border-bottom: 1px solid #adb5bd;
          border-right: 1px solid #adb5bd;
          box-shadow: 
            0 0 15px rgba(236, 72, 153, 0.2),
            0 2px 4px rgba(0, 0, 0, 0.1),
            inset 0 1px 3px rgba(0, 0, 0, 0.1);
          transform: translateY(2px) scale(0.98);
        }

        /* Submit button styling */
        .submit-button {
          background: linear-gradient(135deg, #ec4899 0%, #db2777 20%, #be185d 80%, #9d174d 100%);
          border: 1px solid #9d174d;
          border-bottom: 3px solid #7c2d57;
          border-right: 2px solid #7c2d57;
          box-shadow: 
            0 0 20px rgba(236, 72, 153, 0.3),
            0 4px 8px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2),
            inset 0 -1px 0 rgba(0, 0, 0, 0.1);
          text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
        }
        
        .submit-button:hover:not(:disabled) {
          background: linear-gradient(135deg, #f472b6 0%, #ec4899 20%, #db2777 80%, #be185d 100%);
          box-shadow: 
            0 0 25px rgba(236, 72, 153, 0.4),
            0 6px 12px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.3),
            inset 0 -1px 0 rgba(0, 0, 0, 0.15);
        }
        
        .submit-button:active:not(:disabled) {
          background: linear-gradient(135deg, #db2777 0%, #be185d 20%, #9d174d 80%, #7c2d57 100%);
          border-bottom: 1px solid #7c2d57;
          border-right: 1px solid #7c2d57;
          box-shadow: 
            0 0 15px rgba(236, 72, 153, 0.2),
            0 2px 4px rgba(0, 0, 0, 0.1),
            inset 0 1px 3px rgba(0, 0, 0, 0.2);
          transform: translateY(2px) scale(0.98);
        }

        .submit-button:disabled {
          background: linear-gradient(135deg, #d1d5db 0%, #9ca3af 20%, #6b7280 80%, #4b5563 100%);
          border: 1px solid #4b5563;
          border-bottom: 2px solid #374151;
          border-right: 1px solid #374151;
          box-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          cursor: not-allowed;
          transform: none;
        }

        /* Input focus effects */
        input:focus {
          box-shadow: 
            inset 0 2px 4px rgba(0, 0, 0, 0.1), 
            inset 0 1px 0 rgba(0, 0, 0, 0.05),
            0 0 0 3px rgba(236, 72, 153, 0.1) !important;
          border-color: #ec4899 !important;
        }

        /* Existing animations */
        @keyframes animate-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-in {
          animation: animate-in 0.2s ease-out;
        }
        
        .fade-in {
          animation: fade-in 0.2s ease-out;
        }
        
        .zoom-in {
          animation: zoom-in 0.2s ease-out;
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes zoom-in {
          from { transform: scale(0.95); }
          to { transform: scale(1); }
        }
      `}</style>
    </>
  );
}
