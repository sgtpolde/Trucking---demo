import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return (
    <div class="bg-slate-900 h-screen flex justify-center items-center">
      <div class="flex flex-col justify-center items-center" >
      <p class="text-white font-bold text-4xl mb-8">Hello {props.params.name}</p>
      <a
                href="/"
                class="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
              >Go back home</a>
              </div>
    </div>
  );
}
