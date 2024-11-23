import { getBookedDatesByCabinId, getSettings } from "@/app/_lib/data_service";
import DateSelector from "./SelectorFecha";
import ReservationForm from "./FormularioReserva";
import LoginMessage from "./MensajeLogin";
import { auth } from "../_lib/auth";

async function Reservation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
const session = await auth();
  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      {session?.user ? (<ReservationForm cabin={cabin} user={session.user}/>) : (<LoginMessage/>)}
    </div>
  );
}

export default Reservation;