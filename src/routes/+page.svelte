<script>
  let subject = "Svelte";

  let message = "";

  // Why does this produce an error?
  $: fetch(`/api/?subject=${subject}`)
    .then((response) => response.json())
    .then((data) => (message = data.message));
</script>

<input bind:value={subject} />

{message}
