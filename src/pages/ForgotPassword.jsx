import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ForgotPassword = ({ onEmailSubmit }) => {
  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
    }),
    onSubmit: (values) => {
      const randomOTP = Math.floor(1000 + Math.random() * 9000);

      console.log("%c VERIFICATION CODE: " + randomOTP, "color: #5E5CE6; font-size: 20px; font-weight: bold;");
      alert(`OTP sent to console!`);

      if (onEmailSubmit) {
        onEmailSubmit(values.email, randomOTP);
      }
    },
  });

  return (
    <div className="flex min-h-screen bg-white">
      <div className="hidden lg:flex lg:w-1/2 bg-[#050714] text-white p-16 flex-col justify-between relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="z-10 text-2xl font-light tracking-tight">Visual think</div>
        <div className="z-10 space-y-6">
          <h1 className="text-6xl font-medium leading-tight">Welcome to <br /> <span className="text-indigo-500">visual think</span></h1>
          <p className="text-gray-400 text-xl max-w-md">Our goal make development easier, fun and efficient.</p>
        </div>
        <div className="z-10 text-sm text-gray-500">© 2025 SamIT Global. All rights reserved.</div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900 mb-2 font-sans">Forgot password</h2>
            <p className="text-gray-500 text-sm">Enter your email address below, and we'll send you instructions on how to reset your password</p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1 ml-1 uppercase">Email address</label>
              <input
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={`w-full px-5 py-3 border rounded-xl outline-none transition-all ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-200 focus:border-indigo-500'
                  }`}
                placeholder="name@company.com"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-xs mt-1 ml-1">{formik.errors.email}</div>
              )}
            </div>

            <button type="submit" className="w-full py-4 bg-[#5E5CE6] text-white rounded-xl font-bold text-lg hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 transition-all active:scale-[0.98]">
              Reset password
            </button>
            <div className="text-center">
              <a href="/login" className="text-sm text-indigo-600 hover:underline">Go back to sign in</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
