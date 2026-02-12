import React, { useState } from 'react';
import ForgotPassword from './ForgotPassword';
import OTPVerification from './OTPVerification';

const AuthFlow = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState(null);

  const handleEmailSubmitted = (userEmail, otp) => {
    setEmail(userEmail);
    setGeneratedOtp(otp);
    setStep(2);
  };

  const handleVerifySuccess = () => {
    alert("OTP Verified! You can now reset your password.");
  };

  return (
    <div>
      {step === 1 && (
        <ForgotPassword onEmailSubmit={handleEmailSubmitted} />
      )}
      {step === 2 && (
        <OTPVerification
          email={email}
          correctOTP={generatedOtp}
          onVerifySuccess={handleVerifySuccess}
        />
      )}
    </div>
  );
};

export default AuthFlow;
