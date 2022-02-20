import React from 'react'
import { signInWithGoogle } from '../firebase'
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Classroom_Logo.png"
                    alt="Google Classroom"
                    className="home__image"
                />
                <button className="home__login" onClick={signInWithGoogle}>
                    Login with Google
                </button>
            </div>
        </div>
    )
}

export default Home