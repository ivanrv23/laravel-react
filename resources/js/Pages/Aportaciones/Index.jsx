import NavLink from "@/Components/NavLink";
import React from 'react';
import { Panel } from 'primereact/panel';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function RealizarPagos({ aportaciones }) {
    return (
        <>

            <nav class="bg-gray-800">
                <div class="container mx-auto flex items-center justify-between py-4">
                    <div>
                        <a href="#" class="text-white font-bold text-lg">Bienvenido</a>
                    </div>
                    <div class="hidden sm:block">
                        <ul class="flex space-x-4">
                            <li><a href="#" class="text-gray-300 hover:text-white">Pagos</a></li>
                            <li><a href="#" class="text-gray-300 hover:text-white">Acerca</a></li>
                            <li><a href="#" class="text-gray-300 hover:text-white">Servicios</a></li>
                            <li><a href="#" class="text-gray-300 hover:text-white">Contacto</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="container mx-auto flex items-center justify-between py-4">
                <img class="justify-left ml-2 w-20 h-auto" src="ruta/logo-empresa.png" alt="Logo de la empresa" />
                <a href="/" class="justify-end ml-2 flex bg-blue-300">
                    <img src="ruta/logo-empresa.png" alt="Logo de carrito" />
                    El carrito
                </a>
            </div>
            <div class="container mx-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="py-2 px-4"></th>
                            <th class="py-2 px-4"></th>
                            <th class="py-2 px-4"></th>
                            <th class="py-2 px-4"></th>
                            <th class="py-2 px-4"></th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr>

                            <td class="py-2 px-4"></td>
                            <td class="py-2 px-4"></td>
                            <td class="py-2 px-4"></td>
                            <td class="py-2 px-4">
                                <button class="bg-blue-200 hover:bg-blue-400 text-white font-bold py-1 px-2 rounded mr-1">
                                    <svg class="text-white" xmlns="http://www.w3.org/2000/svg" version="1.0" width="22.8000000pt" height="22.8000000pt" viewBox="0 0 1140.000000 1140.000000" preserveAspectRatio="xMidYMid meet">
                                        <g transform="translate(0.000000,1140.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                            <path d="M2562 9848 c-144 -25 -214 -187 -137 -314 l30 -49 670 -336 670 -337 97 -543 c54 -299 127 -706 162 -904 36 -198 126 -700 200 -1116 75 -416 136 -761 136 -766 0 -6 -30 -28 -67 -48 -214 -116 -359 -286 -425 -495 -30 -98 -32 -291 -4 -385 61 -205 211 -359 424 -435 l89 -32 -54 -56 c-64 -66 -128 -190 -144 -277 -44 -240 78 -492 290 -600 80 -40 149 -55 252 -55 169 0 294 54 407 174 94 101 152 244 152 376 0 117 -56 269 -129 352 l-40 45 397 7 c218 3 719 9 1112 12 l715 7 -46 -49 c-155 -167 -189 -408 -88 -621 23 -49 54 -89 108 -143 116 -115 233 -163 396 -163 226 0 425 139 512 359 25 62 27 81 27 194 0 107 -3 133 -23 185 -29 73 -101 185 -142 219 l-30 25 38 16 c146 61 174 266 51 358 -67 50 -37 49 -1145 38 -2388 -24 -2351 -24 -2440 -8 -134 25 -232 79 -269 149 -7 14 -16 51 -20 81 -16 137 80 275 252 361 l52 26 1728 0 1728 0 43 21 c24 12 55 36 70 55 26 35 36 67 409 1334 164 555 231 785 248 840 8 25 53 179 102 344 86 295 87 299 76 353 -15 72 -52 119 -116 149 l-51 24 -2252 0 -2253 0 -5 23 c-2 12 -25 135 -49 272 -25 138 -55 304 -66 370 -24 131 -40 177 -73 213 -27 30 -1448 743 -1497 752 -19 3 -54 3 -78 -2z m5948 -2060 c0 -11 -50 -183 -310 -1063 -78 -264 -156 -529 -174 -590 -18 -60 -66 -224 -107 -362 l-74 -253 -1515 0 -1516 0 -143 798 c-79 438 -170 943 -202 1122 -32 179 -59 333 -59 343 0 16 104 17 2050 17 1539 0 2050 -3 2050 -12z" />
                                        </g>
                                    </svg>
                                </button>
                                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">Ver detalle</button>
                            </td>
                        </tr>
                        <tr>

                            <td class="py-2 px-4">1</td>
                            <td class="py-2 px-4">$15.00</td>
                            <td class="py-2 px-4">$15.00</td>
                            <td class="py-2 px-4">
                                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-1">
                                    Agregar al carrito
                                </button>
                                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Ver detalle</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <div>
                {aportaciones.map((aportaciones) => (
                    <div key={aportaciones.aportaciones_Id}>
                        <p>{aportaciones.aportaciones_Nombre}</p>
                        <p>{aportaciones.aportaciones_Costo}</p>
                    </div>
                ))}
            </div>
            <DataTable value={aportaciones} tableStyle={{ minWidth: '50rem' }}>
                <Column field="aportaciones_Id" header="Code"></Column>
                <Column field="aportaciones_Nombre" header="Name"></Column>
                <Column field="aportaciones_Costo" header="Category"></Column>
            </DataTable>
            <Panel header="Named ClassName" className="mypanel">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Panel>
        </>

    );
}
