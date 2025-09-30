import {Character} from "../types/RickAndMortyCharacter.ts";
import "./CharacterCard.css";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

type CharacterCardProps = {
    character: Character;
}

export default function CharacterCard(props: Readonly<CharacterCardProps>) {

    const navToCard = useNavigate();

    function navigateToDetailCard() {
        navToCard("/characters/"+props.character.id)
    }

    const [comment, setComment] = useState<string>("")

    function sendComment(e: React.FormEvent<HTMLFormElement> ) {
        e.preventDefault()
        const commentInput = (e.currentTarget.elements.namedItem("comment") as HTMLInputElement)
        setComment(commentInput.value)
    }

    return (
        <div className="character-card">
            <div className={"header"}>
                <img src={props.character.image} alt={props.character.name}/>
                <div className="character-card-info">
                    <button onClick={navigateToDetailCard}>Info</button>
                    <h3 >{props.character.name}</h3>
                    <p>Species: {props.character.species}</p>
                    <p>Status: {props.character.status}</p>
                </div>
            </div>

            <form onSubmit={sendComment} className={"commentSection"}>
                <label className={"comment"}> Comments: {comment}
                </label>

                <div className={"commentAndSubmit"}>
                    <input className={"commentInput"} type={"text"} placeholder={"Enter your comment"} name={"comment"}/>
                    <button className={"submitComment"} type={"submit"}>Send</button>
                </div>
            </form>
        </div>
    );
}
