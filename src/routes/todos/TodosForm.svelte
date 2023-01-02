<script lang="ts">
	import { todos } from '$lib/store/todosStore';
	import type { TodosType } from '$lib/types';
	let todoText = '';

	const handleAddTodo = () => {
		if (!todoText) return;

		const todoData: TodosType = {
			title: todoText,
			id: crypto.randomUUID(),
			status: 'idle'
		};

		todos.addTodo(todoData);
		todoText = '';
	};
</script>

<form class="todos-form" on:submit={handleAddTodo}>
	<label for="title">
		<span>Title</span>
		<input type="text" id="title" bind:value={todoText} />
	</label>
	<button type="submit">Todo Erstellen</button>
</form>

<style lang="scss">
	.todos-form {
		label {
			display: flex;
			flex-direction: column;
			gap: 10px;
		}
		button {
			background-color: orangered;
			padding: 0.5em 1.5em;
			border-radius: 4px;
			color: black;
			border: 1px solid black;
			cursor: pointer;
			margin-top: 15px;
		}
	}
</style>
