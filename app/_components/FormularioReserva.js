"use client";

import SubmitButton from "./SubmitButton";
import { createBooking } from "../_lib/actions";
import { useReservation } from "./ReservationContext";
import { differenceInDays } from "date-fns";

function ReservationForm({ cabin , user}) {
  const { range, resetRange } = useReservation();
  const { maxCapacity, regularPrice, discount, id } = cabin;

  const startDate = range.from;
  const EndDate = range.to;

  const NumNights = differenceInDays(EndDate, startDate);
  const cabinPrice = NumNights * (regularPrice - discount);

  const bookingData = {
    startDate,
    EndDate,
    NumNights,
    cabinPrice,
    cabinId: id,
  };

  const createBookingWithData = createBooking.bind(null, bookingData);

  return (
    <div className="scale-[1.01]">
      <div className="bg-primary-800 text-primary-300 px-20 py-2 flex justify-between items-center">
        <p>Haz tu reserva aquí</p>

         <div className='flex gap-4 items-center'>
          <img
            // Important to display google profile images
            referrerPolicy='no-referrer'
            className='h-8 rounded-full'
            src={user.image}
            alt={user.name}
          />
          <p>{user.name}</p>
        </div> 
      </div>

     
      <form action={async (formData) => {
          await createBookingWithData(formData);
          resetRange();
        }} className="bg-primary-900 py-10 px-16 text-lg flex gap-5 flex-col">
        <div className="space-y-2">
          <label htmlFor="numGuests">Cuántos son?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Selecciona número de huespedes...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Algo que debamos saber sobre ti?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Mascotas, enfermedades, pedidos especiales, etc.?"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          {!(startDate && EndDate) ? (
            <p className="text-primary-300 text-base">
              Selecciona las fechas
            </p>
          ) : (
            <SubmitButton pendingLabel="Reserving...">Reserve ahora</SubmitButton>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;