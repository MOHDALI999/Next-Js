"use client"
import { useStore } from '../store/store'

function Alag() {
const {increment,decrement} = useStore();
  return (
    <div>
            <button className="bg-green-500 px-4 py-2 rounded" onClick={increment}>Increment</button>
            <button className="bg-green-500 px-4 py-2 rounded" onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Alag
