# SvelteKit Reactive Fetch Issue

To reproduce the issue...

Clone this repository

```sh
git clone https://github.com/travishorn/sveltekit-reactive-fetch-issue
```

Change into the directory

```sh
cd sveltekit-reactive-fetch-issue
```

Install dependencies

```sh
npm install
```

Launch the development server

```sh
npm run dev
```

Go to the running app at http://localhost:5173

## Description of Issue

In [+page.svelte](./src/routes/+page.svelte), I am trying to fetch data from the
[+server.js](./src/routes/api/+server.js) handler, but I receive this error:

> Error: Cannot call `fetch` eagerly during server side rendering with relative
> URL (/api/?subject=Svelte) — put your `fetch` calls inside `onMount` or a
> `load` function instead

I modeled that page after [this REPL
example](https://svelte.dev/repl/16e48fadc6ac4f21aa9a6befc3bde66d?version=3.3.0)
which *does* work, but uses an absolute URL to a remote endpoint. I need to
fetch data from a `+server.js` endpoint.

According to the error message, I must put the `fetch` call inside `onMount` or
a `load` function.

Putting the code inside `onMount` eliminates the error, but the `fetch` is not
reactive. Instead, the `fetch` only executes once and never updates. In
addition, I get the following warning:

> $: has no effect outside of the top-level

So if `fetch` calls must be inside `onMount` or `load`, and `$` must be
top-level, how do I fetch data from the `+server.js` endpoint in a reactive way?
