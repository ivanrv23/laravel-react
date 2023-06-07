import { useState } from "react";
import NavLink from "@/Components/NavLink";
import Dropdown from "@/Components/Dropdown";
import { usePage } from "@inertiajs/react";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
export default function HeaderPrincipal() {
    const user = usePage().props.auth.user;
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
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

                        {/* Menu Dispositivos  */}
                        <div className="flex items-center -mr-2 sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                            >
                                <svg
                                    className="w-6 h-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
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
                                // href={route("dashboard")}
                                // active={route().current("dashboard")}
                                className="font-medium text-blue-600 sm:py-6 dark:text-blue-500"
                            >
                                Nosotros
                            </NavLink>
                            <NavLink
                                // href={route("dashboard")}
                                // active={route().current("dashboard")}
                                className="font-medium text-blue-600 sm:py-6 dark:text-blue-500"
                            >
                                Institucional
                            </NavLink>
                            <NavLink
                                // href={route("dashboard")}
                                // active={route().current("dashboard")}
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
                                                    Cerrar Session
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
                                                        Iniciar Session
                                                    </Dropdown.Link>
                                                </Dropdown.Content>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    {/* menu dispositivos */}
                    <div
                        className={
                            (showingNavigationDropdown ? "block" : "hidden") +
                            " sm:hidden bg-slate-400 rounded-md"
                        }
                    >
                        <div className="pt-4 pb-1 border-t border-gray-200">
                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route("profile.edit")}>
                                    Ronal
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                >
                                    Cerrar Session
                                </ResponsiveNavLink>
                            </div>
                        </div>

                        <div className="pt-4 pb-1 border-t border-gray-200">
                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink
                                // href={route("profile.edit")}
                                >
                                    Nosotros
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                // href={route("profile.edit")}
                                >
                                    Institucional
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                // href={route("profile.edit")}
                                >
                                    Capitulos
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
