// app/landlord-portal/page.tsx
"use client";

import { useState } from "react";

export default function LandlordPortal() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    insurance: {
      generalLiability: false,
      businessInterruption: false,
      workersComp: false,
      other: false,
      otherText: "",
    },
    reason: {
      renewal: false,
      newHolder: false,
      newManager: false,
      other: false,
      otherText: "",
    },
    additional: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    if (name.startsWith("insurance.")) {
      const key = name.split(".")[1];
      setForm((f) => ({
        ...f,
        insurance: {
          ...f.insurance,
          [key]: type === "checkbox" ? checked : value,
        },
      }));
    } else if (name.startsWith("reason.")) {
      const key = name.split(".")[1];
      setForm((f) => ({
        ...f,
        reason: {
          ...f.reason,
          [key]: type === "checkbox" ? checked : value,
        },
      }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess(false);
    try {
      const res = await fetch("/api/landlord-portal", {
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
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        insurance: {
          generalLiability: false,
          businessInterruption: false,
          workersComp: false,
          other: false,
          otherText: "",
        },
        reason: {
          renewal: false,
          newHolder: false,
          newManager: false,
          other: false,
          otherText: "",
        },
        additional: "",
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
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">Certificate of Insurance Request</h2>
        <p className="text-center text-gray-600 mb-8">for GFH Telecom LLC.</p>
        <form className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 flex flex-col gap-6 border border-gray-200 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="flex-1 px-5 py-3 border border-gray-300 rounded-xl focus:border-[#0057D9] focus:ring-2 focus:ring-[#EAF4FF] transition placeholder-gray-400"
              value={form.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="flex-1 px-5 py-3 border border-gray-300 rounded-xl focus:border-[#0057D9] focus:ring-2 focus:ring-[#EAF4FF] transition placeholder-gray-400"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
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
            placeholder="Contact Number"
            className="px-5 py-3 border border-gray-300 rounded-xl focus:border-[#0057D9] focus:ring-2 focus:ring-[#EAF4FF] transition placeholder-gray-400"
            value={form.phone}
            onChange={e => {
              const val = e.target.value.replace(/[^0-9]/g, "");
              handleChange({ target: { name: "phone", value: val } });
            }}
            minLength={7}
            maxLength={15}
          />
          <div>
            <label className="block font-semibold mb-1">Location Address *</label>
            <input name="address1" value={form.address1} onChange={handleChange} required placeholder="Address Line 1" className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:border-[#0057D9] focus:ring-2 focus:ring-[#EAF4FF] transition placeholder-gray-400 mb-2" />
            <input name="address2" value={form.address2} onChange={handleChange} placeholder="Address Line 2" className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:border-[#0057D9] focus:ring-2 focus:ring-[#EAF4FF] transition placeholder-gray-400 mb-2" />
            <div className="flex flex-col md:flex-row gap-2">
              <input name="city" value={form.city} onChange={handleChange} placeholder="City" className="flex-1 px-5 py-3 border border-gray-300 rounded-xl focus:border-[#0057D9] focus:ring-2 focus:ring-[#EAF4FF] transition placeholder-gray-400" />
              <input name="state" value={form.state} onChange={handleChange} placeholder="State" className="flex-1 px-5 py-3 border border-gray-300 rounded-xl focus:border-[#0057D9] focus:ring-2 focus:ring-[#EAF4FF] transition placeholder-gray-400" />
              <input name="zip" value={form.zip} onChange={handleChange} placeholder="Zip Code" className="flex-1 px-5 py-3 border border-gray-300 rounded-xl focus:border-[#0057D9] focus:ring-2 focus:ring-[#EAF4FF] transition placeholder-gray-400" style={{ minWidth: 0 }} />
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1">Insurance Required: Type of Policy Requested</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <label className="inline-flex items-center"><input type="checkbox" name="insurance.generalLiability" checked={form.insurance.generalLiability} onChange={handleChange} className="mr-2" />General Liability</label>
              <label className="inline-flex items-center"><input type="checkbox" name="insurance.businessInterruption" checked={form.insurance.businessInterruption} onChange={handleChange} className="mr-2" />Business Interruption Coverage</label>
              <label className="inline-flex items-center"><input type="checkbox" name="insurance.workersComp" checked={form.insurance.workersComp} onChange={handleChange} className="mr-2" />Workers' Compensation</label>
              <div className="flex items-center">
                <input type="checkbox" name="insurance.other" checked={form.insurance.other} onChange={handleChange} className="mr-2" />
                <input name="insurance.otherText" value={form.insurance.otherText} onChange={handleChange} placeholder="Other" className="border border-gray-300 rounded-xl px-5 py-3 flex-1 focus:border-[#0057D9] focus:ring-2 focus:ring-[#EAF4FF] transition placeholder-gray-400" />
              </div>
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1">Reason for Request *</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <label className="inline-flex items-center"><input type="checkbox" name="reason.renewal" checked={form.reason.renewal} onChange={handleChange} className="mr-2" />Renewal Only</label>
              <label className="inline-flex items-center"><input type="checkbox" name="reason.newHolder" checked={form.reason.newHolder} onChange={handleChange} className="mr-2" />New Certificate Holder</label>
              <label className="inline-flex items-center"><input type="checkbox" name="reason.newManager" checked={form.reason.newManager} onChange={handleChange} className="mr-2" />New Property Manager</label>
              <div className="flex items-center">
                <input type="checkbox" name="reason.other" checked={form.reason.other} onChange={handleChange} className="mr-2" />
                <input name="reason.otherText" value={form.reason.otherText} onChange={handleChange} placeholder="Other" className="border border-gray-300 rounded-xl px-5 py-3 flex-1 focus:border-[#0057D9] focus:ring-2 focus:ring-[#EAF4FF] transition placeholder-gray-400" />
              </div>
            </div>
          </div>
          <div>
            <label className="block font-semibold">Additional Information</label>
            <textarea name="additional" value={form.additional} onChange={handleChange} className="w-full px-5 py-3 border border-gray-300 rounded-xl min-h-[100px] max-h-[300px] focus:border-[#0057D9] focus:ring-2 focus:ring-[#EAF4FF] transition placeholder-gray-400 resize-vertical" rows={3} />
          </div>
          {error && <div className="text-red-600 text-center font-semibold mt-2">{error}</div>}
          {success && <div className="text-green-600 text-center font-semibold mt-2">Request submitted successfully!</div>}
          <button type="submit" className="px-8 py-3 bg-[#ff8200] text-white rounded-full font-semibold shadow hover:bg-orange-600 transition text-lg" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}
