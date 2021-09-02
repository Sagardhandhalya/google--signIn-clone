import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"

const Home = () => {
    return (
        <div className="home__container">
            <div>
                <h1>Welcome to Family Mapping Portal</h1>
                <Link to="/main">
                    <button type="button" class="login-with-google-btn" >
                        Sign in with Google
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home
