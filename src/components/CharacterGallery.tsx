import {Character} from "../types/RickAndMortyCharacter.ts";
import CharacterCard from "./CharacterCard.tsx";
import "./CharacterGallery.css";
import axios from "axios";
import {useEffect, useState} from "react";

type CharacterGalleryProps = {
    characters: Character[];
    setCharacters: (characters:Character[]) => void;
}
export default function CharacterGallery(props: Readonly<CharacterGalleryProps>) {

    const [char, setChar] = useState<Character[]>([])

    const cards = char?.map((character) => <CharacterCard key={character.name} character={character}/>);

    useEffect(() => {
        loadAllCharacters()
    }, [])

    function loadAllCharacters() {
        axios.get("http://rickandmortyapi.com/api/character")
            .then((response) => setChar(response.data.results))
            .catch((error) => console.log(error))
    }

    return (
        <div className="character-gallery">
            {cards}

        </div>
    );
}
