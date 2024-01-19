import { PageProps } from "$fresh/server.ts";
import { Sidemenu } from "../../components/Sidemenu.tsx";
import { Testo } from "../../components/Testo.tsx";
import Truk from "../truk/index.tsx";

export default function Greet(props: PageProps) {
  return (
    <div class="bg-slate-900 h-screen flex justify-center items-center">
        <Sidemenu />
      <div>
        <Testo />
      </div>

      <p class="text-white font-bold text-4xl">Hello {props.params.name}</p>
    </div>
  );
}
