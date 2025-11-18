// app/locations/page.tsx
import { Suspense } from "react";
import LocationsPageClient from "./LocationsPageClient";

export const dynamic = "force-dynamic";

export default function LocationsPage() {
  return (
    <Suspense
      fallback={
        <section className="py-16 px-4 min-h-screen bg-white">
          <div className="max-w-6xl mx-auto text-center text-gray-500">
            Loading locations...
          </div>
        </section>
      }
    >
      <LocationsPageClient />
    </Suspense>
  );
}
