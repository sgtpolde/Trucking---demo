import { type PageProps } from "$fresh/server.ts";
import { Navbar } from "../islands/Navbar.tsx";
import { Testo } from "../components/Testo.tsx";
import { Sidebar } from "../islands/Sidebar.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Gal usa 69</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content area */}
        <div className="min-w-screen flex-auto flex flex-col">
          <Navbar />
          <Testo />
        </div>
      </body>
    </html>
  );
}
