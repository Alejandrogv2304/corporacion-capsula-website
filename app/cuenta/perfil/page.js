import SelectCountry from "@/app/_components/SeleccionarPais";
import UpdateProfileForm from "@/app/_components/ActualizarPerfilFormulario";
import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data_service";

export const metadata = {
  title: "Actualizar perfil",
};

export default async function Page() {
  // CHANGE
const session = await auth();
const guest = await getGuest(session.user.email);



  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Actualiza tú perfil
      </h2>

      <p className="text-lg mb-8 text-primary-200">
        Ingresa la siguiente información para que el proceso de registro
        sea más rápido
      </p>

      <UpdateProfileForm guest={guest}>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultCountry={guest.nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}