import { Metadata } from "next";
import Link from "next/link";
import React, { Suspense } from "react";

type Data = {
    results: {
        name: string;
        status: string;
        id: string
    }[]
}

export const metadata: Metadata = {
    title: "Lista de personagens",
    description: "Aplicação teste de consumo de api server side"
}

const HookPage = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data: Data = await res.json();

    return(
        <>
            <h1>Server side request</h1>
            <Suspense fallback={<div>Loading...</div>}>
                {data?.results.map((item, index: number) => {
                    return(
                        <div key={index}>
                            <h1>{item.name}</h1>
                            <p>{item.status}</p>
                            <Link href={`/perso/${item.id}`}>ME CLIQUE</Link>
                        </div>
                    )
                })}
            </Suspense>
        </>
    )
}

export default HookPage;
