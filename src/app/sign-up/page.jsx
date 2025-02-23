"use client";

import { Eye, EyeOff, Info } from "lucide-react";
import { useState } from "react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState(false);
  

 const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Password validation conditions
  const passwordConditions = [
    { label: "8-16 characters", regex: /^.{8,16}$/ },
    { label: "At least 1 uppercase letter", regex: /[A-Z]/ },
    { label: "At least 1 lowercase letter", regex: /[a-z]/ },
    { label: "At least 1 digit", regex: /\d/ },
    { label: "At least 1 special character (@$!%*?&)", regex: /[@$!%*?&]/ },
  ];

  const getPasswordStrength = () => {
    if (formData.password.length >= 12) return "Too Strong";
    if (formData.password.length >= 8) return "Strong password";
    return "";
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    const allConditionsMet = passwordConditions.every((condition) =>
      condition.regex.test(formData.password)
    );

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (!allConditionsMet) {
      newErrors.password = "Password does not meet the requirements";
      isValid = false;
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const fetchdata = async(userData)=>{
    try{
        setLoading(true);
  setSuccessMessage("");
  setErrorMessage("");
console.log("hiiii")
  const response = await fetch('http://localhost:5000/api/auth/signup',{
    method : 'POST',
    headers :{
        'content-Type' : 'application/json',
    },
    body :JSON.stringify(userData)
  });
  console.log("res------",response)
  if(!response.ok){
    const errorData = await response.json(); 
  }
    const result= await response.json();
    setSuccessMessage("Signup successful! 🎉");
  console.log("Signup Response:", result);
}
catch (error) {
    setErrorMessage(error.message);
  } finally {
    setLoading(false);
  }
}

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };




  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting signup form...");
  
    try {
      setLoading(true);
    //   setSuccessMessage("");
      setErrorMessage("");
  
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Use formData instead of userData
      });
  
      const result = await response.json(); // Parse response once
  
      if (!response.ok) {
        throw new Error(result.message || `HTTP Error: ${response.status}`);
      }
  
    //   setSuccessMessage("Signup successful! 🎉");
      console.log("Signup Response:", result);
    } catch (error) {
    //   setErrorMessage(error.message);
      console.error("Signup Error:", error.message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-200 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Create an account
          </h1>
          <p className="text-gray-500">
            Sign up to get started with our platform
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 border-gray-300"
              placeholder="John Doe"
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 border-gray-300"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>

          {/* Password Field */}
          <div className="space-y-2 relative">
            <label htmlFor="password" className="flex gap-3 text-sm font-medium text-gray-700">
              Password
               {/* Info Tooltip */}
              <div
                className="relative z-10"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >  
              <Info className="h-5 w-5 text-gray-500 cursor-pointer" />
                {showTooltip && (
                    <div className="absolute left-5 top-0 bg-gray-800 text-white text-xs rounded-lg p-2 w-56 shadow-lg">
                    <p>Password must include:</p>
                    <ul className="list-disc ml-4">
                      {passwordConditions.map(({ label }, index) => (
                          <li key={index}>{label}</li>
                        ))}
                    </ul>
                  </div>
                )}
                </div>
            </label>
            <div className="flex items-center space-x-2">
              <div className="relative w-full">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => setPasswordFocused(false)}
                  onChange={handleChange}
                  className="w-full pr-10 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 border-gray-300"
                  placeholder="Enter Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
             </div>
             {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
            {/* Password Strength Indicator */}
            {formData.password.length >= 8 && (
              <p className="text-sm font-semibold text-green-600">{getPasswordStrength()}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="space-y-2 relativ">
          <div className="flex items-center space-x-2">
          <div className="relative w-full">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm  focus:ring-2 focus:ring-purple-500 border-gray-300"
              placeholder="confirm Password"
            />
            <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
            </div>
            </div>
            {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2.5 rounded-lg font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
