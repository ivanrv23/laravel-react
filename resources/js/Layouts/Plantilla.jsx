
import React from "react";

const MainLayout = ({ contenido }) => {
  return (
    <div className="flex flex-col h-screen">
      <header className="w-full px-6 py-4 bg-gray-800">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-lg font-bold text-white">
              Logo
            </a>
          </div>

          <div>
            <ul className="flex items-center justify-end text-white">
              <li className="mr-6">
                <a href="#">Link 1</a>
              </li>
              <li className="mr-6">
                <a href="#">Link 2</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="flex-1 bg-gray-100">
        <div className="container px-4 mx-auto">{contenido}</div>
      </main>

      <footer className="w-full px-6 py-4 text-white bg-gray-800">
        <p>Copyright © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default MainLayout;
