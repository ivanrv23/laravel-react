import TablaDinamica from "@/Components/TablaDinamica";
import { Head } from "@inertiajs/react";

export default function App({colegiados}) {
    // const data = [
    //     { chapter:colegiados.chapter, name: "Iván Ramos", address: 25,
    //     incorporationDate: "20/06/2022", phone: 952142514,cip:7542154528 },
    //     { chapter:'Geologia', name: "Juan Perez", address: 25,
    //     incorporationDate: "20/06/2022", phone: 952142514,cip:7542154528 },
    //     { chapter:'Minas', name: "Dennis perez", address: 25,
    //     incorporationDate: "20/06/2022", phone: 952142514,cip:7542154528 },
    //     { chapter:'Civil', name: "Alciviades Cueva", address: 25,
    //     incorporationDate: "20/06/2022", phone: 952142514,cip:7542154528 },
    //     { chapter:'Hidraulica', name: "Diana Castro", address: 25,
    //     incorporationDate: "20/06/2022", phone: 952142514,cip:7542154528 },
    // ]
    
    const columns = [
        { field: "chapter", header: "Capítulo" },
        { field: "name", header: "Nombre" },
        { field: "address", header: "Dirección" },
        { field: "incorporationDate", header: "Fecha Incorporacion" },
        { field: "phone", header: "Teléfono" },
        { field: "cip", header: "Codigo CIP" },
    ];
    return (
        <div>
            <Head title="Colegiados" />
            <TablaDinamica data={colegiados} columns={columns} />
        </div>
    );
}

