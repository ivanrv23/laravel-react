import HeaderPrincipal from "@/Components/Header";
import FooterPrincipal from "@/Components/Footer";
import Principal from "@/Components/Principal";
import { Head } from "@inertiajs/react";
export default function HomePage() {
    return (
        <div className="flex flex-col h-screen">
            <Head title="Inicio" />
            {/* header */}
            <HeaderPrincipal />
            {/* Content */}
            <main className="container mx-auto mt-8">
                <Principal />
            </main>
            {/* Footer */}
            <FooterPrincipal />
        </div>
    );
}
