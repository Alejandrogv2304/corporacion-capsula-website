"use client";
import { useState } from "react";

export default function Counter({users}){
    const [count,setCount]= useState(0);

    console.log(users)
    return <div>
    <p>Aquí hay {users.length} usuarios</p>
    <button onClick={()=>setCount((c)=>c+1)}>{count}</button>
    </div>
}