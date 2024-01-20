import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { Testo2 } from "../components/Testo2.tsx";
import { Testo } from "../components/Testo.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class=" mx-auto bg-[#86efac]">
      <div class="max-w-screen-md h-screen mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
        <p class="my-4 flex flex-col items-center">
          Try clicking this blue button
          <a
            href="/greet/John"
            class="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
          >
            Blue button
          </a>
        </p>
        <Counter count={count} />
      </div>

      <div>
        <Testo2 />
        <Testo />
      </div>
    </div>
  );
}
