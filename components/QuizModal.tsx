import { getCalApi } from "@calcom/embed-react";
import React, { useState, useEffect, FormEvent, MouseEvent } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  platform: string;
  adSpend: string;
  issues: string;
  lookingFor: string;
  website: string;
  // ctr: number;
  // conversionRate: number;
  fullName: string;
  email: string;
}

const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    platform: "",
    adSpend: "",
    issues: "",
    lookingFor: "",
    website: "",
    // ctr: 2,
    // conversionRate: 3,
    fullName: "",
    email: "",
  });
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const totalSteps = 6;

  useEffect(() => {
    if (isOpen) {
      (async () => {
        const cal = await getCalApi({ namespace: "30min" });
        cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
        cal("on", {
          action: "bookingSuccessful",
          callback: (e) => {
            console.log("Booking successful:", e.detail);
            if (window.fbq) {
              window.fbq("track", "Schedule");
            }
          },
        });
      })();
    }
  }, [isOpen]);

  // ✅ Reset quiz when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1);
      setShowSuccess(false);
      setFormData({
        platform: "",
        adSpend: "",
        issues: "",
        lookingFor: "",
        website: "",
        // ctr: 2,
        // conversionRate: 3,
        fullName: "",
        email: "",
      });
    }
  }, [isOpen]);

  // Handle auto-advance for radio buttons
  useEffect(() => {
    if (currentStep === 1 && formData.platform) {
      const timer = setTimeout(() => {
        setCurrentStep(2);
      }, 100);
      return () => clearTimeout(timer);
    }

    if (currentStep === 2 && formData.adSpend) {
      const timer = setTimeout(() => {
        setCurrentStep(3);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [formData.platform, formData.adSpend, currentStep]);

  // Generic input handler
  const handleInputChange = (name: keyof FormData, value: string | number) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (currentStep === 1 && !formData.platform) {
      alert("Please select your advertising platform.");
      return;
    }

    if (currentStep === 2 && !formData.adSpend) {
      alert("Please select your ad spend.");
      return;
    }

    if (currentStep === 3 && !formData.issues.trim()) {
      alert("Please describe the issues you are facing.");
      return;
    }

    if (currentStep === 4 && !formData.lookingFor.trim()) {
      alert("Please tell us what you are looking for.");
      return;
    }

    if (currentStep === 5 && !formData.website.trim()) {
      alert("Please enter your website URL.");
      return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  // Handle form submit
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email) {
      alert("Please fill in your name and email before booking.");
      return;
    }

    try {
      console.log("Quiz submission:", formData);

      if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq("track", "QuizSubmit", {
          platform: formData.platform,
          adSpend: formData.adSpend,
          issues: formData.issues,
          lookingFor: formData.lookingFor,
          website: formData.website,
          // ctr: formData.ctr,
          // conversionRate: formData.conversionRate,
          email: formData.email,
        });
      }

      // const res = await fetch("/api/send-email", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });

      // if (res.ok) {
      // setShowSuccess(true);
      closeModal();
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { layout: "month_view" });
      cal("modal", { calLink: "harcharran/30min" });
      // } else {
      // console.error("Failed to send email");
      // }
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  const closeModal = () => {
    setShowSuccess(false);
    setCurrentStep(1);
    onClose();
  };

  const handleModalClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  if (!isOpen) return null;

  return (
    <div className="quiz-modal active" onClick={handleModalClick}>
      <div className="quiz-container">
        <button className="quiz-close" onClick={closeModal}>
          ×
        </button>

        <div className="quiz-progress">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>

        {/* <div className="quiz-header">
          <h3 className="quiz-title">Schedule Free Ads Audit</h3>
          <p className="quiz-subtitle">
            Before booking, please give us more insight into your needs
          </p>
          <p className="quiz-subtitle mt-6">
            Note: Due to high demand & quality standards, some entrants may be
            rejected pre-call *
          </p>
        </div> */}

        <div className="quiz-body">
          {!showSuccess ? (
            <form onSubmit={handleSubmit}>
              {/* Step 1: Platform */}
              <div className={`quiz-step ${currentStep === 1 ? "active" : ""}`}>
                <div className="quiz-header">
                  <h3 className="quiz-title">Schedule Free Ads Audit</h3>
                  <p className="quiz-subtitle">
                    Before booking, please give us more insight into your needs
                  </p>
                  <p className="quiz-subtitle mt-6 md:mt-8 italic">
                    If you&apos;re a good fit you&apos;ll hear from us and
                    we&apos;ll set up a call - if not we&apos;ll tell you
                    quickly and respectfully *
                  </p>
                </div>

                <h4 className="quiz-question">
                  What platform are you currently advertising on?
                </h4>
                <div className="quiz-radio-group">
                  {[
                    {
                      value: "Facebook/Instagram",
                      label: "Meta",
                    },
                    { value: "TikTok", label: "TikTok" },
                    { value: "Google Ads", label: "Google Ads" },
                    {
                      value: "Multiple Platforms",
                      label: "Multiple Platforms",
                    },
                  ].map((option, index) => (
                    <React.Fragment key={option.value}>
                      <input
                        type="radio"
                        name="platform"
                        value={option.value}
                        id={`platform${index + 1}`}
                        className="quiz-radio-input"
                        checked={formData.platform === option.value}
                        onChange={(e) =>
                          handleInputChange("platform", e.target.value)
                        }
                        required
                      />
                      <label
                        htmlFor={`platform${index + 1}`}
                        className="quiz-radio-label"
                      >
                        <span className="quiz-radio-text">{option.label}</span>
                      </label>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Step 2: Ad Spend */}
              <div className={`quiz-step ${currentStep === 2 ? "active" : ""}`}>
                <div className="quiz-header">
                  <h3 className="quiz-title"></h3>
                </div>

                <h4 className="quiz-question">
                  What&apos;s your monthly ad spend?
                </h4>
                <div className="quiz-radio-group">
                  {[
                    {
                      value: "Less-20k",
                      label: "Less than $20k per month",
                    },
                    {
                      value: "Between-20-100k",
                      label: "Between $20-100k per month",
                    },
                    {
                      value: "Greater-100k",
                      label: "Greater than $100k per month",
                    },
                  ].map((option, index) => (
                    <React.Fragment key={option.value}>
                      <input
                        type="radio"
                        name="adSpend"
                        value={option.value}
                        id={`adSpend${index + 1}`}
                        className="quiz-radio-input"
                        checked={formData.adSpend === option.value}
                        onChange={(e) =>
                          handleInputChange("adSpend", e.target.value)
                        }
                        required
                      />
                      <label
                        htmlFor={`adSpend${index + 1}`}
                        className="quiz-radio-label"
                      >
                        <span className="quiz-radio-text">{option.label}</span>
                      </label>
                    </React.Fragment>
                  ))}
                  {/* <div className="quiz-nav">
                    <button
                      type="button"
                      className="quiz-btn quiz-btn-continue"
                      onClick={nextStep}
                    >
                      Continue
                    </button>
                  </div> */}
                </div>
              </div>

              {/* Step 3: Issues */}
              <div className={`quiz-step ${currentStep === 3 ? "active" : ""}`}>
                <div className="quiz-header">
                  <h3 className="quiz-title"></h3>
                </div>

                <h4 className="quiz-question">
                  What issues are you currently facing?
                </h4>
                <div className="quiz-input-group">
                  <input
                    type="text"
                    className="quiz-input"
                    value={formData.issues}
                    onChange={(e) =>
                      handleInputChange("issues", e.target.value)
                    }
                  />
                </div>
                <div className="quiz-nav">
                  <button
                    type="button"
                    className="quiz-btn quiz-btn-continue"
                    onClick={nextStep}
                  >
                    Continue
                  </button>
                </div>
              </div>

              {/* Step 4: Looking for */}
              <div className={`quiz-step ${currentStep === 4 ? "active" : ""}`}>
                <div className="quiz-header">
                  <h3 className="quiz-title"></h3>
                </div>

                <h4 className="quiz-question">What are you looking for?</h4>
                <div className="quiz-input-group">
                  <input
                    type="text"
                    className="quiz-input"
                    value={formData.lookingFor}
                    onChange={(e) =>
                      handleInputChange("lookingFor", e.target.value)
                    }
                  />
                </div>
                <div className="quiz-nav">
                  <button
                    type="button"
                    className="quiz-btn quiz-btn-continue"
                    onClick={nextStep}
                  >
                    Continue
                  </button>
                </div>
              </div>

              {/* Step 5: Website */}
              <div className={`quiz-step ${currentStep === 5 ? "active" : ""}`}>
                <div className="quiz-header">
                  <h3 className="quiz-title"></h3>
                </div>

                <h4 className="quiz-question">Please share your website URL</h4>
                <div className="quiz-input-group">
                  <input
                    type="text"
                    className="quiz-input"
                    placeholder="https://yourwebsite.com"
                    value={formData.website}
                    onChange={(e) =>
                      handleInputChange("website", e.target.value)
                    }
                  />
                </div>
                <div className="quiz-nav">
                  <button
                    type="button"
                    className="quiz-btn quiz-btn-continue"
                    onClick={nextStep}
                  >
                    Continue
                  </button>
                </div>
              </div>

              {/* Step 6: Contact Info */}
              <div className={`quiz-step ${currentStep === 6 ? "active" : ""}`}>
                <div className="quiz-header">
                  <h3 className="quiz-title"></h3>
                </div>

                <h4 className="quiz-question">
                  Last step - who will we be meeting with?
                </h4>
                <div className="quiz-input-group">
                  <input
                    type="text"
                    className="quiz-input"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    required
                  />
                </div>
                <div className="quiz-input-group">
                  <input
                    type="email"
                    className="quiz-input"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
                <div className="quiz-nav">
                  <button
                    type="submit"
                    className="quiz-btn quiz-btn-submit"
                    // data-cal-namespace="30min"
                    // data-cal-link="harcharran/30min"
                    // data-cal-config='{"layout":"month_view"}'
                  >
                    Book Meeting
                  </button>
                </div>
              </div>

              {/* Step Indicator */}
              <div className="step-indicator">
                {[...Array(totalSteps)].map((_, index) => (
                  <span
                    key={index}
                    className={`step-dot ${
                      index < currentStep ? "active" : ""
                    }`}
                  ></span>
                ))}
              </div>
            </form>
          ) : (
            /* Success State */
            <div className="quiz-success mt-6 active">
              <div className="success-icon">
                <div className="success-checkmark"></div>
              </div>
              <h3 className="success-title">Thank You! 🎉</h3>
              <p className="success-text">
                Your personalized growth strategy is on its way to your inbox.
              </p>
              <p className="success-note">
                Please check your spam folder if you don&apos;t see it within 5
                minutes.
              </p>
              <button className="quiz-btn quiz-btn-submit" onClick={closeModal}>
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizModal;
