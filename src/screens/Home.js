import React,{useEffect} from 'react'
import { signInWithGoogle, auth } from '../firebase'
import "./Home.css"

import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";


function Home() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/dashboard");
    }, [loading, user]);

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