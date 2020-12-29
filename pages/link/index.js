import React from 'react';
import Link from 'next/link';


const Home = () => {
    return (
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav__list__item">
                    <Link href="/inicio" as="/inicio" scroll={false}><a>Home</a></Link>
                </li>
                <li nav__list__item>
                    <Link href="/documentales" scroll={false}><a>about us</a></Link>
                </li>
            </ul>

        </nav>
    )
}

export default Home;