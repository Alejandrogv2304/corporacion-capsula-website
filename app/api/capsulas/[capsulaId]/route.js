import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data_service";

export async function GET(request, { params }) {
  const { capsulaId } = params;

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(capsulaId),
      getBookedDatesByCabinId(capsulaId),
    ]);

    return Response.json({ cabin, bookedDates });
  } catch {
    return Response.json({ message: "Cabin not found" });
  }
}

// export async function POST() {}