<script>
	import Todos from './Todos.svelte';
	import TodosForm from './TodosForm.svelte';
</script>

<div>
	<a data-sveltekit-preload-data="tap" href="/"> Zurück</a>
	<h1>Alle Todos</h1>
	<Todos />
	<TodosForm />
</div>
