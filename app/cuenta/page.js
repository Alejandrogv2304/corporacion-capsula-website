import { auth } from "../_lib/auth";

export const metadata={
    title:'Zona invitados'
    };

//Sección de cuenta
export default async function Page(){
    const session = await auth();
    const firstName = session.user.name.split(' ').at(0);
    return(
        <div>
            
        <h2 className="font-semibold text-2xl text-accent-400 mb-7"> Bienvenido, {firstName}</h2 >
        </div>
    ); 
}