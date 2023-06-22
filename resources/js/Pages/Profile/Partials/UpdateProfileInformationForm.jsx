import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function UpdateProfileInformation({ mustVerifyEmail, status, className = '' }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        chapter: user.chapter,
        address: user.address,
        incorporationDate: user.incorporationDate,
        phone: user.phone,
        cip: user.cip,
        state: user.state,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('Colegiado.update'));
    };

    return (
        <section className={className}>
            <header className="w-full mx-4">
                <h2 className="text-lg font-medium text-gray-900">Información personal</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Actualiza tus datos personales.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div className='flex'>
                    <div className='w-1/2 mx-4'>
                        <InputLabel htmlFor="name" value="Nombres" />
                        <TextInput
                            id="name"
                            className="mt-1 block w-full"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            isFocused
                            autoComplete="name"
                        />
                        <InputError className="mt-2" message={errors.name} />
                    </div>
                    <div className='w-1/2 mx-4'>
                        <InputLabel htmlFor="apellido" value="Apellidos" />
                        <TextInput
                            id="apellido"
                            className="mt-1 block w-full"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            isFocused
                            autoComplete="apellido"
                        />
                        <InputError className="mt-2" message={errors.name} />
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-1/2 mx-4'>
                        <InputLabel htmlFor="dni" value="DNI" />
                        <TextInput
                            id="dni"
                            className="mt-1 block w-full"
                            value={data.cip}
                            onChange={(e) => setData('cip', e.target.value)}
                            required
                            isFocused
                            autoComplete="dni"
                        />
                        <InputError className="mt-2" message={errors.cip} />
                    </div>
                    <div className='w-1/2 mx-4'>
                        <InputLabel htmlFor="chapter" value="Email" />

                        <TextInput
                            id="chapter"
                            type="text"
                            className="mt-1 block w-full"
                            value={data.chapter}
                            onChange={(e) => setData('chapter', e.target.value)}
                            required
                            autoComplete=""
                        />

                        <InputError className="mt-2" message={errors.chapter} />
                    </div>
                </div>
                {/* <div className='flex'>
                    <div className='w-1/2 mx-4'>
                        <InputLabel htmlFor="name" value="Teléfono" />
                        <TextInput
                            id="name"
                            className="mt-1 block w-full"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            isFocused
                            autoComplete="name"
                        />
                        <InputError className="mt-2" message={errors.name} />
                    </div>
                    <div className='w-1/2 mx-4'>
                        <InputLabel htmlFor="name" value="Dirección" />
                        <TextInput
                            id="name"
                            className="mt-1 block w-full"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            isFocused
                            autoComplete="name"
                        />
                        <InputError className="mt-2" message={errors.name} />
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-1/2 mx-4'>
                        <InputLabel htmlFor="name" value="Universidad" />
                        <TextInput
                            id="name"
                            className="mt-1 block w-full"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            isFocused
                            autoComplete="name"
                        />
                        <InputError className="mt-2" message={errors.name} />
                    </div>
                    <div className='w-1/2 mx-4'>
                        <InputLabel htmlFor="name" value="Tipo de agremiado" />
                        <TextInput
                            id="name"
                            className="mt-1 block w-full"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            isFocused
                            autoComplete="name"
                        />
                        <InputError className="mt-2" message={errors.name} />
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-1/2 mx-4'>
                        <InputLabel htmlFor="name" value="Código CIP" />
                        <TextInput
                            id="name"
                            className="mt-1 block w-full"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            isFocused
                            autoComplete="name"
                        />
                        <InputError className="mt-2" message={errors.name} />
                    </div>
                    <div className='w-1/2 mx-4'>
                        <InputLabel htmlFor="name" value="Fecha de Integración" />
                        <TextInput
                            id="name"
                            className="mt-1 block w-full"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            isFocused
                            autoComplete="name"
                        />
                        <InputError className="mt-2" message={errors.name} />
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-1/2 mx-4'>
                        <InputLabel htmlFor="name" value="Estado de Colegiatura" />
                        <TextInput
                            id="name"
                            className="mt-1 block w-full"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            isFocused
                            autoComplete="name"
                        />
                        <InputError className="mt-2" message={errors.name} />
                    </div>
                    <div className='w-1/2 mx-4'>
                        <InputLabel htmlFor="name" value="Foto de perfil" />
                        <TextInput
                            id="name"
                            className="mt-1 block w-full"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            isFocused
                            autoComplete="name"
                        />
                        <InputError className="mt-2" message={errors.name} />
                    </div>
                    {mustVerifyEmail && user.email_verified_at === null && (
                        <div>
                            <p className="text-sm mt-2 text-gray-800">
                                Your email address is unverified.
                                <Link
                                    href={route('verification.send')}
                                    method="post"
                                    as="button"
                                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Click here to re-send the verification email.
                                </Link>
                            </p>
                            {status === 'verification-link-sent' && (
                                <div className="mt-2 font-medium text-sm text-green-600">
                                    A new verification link has been sent to your email address.
                                </div>
                            )}
                        </div>
                    )}
                </div> */}
                <div className="flex items-center gap-4 mx-4">
                    <PrimaryButton disabled={processing}>Guardar</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enterFrom="opacity-0"
                        leaveTo="opacity-0"
                        className="transition ease-in-out"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
