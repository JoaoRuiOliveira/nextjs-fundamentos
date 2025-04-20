import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
    return (

        <nav style= {{ marginBottom: '20px'}}>
            <Link href="/" style={{ marginRight: '10px' }}>Home</Link>
            <Link href="/about" style={{ marginRight: '10px' }}>Sobre</Link>
        </nav>
    );
};

export default Navbar;