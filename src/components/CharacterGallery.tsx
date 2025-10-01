import {Character} from "../types/RickAndMortyCharacter.ts";
import CharacterCard from "./CharacterCard.tsx";
import "./CharacterGallery.css";
import axios from "axios";
import {useState} from "react";

type CharacterGalleryProps = {
    characters: Character[];
    setCharacters: (characters:Character[]) => void;
}
export default function CharacterGallery(props: Readonly<CharacterGalleryProps>) {

    const [char, setChar] = useState<Character[]>([])

    const cards = char?.map((character) => <CharacterCard key={character.name} character={character}/>);

    function loadAllCharacters() {
        axios.get("http://rickandmortyapi.com/api/character")
            .then((response) => setChar(response.data.results))
            .catch((error) => console.log(error))
    }

    return (
        <div className="character-gallery">
            <button onClick={loadAllCharacters}>Load Characters</button>
            {cards}

        </div>
    );
}
