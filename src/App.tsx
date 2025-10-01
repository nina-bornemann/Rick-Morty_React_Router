import './App.css'
import CharacterGallery from "./components/CharacterGallery.tsx";
import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Header from "./Header.tsx";
import CharacterDetailCard from "./types/CharacterDetailCard.tsx";
import Create from "./Create.tsx";
import {Character} from "./types/RickAndMortyCharacter.ts";

export default function App() {
    const [searchText, setSearchText] = useState("");

    const [characters, setCharacters] = useState<Character[]>([])

    const filteredCharacters = characters
        .filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase()));

    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<h1>Hello! Welcome to the Rick&Morty Gallery!</h1>}/>

                <Route path={"/characters"} element={
                    <div>
                        <input type="text" onChange={(e) =>
                            setSearchText(e.target.value)} placeholder={"Search for a character"}/>

                        <CharacterGallery setCharacters={setCharacters} characters={filteredCharacters}/>
                        {
                            filteredCharacters.length > 0 && <p>No characters found</p>

                        }
                    </div>
                }/>

                <Route path={"/characters/:id"} element={<CharacterDetailCard characters={characters}/>}/>

                <Route path={"/create"} element={<Create/>}/>

            </Routes>
        </>
    );
}
