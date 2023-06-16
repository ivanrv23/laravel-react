import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function HistorialPagos({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Historial de pagos</h2>}
        >
            <Head title="HistorialPagos" />
            <Head title="RealizarPagos" />

            <Head title="EventosGenerales" >
                <link href="{{ mix('css/app.css') }}" rel="stylesheet" />
            </Head>


            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h2 className="font-semibold text-xl text-gray-800 leading-tight">Pagos Mensuales de la Membresía</h2>
                            <div className="my-4">
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-md py-2 px-4"
                                    placeholder="Buscar"

                                />
                                <div className='mt-4 mb-4'>
                                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-4">Filtrar por año</button>
                                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-4">Filtrar por Capitulo</button>
                                </div>
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Año</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capitulos</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inscritos</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ingresar</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">2023</td>
                                            <td className="px-6 py-4 whitespace-nowrap">SISTEMAS</td>
                                            <td className="px-6 py-4 whitespace-nowrap">254</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Ingresar</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">2022</td>
                                            <td className="px-6 py-4 whitespace-nowrap">SISTEMAS</td>
                                            <td className="px-6 py-4 whitespace-nowrap">260</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Ingresar</button>
                                            </td>
                                        </tr><tr>
                                            <td className="px-6 py-4 whitespace-nowrap">2021</td>
                                            <td className="px-6 py-4 whitespace-nowrap">SISTEMAS</td>
                                            <td className="px-6 py-4 whitespace-nowrap">210</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Ingresar</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">2023</td>
                                            <td className="px-6 py-4 whitespace-nowrap">MINAS</td>
                                            <td className="px-6 py-4 whitespace-nowrap">200</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Ingresar</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">2022</td>
                                            <td className="px-6 py-4 whitespace-nowrap">MINAS</td>
                                            <td className="px-6 py-4 whitespace-nowrap">205</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Ingresar</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">2023</td>
                                            <td className="px-6 py-4 whitespace-nowrap">CIVIL</td>
                                            <td className="px-6 py-4 whitespace-nowrap">400</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Ingresar</button>
                                            </td>
                                        </tr><tr>
                                            <td className="px-6 py-4 whitespace-nowrap">2022</td>
                                            <td className="px-6 py-4 whitespace-nowrap">CIVIL</td>
                                            <td className="px-6 py-4 whitespace-nowrap">550</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Ingresar</button>
                                            </td>
                                        </tr><tr>
                                            <td className="px-6 py-4 whitespace-nowrap">2021</td>
                                            <td className="px-6 py-4 whitespace-nowrap">CIVIL</td>
                                            <td className="px-6 py-4 whitespace-nowrap">254</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Ingresar</button>
                                            </td>
                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
