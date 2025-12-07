"use client"
import Alag from "./component/page";
import { useStore } from "./store/store";

export default function Home() {
  const {count,increment,decrement} = useStore();
  return (
    <>
        <OtherComponent count={count} increment={increment} decrement={decrement}/>
        <Alag />
    </>
  );
}

export function OtherComponent({ count , increment , decrement }) {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center text-4xl">
        <h1>Increment and Decrement App</h1>
        {count}
        <div className="flex gap-3">
          <button
            onClick={increment}
            className="bg-green-500 px-4 py-2 rounded">
            Increment
          </button>
          <button
            onClick={decrement}
            className="bg-green-500 px-4 py-2 rounded">
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}
