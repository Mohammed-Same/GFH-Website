"use client";
import { useState } from "react";

export default function HomeContactSection() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(null);
    setError(null);
    setEmailError(null);
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      setSubmitting(false);
      return;
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          message,
        }),
      });
      if (res.ok) {
        setSuccess("Thank you! Your message has been sent.");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-12 px-2 sm:px-4 max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto w-full">
      <h2 className="text-2xl font-bold text-center mb-4">Get in Touch</h2>
      <p className="text-center mb-8 text-gray-600">Have questions? We’re here to help. Reach out to our team anytime.</p>
      <form className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 flex flex-col gap-6 border border-gray-200 w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="flex-1 px-5 py-3 border border-gray-300 rounded-xl focus:border-[#0057D9] focus:ring-2 focus:ring-[#EAF4FF] transition placeholder-gray-400"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="flex-1 px-5 py-3 border border-gray-300 rounded-xl focus:border-[#0057D9] focus:ring-2 focus:ring-[#EAF4FF] transition placeholder-gray-400"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            required
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="px-5 py-3 border border-gray-300 rounded-xl focus:border-[#0057D9] focus:ring-2 focus:ring-[#EAF4FF] transition placeholder-gray-400"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Contact Number"
          className="px-5 py-3 border border-gray-300 rounded-xl focus:border-[#0057D9] focus:ring-2 focus:ring-[#EAF4FF] transition placeholder-gray-400"
          value={phone}
          onChange={e => {
            // Only allow numbers
            const val = e.target.value.replace(/[^0-9]/g, "");
            setPhone(val);
          }}
          minLength={7}
          maxLength={15}
        />
        <textarea
          placeholder="Message"
          className="px-5 py-3 border border-gray-300 rounded-xl min-h-[100px] max-h-[300px] focus:border-[#0057D9] focus:ring-2 focus:ring-[#EAF4FF] transition placeholder-gray-400 resize-vertical"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
          minLength={10}
        />
        <button
          type="submit"
          className="px-8 py-3 bg-orange-500 text-white rounded-full font-semibold shadow hover:bg-orange-600 transition"
          disabled={submitting}
        >
          {submitting ? "Sending..." : "Send Message"}
        </button>
        {emailError && <div className="text-red-600 text-center font-semibold mt-2">{emailError}</div>}
        {success && <div className="text-green-600 text-center font-semibold mt-2">{success}</div>}
        {error && <div className="text-red-600 text-center font-semibold mt-2">{error}</div>}
      </form>
    </section>
  );
}
  