import {auth} from "@/app/_lib/auth";

export const middleware = auth;


//Implementación de las rutas privadas por medio del middleware
export const config = {
    matcher:[ "/cuenta"],
}