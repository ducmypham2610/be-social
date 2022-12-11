import '../Assets/CSS/Welcome.css';
import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Welcome() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/home')
        },1000)
    },[])
    
    return (
        <div className="Welcome">
            
        </div>
    );
}