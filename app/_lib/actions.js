"use server";

import { signIn, signOut, auth } from "./auth";
import { getBookings } from "./data_service";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateGuest(formData) {
  const session = await auth();
  if (!session) throw new Error("Tú debes logearte");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Por favor, pon tu documento nacional válido");

  const updateData = { nationality, countryFlag, nationalID };

  const { data, error } = await supabase
    .from("huespedes")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) throw new Error("El huesped no pudo actualizarse");

  revalidatePath("/cuenta/perfil");
}

export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session) throw new Error("Debes iniciar sesión");

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId))
    throw new Error("No puedes elmiminar esta reservación");

  const { error } = await supabase
    .from("reservas")
    .delete()
    .eq("id", bookingId);

  if (error) throw new Error("Esta reserva no pudo ser borrada");

  revalidatePath("/cuenta/reservaciones");
}


export async function signInAction() {
  await signIn("google", { redirectTo: "/cuenta" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}