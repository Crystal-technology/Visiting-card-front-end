"use client";
import { Info } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const tooltipRef = useRef(null);

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

  const handleClickOutside = (event) => {
    if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
      setShowTooltip(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // const getPasswordStrength = () => {
  //   if (formData.password.length >= 12) return "Too Strong";
  //   if (formData.password.length >= 8) return "Strong password";
  //   return "";
  // };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
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

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    if (!value.trim()) {
      newErrors[name] = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    } else {
      newErrors[name] = "";
    }

    setErrors(newErrors);
  };

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

    if (!validateForm()) return;

    try {
      setLoading(true);
      setErrorMessage("");

      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || `HTTP Error: ${response.status}`);
      }

      console.log("Signup Response:", result);
    } catch (error) {
      console.error("Signup Error:", error.message);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-200 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 text-center">Create an account</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div className="space-y-2">
            <div className="flex gap-1">
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <p className="text-[#ed0707] text-[1.2vw] mt-[-8px]">*</p>
            </div>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 border-gray-300"
              placeholder="John Doe"
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <div className="flex gap-1">
               <label className="block text-sm font-medium text-gray-700">Email address</label>
               <p className="text-[#ed0707] text-[1.2vw] mt-[-8px]">*</p>
            </div>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 border-gray-300"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>

<div className="space-y-2">
            <div className="flex gap-1 items-center">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div
                className="relative z-10"
                onMouseEnter={() => setShowTooltip(true)}
                ref={tooltipRef}
              >  
                <Info className="h-5 w-5 text-gray-500 cursor-pointer" />
                {(showTooltip || formData.password) && (
                  <div className="absolute left-5 top-0 bg-gray-800 text-white text-xs rounded-lg p-2 w-56 shadow-lg">
                    <p>Password must include:</p>
                    <ul className="list-disc ml-4">
                      {passwordConditions.map(({ label, regex }, index) => (
                        <li key={index} className={regex.test(formData.password) ? "text-green-500" : "text-gray-400"}>
                          {label}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 border-gray-300"
              placeholder="Enter Password"
            />
            {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <div className="flex gap-1">
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <p className="text-[#ed0707] text-[1.2vw] mt-[-8px]">*</p>
            </div>
            <input
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 border-gray-300"
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
          </div>
          {/* Terms and Condition */}
          <div className="flex items-center">
             <input id="remember" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">I accept the Terms and Condition</label> 
            </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2.5 rounded-lg font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-center text-[0.8vw] text-gray-600">
          {"Already have an account?  "}
          <a href="/login" className="text-blue-600 hover:text-blue-500">Login</a>
        </p>
      
      </div>
    </div>
  );
};

export default Signup;
