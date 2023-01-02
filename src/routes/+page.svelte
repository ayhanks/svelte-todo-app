<script lang="ts">
	import Todos from './todos/Todos.svelte';
</script>

<div>
	<h1>My Todo App</h1>
	<p><b>Deine letzten 3 Todos:</b></p>
	<Todos />
	<a data-sveltekit-preload-data="tap" href="/todos"> Zu allen Todos </a>
</div>
