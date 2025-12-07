"use client";

import { useState } from "react";
import { useStore } from "../store/Store";

export default function Form() {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");

  const {addjobs} =useStore();
  

  const handleSubmit = () => {
      if(title !== "" && priority !== "")
      {
        addjobs(title,priority);
        setTitle("");
        setPriority("");
      }
      else{
        return;
      }
  };

  return (
    <div className="flex flex-col items-center p-2">   
      {/* Form Card */}
      <div className="h-[200px] w-full max-w-2xl rounded-2xl shadow-xl p-6 space-y-4 border">
        
        <h1 className="text-3xl font-bold">
          Add New Task
        </h1>

        <div className="flex gap-4 w-full items-end"  onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}>  
          {/* Task Title */}
          <div className="flex flex-1 flex-col gap-1">
            <label className="text-sm font-semibold">Task Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter task title..."
              className="border rounded-xl p-3 w-full"
            />
          </div>

          {/* Priority */}
          <div className="flex flex-col gap-1 w-[120px]">
            <label className="text-sm font-semibold">Priority</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="rounded-xl p-3 border"
            >
              <option value="">Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          {/* Add Button */}
          <button
            onClick={handleSubmit}
            className="h-[52px] w-[52px] flex items-center justify-center border-2 text-white rounded-xl text-2xl"
          >
            ➕
          </button>
        </div>
      </div>
    </div>
  );
}
