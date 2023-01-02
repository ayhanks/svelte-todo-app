<script lang="ts">
	import type { TodosType } from '$lib/types';
	import { createEventDispatcher } from 'svelte';
	let todoText = '';

	const dispatch = createEventDispatcher();

	const handleAddTodo = () => {
		if (!todoText) return;

		dispatch('addTodo', <TodosType>{ title: todoText, id: crypto.randomUUID(), status: 'idle' });
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
