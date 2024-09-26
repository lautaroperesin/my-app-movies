import Link from "next/link";

export default function NavBar(){
    return(
        <nav className="sticky top-0 w-full bg-black p-5 z-50">
            <div className="container mx-auto flex items-center justify-center">
                <ul className="flex items-center gap-x-8">
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