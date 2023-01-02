<script lang="ts">
	import type { TodosType } from '$lib/types';
	import { createEventDispatcher } from 'svelte';
	export let todos: TodosType[] = [];
	const dispatch = createEventDispatcher();

	const handleFinishedTodo = (id: string) => {
		dispatch('finishTodo', {
			id,
			getFinishedTodoIndex: (todos: TodosType[]) => todos.findIndex((todo) => todo.id === id)
		});
	};

	const handleDeletedTodo = (id: string) =>
		dispatch('deleteTodo', {
			id,
			getFilteredTodos: (todos: TodosType[]) => todos.filter((todo) => todo.id !== id)
		});
</script>

{#if todos.length}
	<ul class="todos">
		{#each todos as { status, title, id } (id)}
			<li class="todos-item todos-item--{status}">
				<span>
					{title}
				</span>
				<div class="todos-buttons">
					<button on:click={() => handleFinishedTodo(id)}>&check;</button>
					<button on:click={() => handleDeletedTodo(id)}> &times; </button>
				</div>
			</li>
		{/each}
	</ul>
{/if}

{#if !todos.length}
	<h2>Keine Todos für heute :)</h2>
{/if}

<style lang="scss">
	.todos {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 2rem;
		padding: unset;
		&-item {
			padding-bottom: 0.5rem;
			border-bottom: 1px solid rgba(#e4e4e4, 0.75);
			font-size: 1.25rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
			&--done {
				opacity: 0.75;
				span {
					color: green;
					text-decoration: line-through;
				}
			}
		}
		&-buttons {
			display: flex;
			align-items: center;
			gap: 5px;
			button {
				height: 30px;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}
</style>
