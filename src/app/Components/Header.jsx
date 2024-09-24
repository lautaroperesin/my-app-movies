import Link from "next/link";

export default function Header(){
    return(
        <header className="sticky w-full bg-black">
            <div className="container mx-auto flex items-center justify-center p-5">
                <section>
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
                </section>
            </div>
        </header>
    );
}