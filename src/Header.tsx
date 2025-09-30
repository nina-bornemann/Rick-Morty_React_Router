import {Link} from "react-router-dom";

export default function Header() {
    return (
        <>
            <h1>Rick & Morty Gallery</h1>
            <Link to={"/"}>Home Page </Link>
            <Link to={"/characters"}> Characters</Link>
        </>
    )
}