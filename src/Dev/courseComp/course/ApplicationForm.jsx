'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function ApplicationForm({ courseTitle }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    course: courseTitle || '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [verificationStep, setVerificationStep] = useState(0); // 0: not started, 1: code sent, 2: verified
  const [verificationCode, setVerificationCode] = useState('');
  const [userEnteredCode, setUserEnteredCode] = useState('');
  const [isSendingCode, setIsSendingCode] = useState(false);
  const [codeSentSuccess, setCodeSentSuccess] = useState(false);
  const verifyEmailRef = useRef(null);

  useEffect(() => {
    if (verificationStep === 1 && verifyEmailRef.current) {
      verifyEmailRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [verificationStep]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const sendVerificationCode = async () => {
    if (!formData.email) {
      setErrors({ email: 'Email is required' });
      return false;
    }

    setIsSendingCode(true);
    setCodeSentSuccess(false);
    setErrors({});

    try {
      const code = generateVerificationCode();
      setVerificationCode(code);
      
      const response = await fetch('/api/sendVerification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          code: code,
        }),
      });

      if (!response.ok) throw new Error('Failed to send verification code');

      setVerificationStep(1);
      setCodeSentSuccess(true);
      return true;
    } catch (error) {
      console.error('Error sending verification code:', error);
      setErrors({ verification: error.message });
      return false;
    } finally {
      setIsSendingCode(false);
    }
  };

  const verifyCode = () => {
    if (userEnteredCode === verificationCode) {
      setVerificationStep(2);
      setErrors({});
      return true;
    } else {
      setErrors({ verification: 'Invalid verification code' });
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (verificationStep < 2) {
      if (verificationStep === 0) {
        await sendVerificationCode();
      } else {
        verifyCode();
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          pageUrl: window.location.href
        }),
      });

      if (!response.ok) throw new Error('Failed to submit application');

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        course: courseTitle || '',
      });
    } catch (error) {
      console.error('Error submitting application:', error);
      setErrors({ submit: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-green-100 border border-green-400 text-green-800 px-6 py-4 rounded-md shadow-md">
        <p className="text-lg font-semibold mb-1">Application Submitted Successfully!</p>
        <p className="text-sm">We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700 max-w-xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-white mb-2">Apply for {courseTitle}</h2>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-600 bg-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5209DE] transition"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div ref={verifyEmailRef}>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-600 bg-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5209DE] transition"
          disabled={verificationStep > 0}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-600 bg-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5209DE] transition"
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="course" className="block text-sm font-medium text-gray-300 mb-1">
          Course
        </label>
        <input
          type="text"
          id="course"
          name="course"
          value={formData.course}
          readOnly
          className="w-full rounded-lg border border-gray-600 bg-gray-700 text-white px-4 py-2 cursor-not-allowed"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-600 bg-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5209DE] transition"
        />
      </div>

      {verificationStep === 1 && (
        <div  className="space-y-4 bg-gray-700 p-4 rounded-lg">
          {codeSentSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-800 px-4 py-2 rounded-md mb-2">
              <p className="text-sm">Verification code sent successfully!</p>
            </div>
          )}
          <p className="text-white text-sm">
            We've sent a verification code to your email. Please enter it below:
          </p>
          <div>
            <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-300 mb-1">
              Verification Code
            </label>
            <input
              type="text"
              id="verificationCode"
              value={userEnteredCode}
              onChange={(e) => setUserEnteredCode(e.target.value)}
              className="w-full rounded-lg border border-gray-600 bg-gray-800 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5209DE] transition"
            />
            {errors.verification && <p className="text-red-500 text-xs mt-1">{errors.verification}</p>}
          </div>
        </div>
      )}

      {verificationStep === 2 && (
        <div className="bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded-md">
          <p className="text-sm">Email verified successfully!</p>
        </div>
      )}

      {errors.submit && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md">
          {errors.submit}
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={isSubmitting || isSendingCode}
          className="w-full bg-[#5209DE] hover:bg-[#3E07A8] text-white font-semibold py-2 px-4 rounded-lg shadow-md transition focus:outline-none focus:ring-2 focus:ring-[#3E07A8] disabled:opacity-50"
        >
          {isSendingCode ? 'Sending Code...' : 
           verificationStep === 0 ? 'Send Verification Code' : 
           verificationStep === 1 ? 'Verify Code' : 
           isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </div>
    </form>
  );
}