import { useRef } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import useContactForm from '../hooks/useContactForm';

export default function ContactForm() {
  const turnstileRef = useRef(null);

  const {
    formData,
    errors,
    turnstileToken,
    isSubmitting,
    submitStatus,
    submitMessage,
    handleChange,
    setTurnstileToken,
    handleSubmit,
    setErrors,
  } = useContactForm();

  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY || '0x4AAAAAAF1y5EkeLUlssmcU';

  const onSubmit = async (e) => {
    await handleSubmit(e, () => {
      turnstileRef.current?.reset();
    });
  };

  const handleTurnstileSuccess = (token) => {
    setTurnstileToken(token);
  };

  const handleTurnstileExpire = () => {
    setTurnstileToken('');
    setErrors((prev) => ({
      ...prev,
      turnstile: 'Verification token expired. Please verify again.',
    }));
  };

  const handleTurnstileError = (errorCode) => {
    setTurnstileToken('');
    setErrors((prev) => ({
      ...prev,
      turnstile: `Security verification challenge failed (${errorCode || 'Error'}). Please try reloading.`,
    }));
  };

  const isButtonDisabled = !turnstileToken || isSubmitting;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Send Us a Message</h3>
        <p className="mt-1 text-sm text-gray-600">
          Fill out the form below and an advisory specialist will reach out to you within 24 hours.
        </p>
      </div>

      {/* Success Alert */}
      {submitStatus === 'success' && (
        <div
          role="alert"
          className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6 flex items-start gap-3"
        >
          <svg className="w-5 h-5 text-green-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <div className="text-sm">
            <p className="font-semibold">Message Delivered!</p>
            <p className="mt-0.5">{submitMessage}</p>
          </div>
        </div>
      )}

      {/* Error Alert */}
      {submitStatus === 'error' && (
        <div
          role="alert"
          className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6 flex items-start gap-3"
        >
          <svg className="w-5 h-5 text-red-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
          <div className="text-sm">
            <p className="font-semibold">Submission Failed</p>
            <p className="mt-0.5">{submitMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={onSubmit} noValidate className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 border rounded-lg shadow-2xs focus:outline-none focus:ring-2 transition text-gray-900 placeholder:text-gray-400 ${
              errors.name
                ? 'border-red-300 focus:ring-red-400 focus:border-red-400'
                : 'border-gray-300 focus:ring-brand-500 focus:border-brand-500'
            }`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 border rounded-lg shadow-2xs focus:outline-none focus:ring-2 transition text-gray-900 placeholder:text-gray-400 ${
              errors.email
                ? 'border-red-300 focus:ring-red-400 focus:border-red-400'
                : 'border-gray-300 focus:ring-brand-500 focus:border-brand-500'
            }`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        {/* Subject (Optional) */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <span className="text-xs text-gray-500">Optional</span>
          </div>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Inquiry regarding global consultation"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 border rounded-lg shadow-2xs focus:outline-none focus:ring-2 transition text-gray-900 placeholder:text-gray-400 ${
              errors.subject
                ? 'border-red-300 focus:ring-red-400 focus:border-red-400'
                : 'border-gray-300 focus:ring-brand-500 focus:border-brand-500'
            }`}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
          />
          {errors.subject && (
            <p id="subject-error" className="mt-1 text-sm text-red-600">
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Please detail your request or advisory requirements (minimum 10 characters)..."
            disabled={isSubmitting}
            className={`w-full py-3 px-4 border rounded-lg shadow-2xs focus:outline-none focus:ring-2 transition text-gray-900 placeholder:text-gray-400 resize-y ${
              errors.message
                ? 'border-red-300 focus:ring-red-400 focus:border-red-400'
                : 'border-gray-300 focus:ring-brand-500 focus:border-brand-500'
            }`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-600">
              {errors.message}
            </p>
          )}
        </div>

        {/* Cloudflare Turnstile */}
        <div className="pt-2">
          <div className="flex flex-col items-start min-h-[65px]">
            <Turnstile
              ref={turnstileRef}
              siteKey={siteKey}
              onSuccess={handleTurnstileSuccess}
              onError={handleTurnstileError}
              onExpire={handleTurnstileExpire}
              options={{
                theme: 'light',
              }}
            />
          </div>
          {errors.turnstile && (
            <p className="mt-2 text-sm text-red-600">{errors.turnstile}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isButtonDisabled}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 px-8 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
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
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span>Sending Message...</span>
              </>
            ) : (
              <span>Submit Message</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

