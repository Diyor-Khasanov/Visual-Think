import React, { useState } from 'react';

const OTPVerification = ({ email, correctOTP, onVerifySuccess }) => {
  const [otpInput, setOtpInput] = useState("");
  const [error, setError] = useState("");

  const handleVerify = () => {
    if (otpInput === correctOTP.toString()) {
      onVerifySuccess();
    } else {
      setError("Invalid code. Please check your console.");
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      <div className="hidden lg:flex lg:w-1/2 bg-[#050714] text-white p-16 flex-col justify-between relative">
        <div className="z-10 space-y-6">
          <h1 className="text-5xl font-medium leading-tight">Compose your dream <br /> startup <span className="text-indigo-500">here...</span></h1>
          <p className="text-gray-400 text-xl">Our goal make development easier, fun and efficient.</p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md space-y-8 text-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">Check your Email</h2>
            <p className="text-gray-500 text-sm">
              We've sent a 4-digit code to <b>{email}</b>. <br />
              Check your console for the test code.
            </p>
          </div>

          <div className="space-y-4 text-left">
            <input
              type="text"
              maxLength="4"
              value={otpInput}
              onChange={(e) => setOtpInput(e.target.value)}
              className="w-full px-5 py-4 border-2 border-dashed border-gray-300 rounded-xl text-center text-3xl tracking-[1rem] focus:border-indigo-500 focus:border-solid outline-none transition-all"
              placeholder="0000"
            />
            {error && <p className="text-red-500 text-xs text-center">{error}</p>}

            <button
              onClick={handleVerify}
              className="w-full py-4 bg-[#5E5CE6] text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all"
            >
              Verify OTP
            </button>
          </div>

          <p className="text-xs text-gray-400">
            Still having issues logging in? Please contact our support team at <span className="text-indigo-600 font-medium">support@visualthink</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification
