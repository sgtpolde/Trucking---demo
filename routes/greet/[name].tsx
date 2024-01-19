import { PageProps } from "$fresh/server.ts";
import { Testo } from "../../components/Testo.tsx";
import { Sidebar } from "../../islands/Sidebar.tsx";
import Truk from "../truk/index.tsx";

export default function Greet(props: PageProps) {
  return (
    <div class="bg-slate-900 h-screen flex justify-center items-center">
        <Sidebar />
      <div>
        <Testo />
      </div>

      <p class="text-white font-bold text-4xl">Hello {props.params.name}</p>
    </div>
  );
}
