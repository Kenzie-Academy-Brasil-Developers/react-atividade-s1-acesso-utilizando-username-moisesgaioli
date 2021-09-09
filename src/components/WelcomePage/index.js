import "./styles.css";


function WelcomePage ({ user, setIsLoggedIn }) {

    function HandleLogout () {
        setIsLoggedIn(false)
    }

    return (    

        <div>
            <p className="mensage"> Bem-vindo, {user}!! </p>
            <button className="btn-loggout" onClick={HandleLogout} > Sair </button>
        </div>
    )
}


export default WelcomePage;
