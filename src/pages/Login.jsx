import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const savedUser = JSON.parse(localStorage.getItem('userData'));

      if (savedUser && savedUser.email === values.email && savedUser.password === values.password) {
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/dashboard');
      } else {
        alert("Invalid email or password. Please register if you haven't yet.");
      }
    },
  });

  const handleSocialLogin = (provider) => {
    alert(`${provider} login initiated real-time.`);
  };

  return (
    <div className="flex min-h-screen bg-white">
      <div className="hidden lg:flex lg:w-1/2 bg-[#050714] text-white p-16 flex-col justify-between relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="z-10 text-2xl font-light tracking-tight">Visual think</div>
        <div className="z-10 space-y-6">
          <h1 className="text-6xl font-medium leading-tight">Welcome to <br /><span className="text-indigo-500">Visual think</span></h1>
          <p className="text-gray-400 text-xl max-w-md">Our goal make development easier, fun and efficient.</p>
        </div>
        <div className="z-10 text-sm text-gray-500">© 2025 SamIT Global. All rights reserved.</div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">Log in</h2>
            <p className="text-gray-500 text-sm">Don't have an account? <a href="/register" className="text-indigo-600 hover:underline">Sign up</a></p>
          </div>

          <div className="space-y-3">
            <button type="button" onClick={() => handleSocialLogin('Facebook')} className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-all active:scale-[0.98]">
              <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="h-5 w-5" alt="FB" />
              <span className="text-gray-700 font-medium">Log in with Facebook</span>
            </button>
            <button type="button" onClick={() => handleSocialLogin('Google')} className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-all active:scale-[0.98]">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="h-5 w-5" alt="G" />
              <span className="text-gray-700 font-medium">Log in with Google</span>
            </button>
          </div>

          <div className="relative flex items-center py-4">
            <div className="grow border-t border-gray-200"></div>
            <span className="shrink mx-4 text-gray-400 text-xs uppercase tracking-widest">OR</span>
            <div className="grow border-t border-gray-200"></div>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1 ml-1 uppercase">Your email</label>
              <input name="email" type="email" {...formik.getFieldProps('email')} className={`w-full px-5 py-3 border rounded-xl outline-none transition-all text-gray-800 ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-200 focus:border-indigo-500'}`} placeholder="name@company.com" />
              {formik.touched.email && formik.errors.email && <div className="text-red-500 text-xs mt-1 ml-1">{formik.errors.email}</div>}
            </div>

            <div className="relative">
              <div className="flex justify-between items-center mb-1 ml-1">
                <label className="text-xs font-medium text-gray-500 uppercase">Your password</label>
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1">
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />} {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              <input name="password" type={showPassword ? 'text' : 'password'} {...formik.getFieldProps('password')} className={`w-full px-5 py-3 border rounded-xl outline-none transition-all text-gray-800 ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-200 focus:border-indigo-500'}`} placeholder="••••••••" />
              {formik.touched.password && formik.errors.password && <div className="text-red-500 text-xs mt-1 ml-1 leading-tight">{formik.errors.password}</div>}
              <div className="text-right mt-2"><a href="/forgot-password" className="text-xs text-gray-400 hover:text-indigo-600">Forgot your password?</a></div>
            </div>

            <button type="submit" className="w-full py-4 bg-[#5E5CE6] text-white rounded-xl font-bold text-lg hover:bg-indigo-700 shadow-lg transition-all active:scale-[0.98]">Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
