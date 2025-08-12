'use client';

import React, { useState } from 'react';
import { CircleAlert } from 'lucide-react';

const ServiceForm = () => {
  const [form, setForm] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceTitle: '',
    heardAbout: 'Google',
  });
  const [status, setStatus] = useState({ message: '', isError: false });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ message: 'Sending...', isError: false });

    try {
      const res = await fetch('/api/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to send');

      setStatus({ message: 'Message sent successfully!', isError: false });
      setForm({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        serviceTitle: '',
        heardAbout: 'Google',
      });
    } catch (error) {
      setStatus({ message: error.message, isError: true });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-white w-full h-full pb-[2%] overflow-hidden bg-[#181818] pt-15">
      <div className="flex flex-col md:flex-row gap-[1%] justify-between">
        <div className="w-[55%] mb-[10%] m-[4%]">
          <div className="flex gap-[8%]">
            <button className="p-5 py-3 text-lg md:text-sm font-semibold bg-[#E73C5F] text-gray-800 rounded-md max-sm:hidden cursor-pointer">
              Book a Demo
            </button>
            <button className="p-5 py-3 text-lg font-semibold md:text-sm text-white bg-[#212121] rounded-md max-sm:hidden cursor-pointer">
              Careers
            </button>
          </div>
          <div className="mt-[15%]">
            <p>
              We're here to help! Complete the form and our team will reach
              out to you soon.
            </p>
          </div>
          <div className="mt-[15%]">
            <p>Email: awaissheikh480@gmail.com</p>
          </div>
        </div>

        <div className="w-full m-[4%] my-0">
          <form onSubmit={handleSubmit} className="flex flex-col gap-[15px]">
            {[
              { label: 'FULL NAME', name: 'fullName', type: 'text', placeholder: 'Enter Your Full Name' },
              { label: 'COMPANY NAME', name: 'companyName', type: 'text', placeholder: 'Enter Your Company Name' },
              { label: 'BUSINESS EMAIL', name: 'email', type: 'email', placeholder: 'Your Business Email' },
              { label: 'PHONE NUMBER', name: 'phone', type: 'tel', placeholder: 'Enter Your Phone Number' },
              { label: 'SERVICE TITLE', name: 'serviceTitle', type: 'text', placeholder: 'Enter Your Service Title' },
            ].map((field) => (
              <React.Fragment key={field.name}>
                <label className="text-xl font-medium">{field.label}</label>
                <input
                  name={field.name}
                  type={field.type}
                  value={form[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                  className="p-5 w-full text-lg font-semibold border border-gray-100 rounded-md bg-[#222] placeholder-gray-500"
                />
              </React.Fragment>
            ))}

            <label className="text-xl font-medium">HOW DID YOU HEAR ABOUT US?</label>
            <select
              name="heardAbout"
              value={form.heardAbout}
              onChange={handleChange}
              className="p-5 text-lg font-semibold border border-gray-100 rounded-md bg-[#222] text-[rgb(114,114,114)]"
            >
              <option value="Google">Google</option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Email">Email</option>
              <option value="Word of Mouth">Word of Mouth</option>
            </select>

            <div className="flex gap-[2%] mt-[3%]">
              <CircleAlert size={60} className="-mt-1" />
              <p className="m-0 pr-10 pt-1 text-justify mt-2">
                Your privacy is important to us. All information submitted
                through this form will be kept confidential and secure.
              </p>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`p-8 py-3 text-lg font-semibold text-white rounded-md ml-[20%] mt-[8%] bg-[#212121] ${
                isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#333]'
              }`}
            >
              {isLoading ? 'Sending...' : 'Get in Touch'}
            </button>

            {status.message && (
              <p className={`mt-4 text-center ${status.isError ? 'text-red-500' : 'text-green-500'}`}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;
