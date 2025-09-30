import {Link, useNavigate} from "react-router-dom";



export default function Header() {

    const nav = useNavigate();
    function navigateHome() {
        nav("/")
    }
    function navigateCharacters() {
        nav("/characters")
    }

    return (
        <>
            <h3>Navigation Bar</h3>
            <Link to={"/"}>Home Page </Link>
            <Link to={"/characters"}> Characters</Link>

            <h3>UseNavigate Hook</h3>
            <button onClick={navigateHome}>Home Page</button>
            <button onClick={navigateCharacters}>Characters</button>

        </>
    )
}