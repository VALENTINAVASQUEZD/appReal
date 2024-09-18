"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Confirm() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [date, setDate] = useState('');
const router = useRouter();

useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setName(params.get('name') || '');
    setEmail(params.get('email') || '');
    setDate(params.get('date') || '');
}, []);

return (
    <main className="p-6 bg-green-300 min-h-screen flex flex-col items-center justify-center">
    <header className="text-center mb-8">
        <h1 className="text-gray-800 text-3xl font-bold">Reservation Confirmed</h1>
        <p className="text-gray-800 mt-2">
        Here are your reservation details. Thank you for trusting us!
        </p>
    </header>

    <section className="bg-white rounded-lg shadow p-6 text-left w-full max-w-md">
        <h2 className="text-gray-800 text-lg font-medium mb-4">Reservation Details</h2>
        <div className="text-gray-800 mb-4">
        <p><strong>Full Name:</strong> {name}</p>
        </div>
        <div className="text-gray-800 mb-4">
        <p><strong>Email:</strong> {email}</p>
        </div>
        <div className="text-gray-800 mb-4">
        <p><strong>Reservation Date:</strong> {date}</p>
        </div>
        <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
        onClick={() => router.push('/')}
        >
        Return to the main page
        </button>
    </section>
    </main>
);
}




