"use client";
import { useState } from "react";

export default function CareersPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    resume: "",
    coverLetter: "",
    whyGFH: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess(false);
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSuccess(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        resume: "",
        coverLetter: "",
        whyGFH: "",
      });
    } catch (err: any) {
      setError(err.message || "Submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-4 min-h-screen bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">Careers at GFH Telecom</h2>
        <p className="text-center text-gray-600 mb-8">Apply to join our team! Please fill out the form below.</p>
        <form className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 flex flex-col gap-6 border border-gray-200 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name *"
              className="flex-1 px-5 py-3 border border-gray-300 rounded-xl focus:border-[#0057D9] focus:ring-2 focus:ring-[#EAF4FF] transition placeholder-gray-400"
              value={form.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name *"
              className="flex-1 px-5 py-3 border border-gray-300 rounded-xl focus:border-[#0057D9] focus:ring-2 focus:ring-[#EAF4FF] transition placeholder-gray-400"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email *"
            className="px-5 py-3 border border-gray-300 rounded-xl focus:border-[#0057D9] focus:ring-2 focus:ring-[#EAF4FF] transition placeholder-gray-400"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="Contact Number *"
            className="px-5 py-3 border border-gray-300 rounded-xl focus:border-[#0057D9] focus:ring-2 focus:ring-[#EAF4FF] transition placeholder-gray-400"
            value={form.phone}
            onChange={e => {
              const val = e.target.value.replace(/[^0-9]/g, "");
              handleChange({ target: { name: "phone", value: val } });
            }}
            minLength={7}
            maxLength={15}
          />
          <input
            type="text"
            name="position"
            placeholder="Position Applying For *"
            className="px-5 py-3 border border-gray-300 rounded-xl focus:border-[#0057D9] focus:ring-2 focus:ring-[#EAF4FF] transition placeholder-gray-400"
            value={form.position}
            onChange={handleChange}
            required
          />
          <textarea
            name="experience"
            placeholder="Briefly describe your relevant experience *"
            className="px-5 py-3 border border-gray-300 rounded-xl min-h-[80px] max-h-[200px] focus:border-[#0057D9] focus:ring-2 focus:ring-[#EAF4FF] transition placeholder-gray-400 resize-vertical"
            value={form.experience}
            onChange={handleChange}
            required
          />
          <textarea
            name="coverLetter"
            placeholder="Cover Letter (optional)"
            className="px-5 py-3 border border-gray-300 rounded-xl min-h-[80px] max-h-[200px] focus:border-[#0057D9] focus:ring-2 focus:ring-[#EAF4FF] transition placeholder-gray-400 resize-vertical"
            value={form.coverLetter}
            onChange={handleChange}
          />
          <textarea
            name="whyGFH"
            placeholder="Why do you want to work at GFH Telecom? *"
            className="px-5 py-3 border border-gray-300 rounded-xl min-h-[80px] max-h-[200px] focus:border-[#0057D9] focus:ring-2 focus:ring-[#EAF4FF] transition placeholder-gray-400 resize-vertical"
            value={form.whyGFH}
            onChange={handleChange}
            required
          />
          <input
            type="url"
            name="resume"
            placeholder="Link to Resume (Google Drive, Dropbox, etc.) *"
            className="px-5 py-3 border border-gray-300 rounded-xl focus:border-[#0057D9] focus:ring-2 focus:ring-[#EAF4FF] transition placeholder-gray-400"
            value={form.resume}
            onChange={handleChange}
            required
          />
          {error && <div className="text-red-600 text-center font-semibold mt-2">{error}</div>}
          {success && <div className="text-green-600 text-center font-semibold mt-2">Application submitted successfully!</div>}
          <button type="submit" className="px-8 py-3 bg-[#ff8200] text-white rounded-full font-semibold shadow hover:bg-orange-600 transition text-lg" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </section>
  );
}
