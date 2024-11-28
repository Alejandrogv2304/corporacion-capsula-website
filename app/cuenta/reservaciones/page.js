import ReservationCard from "@/app/_components/ReservacionCard";
import ReservationList from "@/app/_components/ReservacionList";
import { auth } from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/data_service";

export const metadata ={
  title:"Reservaciones",
};

export default async function Page() {
  
  const session = await auth();
  const bookings = await getBookings(session.user.guestId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Tus reservaciones
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          Todavía no tienes reservaciones. Revisa en{" "}
          <a className="underline text-accent-500" href="/capsulas">
            lujosas cápsulas &rarr;
          </a>
        </p>
      ) : (
        <ReservationList bookings={bookings}/>
      )}
    </div>
  );
}