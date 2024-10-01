import Link from "next/link";

export default function Navegacion(){
    return (<ul>
    <li>
        <Link href="/">Inicio</Link>
    </li>
    <li>
        <Link href="/capsulas">Cápsulas</Link>
    </li>
    <li>
        <Link href="/acerca">Acerca</Link>
    </li>
    <li>
        <Link href="/cuenta">Cuenta</Link>
    </li>
    </ul>
    );
}