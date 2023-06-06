import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function EventosGenerales({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Eventos para todos los Capítulos del CIP</h2>}
        >
            <Head title="EventosGenerales" >
                <link href="{{ mix('css/app.css') }}" rel="stylesheet" />
            </Head>


            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h2 className="font-semibold text-xl text-gray-800 leading-tight">Eventos para todos los Capítulos del CIP</h2>
                            <div className="my-4">
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-md py-2 px-4"
                                    placeholder="Buscar"

                                />
                                <div className="mt-4">
                                    <label className="mr-4">
                                        <input
                                            type="checkbox"
                                            value="todos"
                                        />
                                        Todos
                                    </label>

                                    <label className="mr-4">
                                        <input
                                            type="checkbox"
                                            value="pago"
                                        />
                                        Recaudado
                                    </label>
                                </div>
                            </div>
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capítulos</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mes</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Día</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hora</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total de Asistentes</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">Capítulo de Sistemas</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Enero</td>
                                        <td className="px-6 py-4 whitespace-nowrap">1</td>
                                        <td className="px-6 py-4 whitespace-nowrap">10:00 AM</td>
                                        <td className="px-6 py-4 whitespace-nowrap">120</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">Capítulo de Geológica</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Febrero</td>
                                        <td className="px-6 py-4 whitespace-nowrap">1</td>
                                        <td className="px-6 py-4 whitespace-nowrap">11:00 AM</td>
                                        <td className="px-6 py-4 whitespace-nowrap">150</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">Capítulo de Minas</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Marzo</td>
                                        <td className="px-6 py-4 whitespace-nowrap">1</td>
                                        <td className="px-6 py-4 whitespace-nowrap">10:00 AM</td>
                                        <td className="px-6 py-4 whitespace-nowrap">50</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
