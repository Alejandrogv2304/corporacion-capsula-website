import Link from "next/link";

function LoginMessage() {
  return (
    <div className="grid bg-primary-800 ">
      <p className="text-center text-xl py-12 self-center">
        Por favor{" "}
        <Link href="/login" className="underline text-accent-500">
          logeate
        </Link>{" "}
        para reservar
        <br /> esta cabina ahora
      </p>
    </div>
  );
}

export default LoginMessage;