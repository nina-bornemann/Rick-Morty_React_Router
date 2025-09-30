import {useParams} from "react-router-dom";
import {Character} from "./RickAndMortyCharacter.ts";
import CharacterCard from "../components/CharacterCard.tsx";

type DetailProps = {
    characters:Character[]
};

export default function CharacterDetailCard(props: Readonly<DetailProps>) {

    const param = useParams();

    const characterById = props.characters.find(char => char.id.toString() === param.id)


    return (
        <>
            <h2>Details to Character of ID: {param.id}</h2>
            <h3>{characterById?.name}</h3>
            <CharacterCard character={characterById!} />
        </>
    )
}