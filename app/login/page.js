import SignInButton from "../_components/BotonInicio";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="text-3xl font-semibold">
        Ingresa para acceder a tú cuenta
      </h2>

      <SignInButton />
    </div>
  );
}