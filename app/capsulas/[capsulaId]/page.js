import Cabin from "@/app/_components/Capsula";
import Reservation from "@/app/_components/Reservacion";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data_service";

import Image from "next/image";
import { Suspense } from "react";

// export const metadata = {
//   title: "Cabin",
// };

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.capsulaId);
  return { title: `Cápsula ${name}` };
}

export async function generateStaticParams() {
  const cabins = await getCabins();

  const ids = cabins.map((cabin) => ({ capsulaId: String(cabin.id) }));

  return ids;
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.capsulaId);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserva {cabin.name} hoy. Paga al llegar.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}