import Link from "next/link";

export default function Page() {
    return (
      <div className="text-center space-y-6 mt-4">
        <h1 className="text-3xl font-semibold">
          Gracias por tu reserva!
        </h1>
        <Link
          href="/cuenta/reservaciones"
          className="underline text-xl text-accent-500 inline-block"
        >
          Administra tus reservas &rarr;
        </Link>
      </div>
    );
  }