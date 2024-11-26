import { eachDayOfInterval } from 'date-fns';

import {supabase} from './supabase';
import { notFound } from 'next/navigation';
/////////////
// GET

export async function getCabin(id) {
  const { data, error } = await supabase
    .from('capsulas')
    .select('*')
    .eq('id', id)
    .single();

  // Para testeo
  await new Promise((res) => setTimeout(res, 2000));

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

export async function getCabinPrice(id) {
  const { data, error } = await supabase
    .from('capsulas')
    .select('regularPrice, discount')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
  }

  return data;
}

export const getCabins = async function () {
  const { data, error } = await supabase
    .from('capsulas')
    .select('id, name, maxCapacity, regularPrice, discount, image')
    .order('name');

  if (error) {
    console.error(error);
    throw new Error('La Cápsula no se pudo cargar');
  }

  return data;
};

// Los huespedes se identifican por el email
export async function getGuest(email) {
  const { data, error } = await supabase
    .from('huespedes')
    .select('*')
    .eq('email', email)
    .single();

  
  return data;
}




 export async function getBooking(id) {
   const { data, error, count } = await supabase
     .from('reservas')
     .select('*')
     .eq('id', id)
     .single();

   if (error) {
     console.error(error);
     throw new Error('La reserva no se pudo cargar');
   }

   return data;
 }

export async function getBookings(guestId) {
  const { data, error, count } = await supabase
    .from('reservas')
//Tomamos solo los datos que realmente necesitamos para reducir las descargas de datos
    .select(
      'id, created_at, startDate, EndDate, NumNights, numGuests, totalPrice, GuestId, cabinId, capsulas(name, image)'
    )
    .eq('GuestId', guestId)
    .order('startDate');

  if (error) {
    console.error(error);
    throw new Error('La reserva no se pudo cargar');
  }

  return data;
}

export async function getBookedDatesByCabinId(cabinId) {
  let today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  today = today.toISOString();

  // Getting all bookings
  const { data, error } = await supabase
    .from('reservas')
    .select('*')
    .eq('cabinId', cabinId)
    .or(`startDate.gte.${today},status.eq.checked-in`);

  if (error) {
    console.error(error);
    throw new Error('La reserva no se pudo cargar');
  }

  // Converting to actual dates to be displayed in the date picker
  const bookedDates = data
    .map((booking) => {
      return eachDayOfInterval({
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
      });
    })
    .flat();

  return bookedDates;
}

export async function getSettings() {
  const { data, error } = await supabase.from('ajustes').select('*').single();

  if (error) {
    console.error(error);
    throw new Error('Los ajustes no se pudieron cargar');
  }

  return data;
}

export async function getCountries() {
  const GET_COUNTRY_URL = "https://flagcdn.com";
  try {
    const res = await fetch(`${GET_COUNTRY_URL}/en/codes.json`);
 
    const data = await res.json();
 
    const countries = Object.keys(data).map((key) => {
      return { name: data[key], flag: `${GET_COUNTRY_URL}/${key}.svg` };
    });
 
//This will return an array with the same format as the one from the original getCountries so we don't have to change the code in other files.
 
    return countries;
  } catch {
    throw new Error("Could not fetch countries");
  }
}
// export async function getCountries() {
//   try {
//     const res = await fetch(
//       'https://restcountries.com/v2/all?fields=name,flag'
//     );
//     const countries = await res.json();
//     return countries;
//   } catch {
//     throw new Error('Could not fetch countries');
//   }
// }

/////////////
// CREATE

export async function createGuest(newGuest) {
  const { data, error } = await supabase.from('huespedes').insert([newGuest]);

  if (error) {
    console.error(error);
    throw new Error('El Huesped no se pudo crear');
  }

  return data;
}

export async function createBooking(newBooking) {
  const { data, error } = await supabase
    .from('reservas')
    .insert([newBooking])
    // So that the newly created object gets returned!
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('La reserva no se pudo crear');
  }

  return data;
}

/////////////
// UPDATE

// The updatedFields is an object which should ONLY contain the updated data
export async function updateGuest(id, updatedFields) {
  const { data, error } = await supabase
    .from('huespedes')
    .update(updatedFields)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('El Huesped no se pudo actualizar');
  }
  return data;
}

export async function updateBooking(id, updatedFields) {
  const { data, error } = await supabase
    .from('reservas')
    .update(updatedFields)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('La reserva no pudo ser actualizada');
  }
  return data;
}

/////////////
// DELETE

export async function deleteBooking(id) {
  const { data, error } = await supabase.from('reservas').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('La reserva no pudo borrarse');
  }
  return data;
}