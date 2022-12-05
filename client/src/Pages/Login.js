import '../Assets/CSS/Pages/Login.css';
import Logo from '../Assets/Images/logo.png';
import Button from '@mui/material/Button';
import { API_LOGIN } from '../config/API-config';
import {login} from '../services/userService';
import { authentication } from '../config/firebase-config';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import axios from "axios";

export default function Login() {
    let navigate = useNavigate();
    const signInWithGoogle = async () => {
        try{
            const provider = new GoogleAuthProvider();
            await signInWithPopup(authentication, provider)
            const auth = getAuth();
            const user = auth.currentUser;
            const name = user.displayName;
            const email = user.email;
            // checking if user with email is existed in database
            const response = await axios.post(API_LOGIN,{email,name});
            localStorage.setItem("AuthToken",response.data.token);
            localStorage.setItem("UserId",response.data.user._id);
            // if not redirect to profile page
            if(response.status === 201) {
                navigate('/profile');
            }
            // if yes redirect to dashboard page
            if(response.status === 200) {
                navigate('/home');
            }
        }catch(err) {
            console.log(err);
        }
    }

    return (
        <div className="Login">
            <div className="Group">
                <div className="Logo">
                    <img src={Logo} />
                </div>
                <div className="Title">
                    <h1>WELCOME TO</h1>
                    <h2>BeDating</h2>
                </div>
                <div className="ButtonLogin">
                    <Button variant="contained" onClick={signInWithGoogle}>LOGIN</Button>
                </div>
            </div>
        </div>
    );
}