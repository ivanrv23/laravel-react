import NavLink from "@/Components/NavLink";
import Dropdown from "@/Components/Dropdown";
import { usePage } from "@inertiajs/react";
export default function HeaderPrincipal() {
    const user = usePage().props.auth.user;
    return (
        <>
            <header className="fixed z-50 flex flex-wrap w-full py-3 text-sm bg-white border-b border-gray-200 h-28 sm:justify-start sm:flex-nowrap sm:py-0 dark:bg-gray-800 dark:border-gray-700">
                <nav
                    className="relative w-full px-4 mx-auto max-w-7xl sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
                    aria-label="Global"
                >
                    <div className="flex items-center justify-between">
                        <img
                            src="https://www.cip.org.pe/images/LOGO_CIP.png"
                            alt="Logo"
                            className="m-2 max-h-14"
                        />
                        <a
                            className="flex-none text-xl font-semibold dark:text-white"
                            href="#"
                            aria-label="Brand"
                        >
                            CIP CAJAMARCA
                        </a>
                        <div className="sm:hidden">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center gap-2 p-2 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hs-collapse-toggle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                data-hs-collapse="#navbar-collapse-with-animation"
                                aria-controls="navbar-collapse-with-animation"
                                aria-label="Toggle navigation"
                            >
                                <svg
                                    className="w-4 h-4 hs-collapse-open:hidden"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                                    />
                                </svg>
                                <svg
                                    className="hidden w-4 h-4 hs-collapse-open:block"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div
                        id="navbar-collapse-with-animation"
                        className="hidden overflow-hidden transition-all duration-300 hs-collapse basis-full grow sm:block"
                    >
                        <div className="flex flex-col mt-5 gap-y-4 gap-x-0 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
                            <NavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                                className="font-medium text-blue-600 sm:py-6 dark:text-blue-500"
                            >
                                Nosotros
                            </NavLink>
                            <NavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                                className="font-medium text-blue-600 sm:py-6 dark:text-blue-500"
                            >
                                Institucional
                            </NavLink>
                            <NavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                                className="font-medium text-blue-600 sm:py-6 dark:text-blue-500"
                            >
                                Capítulos
                            </NavLink>
                            <NavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                                className="font-medium text-blue-600 sm:py-6 dark:text-blue-500"
                            >
                                Trámites
                            </NavLink>
                            {user ? (
                                <div className="absolute hidden sm:flex sm:items-center sm:ml-6">
                                    <div className="relative">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <span className="inline-flex rounded-md">
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none"
                                                    >
                                                        <img
                                                            className="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
                                                            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                                            alt="Image Description"
                                                        />
                                                    </button>
                                                </span>
                                            </Dropdown.Trigger>

                                            <Dropdown.Content>
                                                <Dropdown.Link
                                                    href={route("dashboard")}
                                                    active={route().current(
                                                        "dashboard"
                                                    )}
                                                >
                                                    Dashboard
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    href={route("profile.edit")}
                                                >
                                                    Profile
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    href={route("logout")}
                                                    method="post"
                                                    as="button"
                                                >
                                                    Log Out
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className="absolute hidden sm:flex sm:items-center sm:ml-6">
                                        <div className="relative">
                                            <Dropdown>
                                                <Dropdown.Trigger>
                                                    <span className="inline-flex rounded-md">
                                                        <button
                                                            type="button"
                                                            className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none"
                                                        >
                                                            <img
                                                                className="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
                                                                src="https://www.delacabeza-rivera.es/wp-content/uploads/2020/06/PERFIL-VACIO.png"
                                                                alt="Image Description"
                                                            />
                                                        </button>
                                                    </span>
                                                </Dropdown.Trigger>

                                                <Dropdown.Content>
                                                    <Dropdown.Link
                                                        href={route("login")}
                                                        active={route().current(
                                                            "login"
                                                        )}
                                                    >
                                                        Login
                                                    </Dropdown.Link>
                                                </Dropdown.Content>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
