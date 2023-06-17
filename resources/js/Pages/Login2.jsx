import { Head } from "@inertiajs/react";

export default function HomePage() {
    return (
        <div className="h-screen md:flex">
            <div
                className="relative items-center justify-around hidden w-1/2 overflow-hidden bg-cover md:flex bg-gradient-to-tr from-blue-800 to-purple-700 i"
                style={{
                    backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr77HUQNFCXcfAw6gsb4u6sNu2X_hx9NqTXw&usqp=CAU')`,
                }}
            >
                <div>
                    <h1 className="font-sans text-4xl font-bold text-white">
                        CIP CAJAMARCA
                    </h1>
                    <p className="mt-1 text-white">
                        Colegio de Ingenieros del Perú
                    </p>
                    <button
                        type="submit"
                        className="block w-40 py-2 mt-4 mb-2 font-bold text-white bg-yellow-700 rounded-2xl"
                    >
                        Más Información
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center py-10 bg-white md:w-1/2">
                <form className="bg-white">
                    <h1 className="mb-1 text-2xl font-bold text-gray-800">
                        Colegio de Ingenieros del Perú
                    </h1>
                    <p className="text-sm font-normal text-gray-600 mb-7">
                        Bienvenido
                    </p>
                    <label
                        htmlFor="input-group-1"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        EMAIL
                    </label>
                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                xmlns="http://www.w3.org/2000/"
                                className="w-5 h-5 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                />
                            </svg>
                        </div>
                        <input
                            type="email"
                            id="input-group-2"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-700 focus:border-yellow-700 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-700 dark:focus:border-yellow-700"
                            placeholder="usuario@example.com"
                        />
                    </div>
                    <label
                        htmlFor="input-group-3"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        CONTRASEÑA
                    </label>
                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <input
                            type="password"
                            id="input-group-4"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-700 focus:border-yellow-700 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-700 dark:focus:border-yellow-700"
                            placeholder="password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="block w-full py-2 mt-4 mb-2 font-semibold text-white bg-yellow-700 rounded-2xl"
                    >
                        Login
                    </button>
                    <span className="ml-2 text-sm cursor-pointer hover:text-yellow-700">
                        Forgot Password ?
                    </span>
                </form>
            </div>
        </div>
    );
}
