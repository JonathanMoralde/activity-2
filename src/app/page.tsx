"use client";

import { useState } from "react";
import { signOut } from "./action";

export default function Home() {
  // counter state
  const [counter, setCounter] = useState<number>(2); //to change the initial state, change the value

  return (
    <main className="min-h-screen grid place-items-center">
      <nav className="bg-red fixed w-full h-[10vh] top-0 left-0 right-0">
        <button
          onClick={async () => {
            await signOut();
          }}
        >
          Sign out
        </button>
      </nav>
      <section className="shadow h-[50%] max-w-screen-sm w-full bg-white p-10 flex flex-col items-center justify-between">
        {/* Counter Display */}
        <h1 className="font-bold text-7xl">{counter}</h1>

        {/* Odd/Even Text display */}
        <h3 className="font-medium text-gray-600">
          {/* Check if current number is multiple of 2 to determine if even or odd */}
          This number is as {counter % 2 == 0 ? "even" : "odd"} number
        </h3>

        {/* Counter Buttons */}
        <div className="w-1/2 flex justify-between gap-4">
          {/* Decrement */}
          <button
            type="button"
            className="bg-red-400 hover:opacity-75 transition-all shadow w-1/3 text-2xl"
            onClick={() => setCounter(counter / 2)}
          >
            -
          </button>

          {/* Reset */}
          <button
            type="button"
            className="bg-gray-400 hover:opacity-75 transition-all shadow w-1/3"
            onClick={() => setCounter(1)}
          >
            Reset
          </button>

          {/* Increment */}
          <button
            type="button"
            className="bg-green-400 hover:opacity-75 transition-all shadow w-1/3 text-2xl"
            onClick={() => setCounter(counter * 2)}
          >
            +
          </button>
        </div>
      </section>
    </main>
  );
}
