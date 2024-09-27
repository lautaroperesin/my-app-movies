import Link from "next/link";

export default function NavBar(){
    return(
        <nav className="nav-bar-container">
            <div className="container-ul-nav-bar">
                <ul className="ul-nav-bar">
                    <li>
                        <Link href="/" className="link">Home</Link>
                    </li>
                    <li>
                        <Link href="/movies" className="link">Movies</Link>
                    </li>
                    <li>
                        <Link href="/series" className="link">Series</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}