import { type PageProps } from "$fresh/server.ts";
import { Navbar } from "../islands/Navbar.tsx";
import { Sidebar } from "../islands/Sidebar.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Trucking - demo</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body className="flex flex-col">
        <Navbar />
        {/* Main content area */}
        <div className="flex flex-grow overflow-hidden">
          {/* Sidebar */}
          <Sidebar />

          {/* Content */}
          <div className="flex-grow mx-auto mt-16">
            <Component />
          </div>
        </div>
      </body>
    </html>
  );
}
