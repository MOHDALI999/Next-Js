  "use client";

  import { Pencil, Trash2 } from "lucide-react";
  import { useStore } from "../store/Store";
  import { useState } from "react";

  function Data() {
    const { deletejobs,todos,updatejobs } = useStore();
    const [isedit, setIsedit] = useState(false);
    const [isselect, setIsselect] = useState(false);
    const [uptitle,setUptitle]=useState("");
    const [uppriority,setupPriority] =useState("");
    const handleUpdate=(id,uptitle,uppriority)=>{
      if(uptitle !== "" && uppriority !== "")
      {
        updatejobs(id,uptitle,uppriority);  
        setUptitle("");
        setupPriority("");      
      }
      else{
        return;
      }

    };

    return (
      <div className="w-full h-auto flex justify-center mt-6">
        <div className="w-full max-w-2xl space-y-2">
          {todos.length === 0 ? (
            <p className="text-4xl font-semibold flex items-center justify-center text-black">
              Todo List is Empty
            </p>
          ) : (
            todos.map((todo, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl border flex flex-col gap-4">
                <div className="relative w-full">
                  {isedit ? (
                    <div className="flex flex-1 flex-col gap-1">
                      <label className="text-sm font-semibold">Task Title</label>
                      <input
                        value={uptitle}
                        onChange={(e)=>{setUptitle(e.target.value)}}
                        type="text"
                        placeholder="Enter task title..."
                        className="border rounded-xl p-3 w-135"
                      />
                    </div>
                  ) : (
                    <h3 className="text-2xl font-semibold text-gray-800 pr-20">
                      {todo.title}
                    </h3>
                  )}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-3">
                    {/* <Pencil
                      onClick={() => {
                        setIsedit(true);
                        setIsselect(true);
                        setUptitle(todo.title);
                        setupPriority(todo.priority);
                      }}
                      size={24}
                      className="cursor-pointer text-gray-700 hover:text-black"
                    /> */}
                    <Trash2
                      size={24}
                      className="cursor-pointer text-red-500 hover:text-red-700"
                      onClick={() => deletejobs(todo.id)}
                    />
                  </div>
                </div>
                {isselect ? (
                  <div className="flex flex-col gap-1 w-[120px]">
                    <label className="text-sm font-semibold">Priority</label>
                    <select className="rounded-xl p-3 border" value={uppriority} onChange={(e)=>{setupPriority(e.target.value)}} onBlur={()=> handleUpdate(todo.id, uptitle, uppriority)}>
                      <option value="">Priority</option> 
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                  </div>
                ) : (
                  <span className="text-sm bg-yellow-300 px-4 py-1 rounded-full w-fit font-semibold text-gray-900 shadow-sm">
                    Priority: {todo.priority}
                  </span>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    );
  }

  export default Data;
