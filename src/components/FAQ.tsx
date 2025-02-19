import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
    return (
        <div class="max-w-full mx-auto px-5 bg-darkGray">
            <div class="flex flex-col items-center">
                <h2 class="font-bold text-5xl mt-5 tracking-tight text-white"> FAQ </h2>
                <p class="text-white text-xl mt-3"> Frequenty asked questions </p>
            </div>
            <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
                <div class="py-5">
                    <details class="group">
                        <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span className="text-white"> Why is this bot called Kashima? Who is Kashima? Kancolle? I've never heard of it.</span>
                            <span class="transition group-open:rotate-180">
                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path> </svg> </span>
                        </summary>
                        <p class="text-white mt-3 group-open:animate-fadeIn">
                            Try <Link className="underline hover:text-gray-500" to="https://kancolle.fandom.com/wiki/Kashima">this</Link> or <Link className="underline hover:text-gray-500" to="https://en.wikipedia.org/wiki/Kantai_Collection">this.</Link> If you prefer 3D over 2D check <Link className="underline hover:text-gray-500" to="https://en.wikipedia.org/wiki/Japanese_cruiser_Kashima">this out.</Link>
                        </p>
                    </details>
                </div>
            </div>
        </div>
    );
};

export default FAQ;