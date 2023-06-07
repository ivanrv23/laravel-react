import HeaderPrincipal from "@/Components/Header";
import FooterPrincipal from "@/Components/Footer";
import Principal from "@/Components/Principal";
export default function MainLayout() {
    return (
        <div className="flex flex-col h-screen">
            {/* header */}
            <HeaderPrincipal />
            {/* Content */}
            <main className="container mx-auto mt-28">
                <Principal />
            </main>
            {/* Footer */}
            <FooterPrincipal />
        </div>
    );
}
