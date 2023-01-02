<script lang="ts">
	import type { TodosType } from '$lib/types';
	import Todos from './(todos)/Todos.svelte';
	import TodosForm from './(todos)/TodosForm.svelte';

	let todos: TodosType[] = [];
</script>

<div>
	<h1>My Todo App</h1>
	<TodosForm
		on:addTodo={({ detail: todo }) => {
			todos = [todo, ...todos];
		}}
	/>
	<Todos
		{todos}
		on:deleteTodo={({ detail }) => {
			const filteredTodos = detail.getFilteredTodos(todos);
			todos = [...filteredTodos];
		}}
		on:finishTodo={({ detail }) => {
			const todoIndex = detail.getFinishedTodoIndex(todos);
			todos[todoIndex].status = todos[todoIndex].status === 'idle' ? 'done' : 'idle';
		}}
	/>
</div>
