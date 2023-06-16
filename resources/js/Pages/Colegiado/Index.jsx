import TablaDinamica from "@/Components/DataTable";
import { Head } from "@inertiajs/react";

export default function App() {
    return (
        <div>
            <Head title="Colegiados" />
            <TablaDinamica />
        </div>
    );
}