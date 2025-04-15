import React, { useState } from "react";

const ResendEmail = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResendEmail = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError(""); // Clear previous errors

    // Simulate sending an email (you can replace this with your actual logic)
    setTimeout(() => {
      // Simulating an email being sent successfully
      setEmailSent(true);
      setLoading(false);
    }, 2000);

    // If you have real email-sending logic, you can call it here, like:
    // await resendVerificationEmail(email);
  };

  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Resend Verification Email</h1>

      {emailSent ? (
        <div className="text-green-500">
          <p>An email has been sent to {email}. Please check your inbox.</p>
        </div>
      ) : (
        <form onSubmit={handleResendEmail} className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Enter your email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your email address"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            disabled={loading}
          >
            {loading ? "Sending..." : "Resend Email"}
          </button>
        </form>
      )}
    </div>
  );
};

export default ResendEmail;
