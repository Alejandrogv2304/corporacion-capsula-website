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


export async function createBooking(bookingData, formData) {
  console.log("Iniciando createBooking...");

  // Validar sesión
  const session = await auth();
  if (!session) {
    console.error("Error: El usuario no está autenticado.");
    throw new Error("Debes iniciar sesión para crear una reserva.");
  }
  console.log("Sesión autenticada:", session);

  // Validar datos del formulario
  const numGuests = formData.get("numGuests");
  const observations = formData.get("observations");
  if (!numGuests || isNaN(Number(numGuests))) {
    console.error("Error: El número de huéspedes es inválido o no fue proporcionado.");
    throw new Error("El número de huéspedes es obligatorio y debe ser un número válido.");
  }

  // Validar datos de la reserva
  if (!bookingData.cabinPrice) {
    console.error("Error: El precio de la cabaña no está definido.");
    throw new Error("El precio de la cabaña es obligatorio.");
  }
  if (!bookingData.cabinId) {
    console.error("Error: El ID de la cápsula no está definido.");
    throw new Error("El ID de la cápsula es obligatorio.");
  }

  // Construir el objeto newBooking
  const newBooking = {
    ...bookingData,
    GuestId: session.user.guestId, // Validar que guestId existe
    numGuests: Number(numGuests),
    observations: (observations || "").slice(0, 1000), // Evitar errores con observaciones nulas
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };
  console.log("Datos de la reserva a insertar:", newBooking);

  // Insertar en la tabla `reservas`
  const { error } = await supabase.from("reservas").insert([newBooking]);

  if (error) {
    console.error("Error de Supabase al insertar la reserva:", error);
    throw new Error("No se pudo crear la reserva. Por favor, intenta nuevamente.");
  }

  // Revalidar la página relacionada con la cápsula
  try {
    await revalidatePath(`/capsulas/${bookingData.cabinId}`);
  } catch (revalidateError) {
    console.warn("Error al revalidar la ruta:", revalidateError);
  }

  // Redirigir al usuario a la página de agradecimiento
  redirect("/capsulas/gracias");
}

// export async function createBooking(bookingData, formData) {
//   const session = await auth();
//   if (!session) throw new Error("Tú debes logearte:");

//   const newBooking = {
//     ...bookingData,
//     guestId: session.user.guestId,
//     numGuests: Number(formData.get("numGuests")),
//     observations: formData.get("observations").slice(0, 1000),
//     extrasPrice: 0,
//     totalPrice: bookingData.cabinPrice,
//     isPaid: false,
//     hasBreakfast: false,
//     status: "unconfirmed",
//   };

//   const { error } = await supabase.from("reservas").insert([newBooking]);

//   if (error) throw new Error("No se pudo crear la reserva");

//   revalidatePath(`/capsulas/${bookingData.capsulaId}`);

//   redirect("/capsulas/gracias");
// }



export async function deleteBooking(bookingId) {
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


export async function updateBooking(formData) {
  const bookingId = Number(formData.get("bookingId"));

  // 1) Authentication
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  // 2) Authorization
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId))
    throw new Error("You are not allowed to update this booking");

  // 3) Building update data
  const updateData = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
  };

  // 4) Mutation
  const { error } = await supabase
    .from("reservas")
    .update(updateData)
    .eq("id", bookingId)
    .select()
    .single();

  // 5) Error handling
  if (error) throw new Error("Booking could not be updated");

  // 6) Revalidation
  revalidatePath(`/cuenta/reservaciones/editar/${bookingId}`);
  revalidatePath("/cuenta/reservaciones");

  // 7) Redirecting
  redirect("/cuenta/reservaciones");
}


export async function signInAction() {
  await signIn("google", { redirectTo: "/cuenta" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}