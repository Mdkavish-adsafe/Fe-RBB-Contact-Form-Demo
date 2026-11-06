import { useState, useCallback } from 'react';
import { submitContactForm } from '../services/api';

const initialFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export function useContactForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [turnstileToken, setTurnstileTokenState] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null | 'success' | 'error'
  const [submitMessage, setSubmitMessage] = useState('');

  const validateForm = useCallback(() => {
    const newErrors = {};

    const trimmedName = formData.name.trim();
    if (!trimmedName) {
      newErrors.name = 'Full name is required.';
    } else if (trimmedName.length < 2 || trimmedName.length > 100) {
      newErrors.name = 'Name must be between 2 and 100 characters.';
    }

    const trimmedEmail = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(trimmedEmail)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    const trimmedSubject = formData.subject.trim();
    if (trimmedSubject && trimmedSubject.length > 200) {
      newErrors.subject = 'Subject must not exceed 200 characters.';
    }

    const trimmedMessage = formData.message.trim();
    if (!trimmedMessage) {
      newErrors.message = 'Message is required.';
    } else if (trimmedMessage.length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    } else if (trimmedMessage.length > 2000) {
      newErrors.message = 'Message must not exceed 2000 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const updated = { ...prev };
      delete updated[name];
      return updated;
    });
  }, []);

  const setTurnstileToken = useCallback((token) => {
    setTurnstileTokenState(token || '');
    if (token) {
      setErrors((prev) => {
        if (!prev.turnstile) return prev;
        const updated = { ...prev };
        delete updated.turnstile;
        return updated;
      });
    }
  }, []);

  const resetForm = useCallback(() => {
    setFormData(initialFormState);
    setErrors({});
    setTurnstileTokenState('');
    setIsSubmitting(false);
    setSubmitStatus(null);
    setSubmitMessage('');
  }, []);

  const handleSubmit = useCallback(
    async (e, onSuccess) => {
      if (e && typeof e.preventDefault === 'function') {
        e.preventDefault();
      }

      setSubmitStatus(null);
      setSubmitMessage('');

      const isValid = validateForm();
      if (!isValid) {
        return false;
      }

      if (!turnstileToken) {
        setErrors((prev) => ({
          ...prev,
          turnstile: 'Please complete the security verification challenge.',
        }));
        return false;
      }

      setIsSubmitting(true);

      try {
        const payload = {
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          turnstileToken,
        };

        const result = await submitContactForm(payload);

        setSubmitStatus('success');
        setSubmitMessage(
          result?.message || 'Thank you! Your message has been sent successfully. We will be in touch shortly.'
        );
        setFormData(initialFormState);
        setTurnstileTokenState('');
        setErrors({});

        if (typeof onSuccess === 'function') {
          onSuccess(result);
        }

        return true;
      } catch (err) {
        setSubmitStatus('error');
        setSubmitMessage(
          err?.message || 'Failed to submit the form. Please check your connection and try again.'
        );
        return false;
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, turnstileToken, validateForm]
  );

  return {
    formData,
    errors,
    turnstileToken,
    isSubmitting,
    submitStatus,
    submitMessage,
    validateForm,
    handleChange,
    setTurnstileToken,
    handleSubmit,
    resetForm,
    setErrors,
    setSubmitStatus,
    setSubmitMessage,
  };
}

export default useContactForm;

