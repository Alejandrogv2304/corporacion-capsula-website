import SelectCountry from "@/app/_components/SeleccionarPais";
import UpdateProfileForm from "@/app/_components/ActualizarPerfilFormulario";

export const metadata = {
  title: "Actualizar perfil",
};

export default function Page() {
  // CHANGE
  const countryFlag = "pt.jpg";
  const nationality = "portugal";

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Actualiza tú perfil
      </h2>

      <p className="text-lg mb-8 text-primary-200">
        Ingresa la siguiente información para que el proceso de registro
        sea más rápido
      </p>

      <UpdateProfileForm>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultCountry={nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}