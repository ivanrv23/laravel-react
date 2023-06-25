import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import LabelText from '@/Components/LabelText';

export default function UpdateProfileInformation({ persona, className = '' }) {
    //const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        address: persona[0].address,
        phone: persona[0].phone,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('colegiado.update'));
    };
    //Verificar el Estado de Colegiado
    var estado = "";
    if (persona[0].state == '1') {
        estado = "Habilitado";
    } else {
        estado = "Inhabilitado";
    }

    return (
        <section className={className}>
            <header className="w-full mx-4">
                <h2 className="text-lg font-medium text-gray-900">Información personal</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Actualiza tus datos personales.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 mx-4'>
                        <InputLabel htmlFor="name" value="Nombres" />
                        <LabelText
                            id="name"
                            className="mt-1 block w-full"
                            value={persona[0].name}
                        />
                    </div>
                    <div className='md:w-1/2 mx-4'>
                        <InputLabel htmlFor="apellido" value="Apellidos" />
                        <LabelText
                            id="apellido"
                            className="mt-1 block w-full"
                            value={persona[0].surname}
                        />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 mx-4'>
                        <InputLabel htmlFor="dni" value="DNI" />
                        <LabelText
                            id="dni"
                            className="mt-1 block w-full"
                            value={persona[0].dni}
                        />
                    </div>
                    <div className='md:w-1/2 mx-4'>
                        <InputLabel htmlFor="university" value="Universidad" />
                        <LabelText
                            id="university"
                            className="mt-1 block w-full"
                            value={persona[0].university}
                        />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 mx-4'>
                        <InputLabel htmlFor="agremiado" value="Tipo de agremiado" />
                        <LabelText
                            id="agremiado"
                            className="mt-1 block w-full"
                            value={persona[0].agremiado_id}
                        />
                    </div>
                    <div className='md:w-1/2 mx-4'>
                        <InputLabel htmlFor="codecip" value="Código CIP" />
                        <LabelText
                            id="codecip"
                            className="mt-1 block w-full"
                            value={persona[0].codecip}
                        />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 mx-4'>
                        <InputLabel htmlFor="integration" value="Fecha de Integración" />
                        <LabelText
                            id="integration"
                            className="mt-1 block w-full"
                            value={persona[0].integration}
                        />
                    </div>
                    <div className='md:w-1/2 mx-4'>
                        <InputLabel htmlFor="state" value="Estado de Colegiatura" />
                        <LabelText
                            id="state"
                            className="mt-1 block w-full"
                            value={estado}
                        />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 mx-4'>
                        <InputLabel htmlFor="address" value="Dirección" />
                        <TextInput
                            id="address"
                            className="mt-1 block w-full"
                            value={data.address}
                            onChange={(e) => setData('address', e.target.value)}
                            required
                        />
                        <InputError className="mt-2" message={errors.address} />
                    </div>
                    <div className='md:w-1/2 mx-4'>
                        <InputLabel htmlFor="phone" value="Teléfono" />
                        <TextInput
                            id="phone"
                            className="mt-1 block w-full"
                            value={data.phone}
                            onChange={(e) => setData('phone', e.target.value)}
                            required
                        />
                        <InputError className="mt-2" message={errors.phone} />
                    </div>
                </div>
                <div className="flex items-center gap-4 mx-4">
                    <PrimaryButton disabled={processing}>Guardar</PrimaryButton>
                    <Transition
                        show={recentlySuccessful}
                        enterFrom="opacity-0"
                        leaveTo="opacity-0"
                        className="transition ease-in-out"
                    >
                        <p className="text-sm text-gray-600">Guardado Colegiado.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
