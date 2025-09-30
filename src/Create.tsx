import {useState} from "react";

export default function Create() {

    const [name, setName] = useState<string>("");
    const [species, setSpecies] = useState<string>("");
    const [status, setStatus] = useState<string>("");


    return (
        <>
            <form>
                <label>Name:
                    <input type={"text"} placeholder={"Enter Name"}
                           onChange={(e) =>setName(e.target.value)}/>
                </label>
                <label>Species:
                    <input type={"text"} placeholder={"Enter Species"}
                           onChange={e => setSpecies(e.target.value)}/>
                </label>
                <label>Status:
                    <input type={"text"} placeholder={"Enter Status"}
                    onChange={e => setStatus(e.target.value)}/>
                </label>
            </form>
        </>
    )
}