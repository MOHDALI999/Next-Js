import { create } from "zustand";

export const useStore = create((set)=>({
  todos : [],

  addjobs:(title,priority) => set((state)=>({
    todos:[
        ...state.todos,
        {
            id: Date.now(),
            title:title,
            priority:priority,
        }
    ]
  })),

  deletejobs:(id)=> set((state)=>({
      todos:state.todos.filter((todos)=> todos.id !== id),
  })),

  updatejobs:(id,title,priority)=> set((state)=>({
    todos:state.todos.map((todo) =>
      todo.id === id ? {
        ...todo,
        title:title,
        priority:priority,

      }:todo
    )
  })),

}))