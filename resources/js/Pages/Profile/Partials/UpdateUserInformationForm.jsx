import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function UpdateUserInformation({ mustVerifyEmail, status, className = '' }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
        role: user.role,
        estado: user.estado,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <section className={className}>
            <header className="w-full mx-4">
                <h2 className="text-lg font-medium text-gray-900">Información de Usuario</h2>
                <p className="mt-1 text-sm text-gray-600">
                    Actualiza tu nombre de Usuario y correo electrónico.
                </p>
            </header>
            <form onSubmit={submit} className="w-full mt-6 space-y-6">
                <div className="flex">
                    <div className="w-1/2 mx-4">
                        <InputLabel htmlFor="name" value="Name" />
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
                    <div className="w-1/2 mx-4">
                        <InputLabel htmlFor="estado_user" value="Estado" />
                        <TextInput
                            id="estado_user"
                            className="mt-1 block w-full"
                            value={data.estado}
                            onChange={(e) => setData('estado', e.target.value)}
                            required
                            isFocused
                            autoComplete="Estado de Usuario"
                        />
                        <InputError className="mt-2" message={errors.name} />
                    </div>
                </div>
                <div className="flex">
                    <div className="w-1/2 mx-4">
                        <InputLabel htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            className="mt-1 block w-full"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            required
                            autoComplete="username"
                        />
                        <InputError className="mt-2" message={errors.email} />
                    </div>
                    <div className="w-1/2 mx-4">
                        <InputLabel htmlFor="rol_user" value="Rol" />
                        <TextInput
                            id="rol_user"
                            type="text"
                            className="mt-1 block w-full"
                            value={data.role}
                            onChange={(e) => setData('role', e.target.value)}
                            required
                            autoComplete="Rol de Usuario"
                        />
                        <InputError className="mt-2" message={errors.email} />
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
                </div>
                <div className="w-full items-center gap-4 mx-4">
                    <PrimaryButton disabled={processing}>Guardar</PrimaryButton>
                    <Transition
                        show={recentlySuccessful}
                        enterFrom="opacity-0"
                        leaveTo="opacity-0"
                        className="transition ease-in-out"
                    >
                        <p className="text-sm text-green-600">Se guardó correctamente.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}