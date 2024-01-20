import { useEffect, useRef, useState } from "preact/hooks";
import { Navbar } from "./Navbar.tsx";

export function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedIcon, setSelectedIcon] = useState("home"); // Default selected icon
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = (event: MouseEvent) => {
    console.log("Closing sidebar...");
    if (
      isSidebarOpen &&
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setIsSidebarOpen(false);
    }
  };

  const handleIconClick = (icon: string) => {
    setSelectedIcon(icon);
    // Add logic to update content based on the selected icon
    // For now, let's just log the selected icon
    console.log(`Selected icon: ${icon}`);
  };

  /*useEffect(() => {
      document.addEventListener("click", closeSidebar);

      return () => {
        document.removeEventListener("click", closeSidebar);
      };
    }, [isSidebarOpen]);*/

  return (
    <div>
      {/* Burger menu icon for mobile */}
      <div className="lg:hidden">
        <button
          onClick={toggleSidebar}
          className="p-2 text-gray-500 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        id="sidebar"
        className={`flex fixed top-16 left-0 h-full w-60 sm:w-64 bg-gray-900 border-gray-700 z-10 ${
          isSidebarOpen ? "flex" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center w-16 h-screen py-8 space-y-8 bg-gray-900 border-gray-700 ">
          {/* ... Sidebar icons ... */}
          <a
              onClick={() => handleIconClick("home")}
            className={`p-1.5  rounded-lg cursor-pointer  ${
              selectedIcon === "home"
                ? "bg-gray-800 text-blue-500"
                : "text-gray-400"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </a>

          <a
            onClick={() => handleIconClick("messages")}
            className={`p-1.5  transition-colors duration-200 cursor-pointer ${
              selectedIcon === "messages"
                ? "bg-gray-800 text-blue-500"
                : "text-gray-400"
            } rounded-lg`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
          </a>

          <a
           
            onClick={() => handleIconClick("notifications")}
            className={`p-1.5 focus:outline-none transition-colors duration-200 rounded-lg cursor-pointer ${
              selectedIcon === "notifications"
                ? "bg-gray-800 text-blue-500"
                : "text-gray-400"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
              />
            </svg>
          </a>

          <a
            href="#"
            onClick={() => handleIconClick("settings")}
            className={`p-1.5  focus:outline-none transition-colors duration-200 rounded-lg  ${
              selectedIcon === "settings"
                ? "bg-gray-800 text-blue-500"
                : "text-gray-400"
            }`}
          >
            {/* ... Settings icon SVG ... */}
          </a>
        </div>
        <div className="h-screen py-8 overflow-y-auto bg-gray-900 border-l border-r border-gray-700 sm:w-64 w-60 ">
          <h2 className="px-5 text-lg font-medium text-white">
            Accounts
          </h2>

          <div className="mt-8 text-white px-4">
            {/* Content based on the selected icon */}
            {selectedIcon === "home" && (
              <div>
                {/* Home icon content */}
                <h1>Home Icon Content</h1>
              </div>
            )}
            {selectedIcon === "messages" && (
              <div>
                {/* Messages icon content */}
                <h1>Messages Icon Content</h1>
              </div>
            )}
            {selectedIcon === "notifications" && (
              <div>
                {/* Notifications icon content */}
                <h1>Notifications Icon Content</h1>
              </div>
            )}
            {selectedIcon === "settings" && (
              <div>
                {/* Settings icon content */}
                <h1>Settings Icon Content</h1>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Content */}
      <div className="lg:ml-60 sm:ml-64">
        {/* ... Your existing content ... */}
      </div>
    </div>
  );
}
