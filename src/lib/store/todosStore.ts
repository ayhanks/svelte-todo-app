import type { TodosType } from "$lib/types"
import { writable } from "svelte/store"

const createTodosStore = () => {
  const { subscribe, set, update } = writable<TodosType[]>([])

  return {
    subscribe,
    addTodo: (todo: TodosType) => update((n) => ([...n, todo])),
    deleteTodo: (id: string) => update(n => n.filter(t => t.id !== id)),
    finishTodo: (id: string) => update(n => {
      const finishedTodoIndex = n.findIndex(t => t.id === id)
      return n.map((t, i) => {
        if (i === finishedTodoIndex) {
          t.status = t.status === "done" ? "idle" : "done"
        }
        return t
      })
    }),
    clearTodos: () => set([]),
  }
}
export const todos = createTodosStore()