import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Must contain one uppercase letter')
      .matches(/[0-9]/, 'Must contain one number')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Must contain one special character')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: { firstName: '', lastName: '', email: '', password: '' },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      localStorage.setItem('userData', JSON.stringify(values));
      console.log('User Registered:', values);
      navigate('/login');
    },
  });

  return (
    <div className="flex min-h-screen bg-white">
      <div className="hidden lg:flex lg:w-1/2 bg-[#050714] text-white p-16 flex-col justify-between relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="z-10 text-2xl font-light tracking-tight">Visual think</div>
        <div className="z-10 space-y-6">
          <h1 className="text-6xl font-medium leading-tight">Welcome to <br /><span className="text-indigo-500">visual think</span></h1>
          <p className="text-gray-400 text-xl max-w-md">Our goal make development easier, fun and efficient.</p>
        </div>
        <div className="z-10 text-sm text-gray-500">© 2025 SamIT Global. All rights reserved.</div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">Sign up now</h2>
            <p className="text-gray-500 text-sm">Already have an account? <a href="/login" className="text-indigo-600 hover:underline">Log in</a></p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider">First name</label>
                <input name="firstName" type="text" {...formik.getFieldProps('firstName')} className={`w-full px-4 py-3 border rounded-xl outline-none transition-all ${formik.touched.firstName && formik.errors.firstName ? 'border-red-500' : 'border-gray-200 focus:border-indigo-500'}`} />
              </div>
              <div className="w-1/2">
                <label className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider">Last name</label>
                <input name="lastName" type="text" {...formik.getFieldProps('lastName')} className={`w-full px-4 py-3 border rounded-xl outline-none transition-all ${formik.touched.lastName && formik.errors.lastName ? 'border-red-500' : 'border-gray-200 focus:border-indigo-500'}`} />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider">Email address</label>
              <input name="email" type="email" {...formik.getFieldProps('email')} className={`w-full px-4 py-3 border rounded-xl outline-none transition-all ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-200 focus:border-indigo-500'}`} />
              {formik.touched.email && formik.errors.email && <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>}
            </div>

            <div className="relative">
              <div className="flex justify-between mb-1">
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Password</label>
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1">
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />} {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              <input name="password" type={showPassword ? 'text' : 'password'} {...formik.getFieldProps('password')} className={`w-full px-4 py-3 border rounded-xl outline-none transition-all ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-200 focus:border-indigo-500'}`} />
              {formik.touched.password && formik.errors.password && <p className="text-red-500 text-[10px] mt-1 leading-tight">{formik.errors.password}</p>}
            </div>

            <button type="submit" className="w-full py-4 bg-[#5E5CE6] text-white rounded-xl font-bold text-lg hover:bg-indigo-700 shadow-lg transition-all active:scale-[0.98] mt-4">Create account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
