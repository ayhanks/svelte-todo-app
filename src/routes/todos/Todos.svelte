<script lang="ts">
	import { todos } from '$lib/store/todosStore';
</script>

{#if $todos?.length}
	<ul class="todos">
		{#each $todos as { status, title, id } (id)}
			<li class="todos-item todos-item--{status}">
				<span>
					{title}
				</span>
				<div class="todos-buttons">
					<button on:click={() => todos.finishTodo(id)}>&check;</button>
					<button on:click={() => todos.deleteTodo(id)}> &times; </button>
				</div>
			</li>
		{/each}
	</ul>
{/if}

{#if !$todos?.length}
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
