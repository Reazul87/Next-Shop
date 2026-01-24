"use client";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSubmitted(false);

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Here you would normally send to backend/API
    // For demo: just show success
    toast.info(`Thank you! You've been subscribed with: ${email}`);

    // Reset form
    setEmail("");
    setSubmitted(true);
  };

  return (
    <section className="py-6 md:py-10 bg-linear-to-r from-indigo-50 to-purple-50 text-gray-900">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">
          Stay in the Loop
        </h2>
        <p className="text-md md:text-2xl opacity-90 mb-5 md:mb-8 max-w-2xl mx-auto">
          Get exclusive deals, new arrivals and 10% off your first order
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-2.5 max-w-xl mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`
              flex-1 px-6 py-3 rounded-full text-gray-900 
              border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
              ${error ? "border-red-500" : ""}
            `}
          />
          <button
            type="submit"
            className="btn btn-lg btn-primary font-semibold rounded-full active:scale-95 hover:scale-103 cursor-pointer"
          >
            Subscribe
          </button>
        </form>

        {error && <p className="mt-4 text-red-600 font-medium">{error}</p>}

        {submitted && !error && (
          <p className="mt-2 text-green-600 font-medium">
            Thank you for subscribing!
          </p>
        )}

        <p className="mt-2 text-sm text-gray-600 opacity-80">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
