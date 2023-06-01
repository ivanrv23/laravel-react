import HeaderPrincipal from '@/Components/Header';
import FooterPrincipal from '@/Components/Footer';
export default function MainLayout({children}) {
    return (
        <div className="flex flex-col h-screen">
            {/* header */}
            <HeaderPrincipal/>
            {/* Content */}
            <main className="container mx-auto mt-28">{children}</main>
            {/* Footer */}
            <FooterPrincipal/>
        </div>
    );
}
