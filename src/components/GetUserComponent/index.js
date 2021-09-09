import { useState } from "react";
import "./styles.css"


function GetUserComponent ({ setUser, setIsLoggedIn }) {

    const [userInput, setUserInput] = useState("");

    function HandleLogin (userInput) {
        setUser(userInput)
        setIsLoggedIn(true);
    }

    return (

        <form className="form">
            <input className="input" type="text" value={userInput} placeholder="Digite seu nome" onChange={(event) => setUserInput(event.target.value)} />
            <button className="btn-input" onClick={() => HandleLogin(userInput)}> Acessar com o nome </button>
        </form>
    )
}


export default GetUserComponent;
