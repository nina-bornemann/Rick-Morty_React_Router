import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Character} from "./types/RickAndMortyCharacter.ts";
import {characters} from "./Characters.ts";

export default function Create() {

    const [name, setName] = useState<string>("");
    const [species, setSpecies] = useState<string>("");
    const [status, setStatus] = useState<string>("");

    const nav = useNavigate()

    function handleSubmit(e:FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const newCharacter:Character = {name: name, species: species, status: status} as Character
        characters.push(newCharacter);
        nav("/characters")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input type={"text"} placeholder={"Enter Name"}
                           onChange={(e) => setName(e.target.value)}/>
                </label>
                <label>Species:
                    <input type={"text"} placeholder={"Enter Species"}
                           onChange={e => setSpecies(e.target.value)}/>
                </label>
                <label>Status:
                    <input type={"text"} placeholder={"Enter Status"}
                    onChange={e => setStatus(e.target.value)}/>
                </label>

                <button type={"submit"}>Add new Character</button>
            </form>
        </>
    )
}