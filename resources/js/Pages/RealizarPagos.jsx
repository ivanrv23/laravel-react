import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function RealizarPagos({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Realice su pago mensual</h2>}
        >
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
                                <div className='mt-4'>
                                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Pagar Todo</button>
                                    <div />

                                </div>
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Año</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mes</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio(Soles)</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pago</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">2023</td>
                                            <td className="px-6 py-4 whitespace-nowrap">Enero</td>
                                            <td className="px-6 py-4 whitespace-nowrap">16.00</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button className="bg-red-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">Pagar</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">2023</td>
                                            <td className="px-6 py-4 whitespace-nowrap">Febrero</td>
                                            <td className="px-6 py-4 whitespace-nowrap">16.00</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button className="bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Pagar</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">2023</td>
                                            <td className="px-6 py-4 whitespace-nowrap">Marzo</td>
                                            <td className="px-6 py-4 whitespace-nowrap">16.00</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button className="bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Pagar</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">2023</td>
                                            <td className="px-6 py-4 whitespace-nowrap">Abril</td>
                                            <td className="px-6 py-4 whitespace-nowrap">16.00</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button className="bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Pagar</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">2023</td>
                                            <td className="px-6 py-4 whitespace-nowrap">Mayo</td>
                                            <td className="px-6 py-4 whitespace-nowrap">16.00</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button className="bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Pagar</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">2023</td>
                                            <td className="px-6 py-4 whitespace-nowrap">Junio</td>
                                            <td className="px-6 py-4 whitespace-nowrap">16.00</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button className="bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Pagar</button>
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
