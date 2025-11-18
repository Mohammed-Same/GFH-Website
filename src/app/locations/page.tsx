export const dynamic = "force-dynamic";
"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

function getUniqueStates(locations: Store[]) {
  const stateSet = new Set<string>();
  locations.forEach((store) => {
    if (store.state) stateSet.add(store.state);
  });
  return Array.from(stateSet).sort();
}

type Store = {
  name: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  hours: string;
  description?: string;
};

const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_LOCATIONS_URL;

async function getLocations(): Promise<Store[]> {
  if (!APPS_SCRIPT_URL) throw new Error("Google Apps Script URL not configured");
  const res = await fetch(APPS_SCRIPT_URL, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.data;
}

export default function LocationsPage() {
  const [locations, setLocations] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);
  const [uniqueStates, setUniqueStates] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedState = searchParams.get("state") || "";

  useEffect(() => {
    getLocations().then((data) => {
      setLocations(data);
      setUniqueStates(getUniqueStates(data));
      setLoading(false);
    });
  }, []);

  const handleFilter = (code: string) => {
    if (code) {
      router.push(`?state=${code}`);
    } else {
      router.push("/locations");
    }
  };

  const filteredStores = locations.filter(
    (store: Store) => (!selectedState || store.state === selectedState)
  );

  return (
    <section className="py-16 px-4 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-2 text-gray-900" style={{fontFamily: 'Inter, Arial, Helvetica, sans-serif'}}>Our Locations</h2>
        <p className="text-center text-lg text-gray-500 mb-10">Visit any of our convenient store locations for expert assistance with your wireless needs</p>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <button
            key="all"
            onClick={() => handleFilter("")}
            className={`whitespace-nowrap px-6 py-2 rounded-full border-2 border-[#ff8200] text-base font-semibold transition-all duration-150 ${selectedState === "" ? "bg-[#ff8200] text-white" : "bg-white text-[#ff8200] hover:bg-orange-100"}`}
            style={{ fontFamily: "Inter, Arial, Helvetica, sans-serif", minWidth: 120, boxShadow: selectedState === "" ? '0 4px 16px 0 rgba(255,130,0,0.10)' : undefined }}
            type="button"
          >
            All States
          </button>
          {uniqueStates.map((state) => (
            <button
              key={state}
              onClick={() => handleFilter(state)}
              className={`whitespace-nowrap px-6 py-2 rounded-full border-2 border-[#ff8200] text-base font-semibold transition-all duration-150 ${selectedState === state ? "bg-[#ff8200] text-white" : "bg-white text-[#ff8200] hover:bg-orange-100"}`}
              style={{ fontFamily: "Inter, Arial, Helvetica, sans-serif", minWidth: 120, boxShadow: selectedState === state ? '0 4px 16px 0 rgba(255,130,0,0.10)' : undefined }}
              type="button"
            >
              {state}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {loading ? (
            <div className="col-span-full text-center text-gray-500">Loading...</div>
          ) : filteredStores.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">No stores found.</div>
          ) : (
            filteredStores.map((store, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow border border-gray-200 p-8 flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-2">
                  <FaMapMarkerAlt className="text-blue-500 text-lg" />
                  <h3 className="text-2xl font-bold text-gray-900">{store.name}</h3>
                </div>
                <div className="mb-1">
                  <span className="font-bold text-gray-900">{store.address}</span><br />
                  <span className="text-gray-600">{store.city}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FaPhoneAlt className="text-base" />
                  <span>{store.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FaClock className="text-base" />
                  <span>{store.hours}</span>
                </div>
                {store.description && (
                  <div className="text-gray-500 text-sm mt-2">{store.description}</div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}


