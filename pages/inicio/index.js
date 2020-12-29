import React from 'react';
import Link from 'next/link';

const Inicio = () => {
    return (
        <div>
            <h1>Pantalla de inicio</h1>
            <Link href="/"><a>IR A Link</a></Link>
        </div>
    )
}
export default Inicio;