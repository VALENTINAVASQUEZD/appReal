"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [date, setDate] = useState('');
const router = useRouter();

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/confirm?name=${name}&email=${email}&date=${date}`);
};

return (
    <main className="p-6 bg-green-200 min-h-screen">
    <header className="text-left mb-8">
        <h1 className="text-gray-800 text-3xl font-bold text-center">Reserva HOTEL GARDEEN</h1>
        <p className="text-center text-gray-600 mt-2">
        Realiza tu reserva rápidamente utilizando el siguiente formulario. ¡Estamos aquí para ofrecerte la mejor experiencia!
        </p>
    </header>

    <section className="grid gap-6 sm:grid-cols-1 lg:grid-cols-1">
        <article className="bg-white rounded-lg shadow p-6 text-left">
        <h2 className="text-gray-500 text-lg font-medium mb-4">Formulario de Reserva</h2>
        <form onSubmit={handleSubmit}>
            <fieldset className="mb-4">
            <label className="block text-gray-700">Nombre Completo:</label>
            <input
                type="text"
                className="text-gray-500 w-full mt-2 p-2 border rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            </fieldset>
            <fieldset className="mb-4">
            <label className="block text-gray-700">Correo Electrónico:</label>
            <input
                type="email"
                className="text-gray-500 w-full mt-2 p-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </fieldset>
            <fieldset className="mb-4">
            <label className="block text-gray-700">Fecha de Reserva:</label>
            <input
                type="text"
                className="text-gray-500 w-full mt-2 p-2 border rounded"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            </fieldset>
            <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
            Reservar
            </button>
        </form>
        </article>
    </section>
    </main>
);
}
