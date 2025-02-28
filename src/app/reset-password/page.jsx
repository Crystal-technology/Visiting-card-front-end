"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const searchParams = useSearchParams();
    const router = useRouter();

    // Get the token from the URL
    const token = searchParams.get("token");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!token) {
            setMessage("Invalid or missing token.");
            return;
        }

        const res = await fetch("/api/auth/reset-password", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token, password }),
        });
        const data = await res.json();
        setMessage(data.message);

        // Redirect user after successful reset
        if (res.ok) {
            setTimeout(() => {
                router.push("/login");
            }, 3000);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
                    Reset Password
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="password"
                        placeholder="New Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        type="submit"
                        className="w-full p-2 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition duration-200"
                    >
                        Reset Password
                    </button>
                </form>
                {message && (
                    <p className="mt-4 text-center text-red-600 font-medium">{message}</p>
                )}
            </div>
        </div>
    );
};

export default ResetPassword;
