import '../Assets/CSS/Welcome.css';
<<<<<<< HEAD
import '../Assets/CSS/Welcome.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export default function Welcome() {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
        navigate('/login')
        },5000)
    })
    const antIcon = (
        <LoadingOutlined
            style={{
            fontSize: 100,
            color: '#E94057',
            fontWeight: 'bold',
            }}
            spin
        />
        
      );
=======
import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Welcome() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/home')
        },1000)
    },[])
    
>>>>>>> 879bc976444799d2fe6938ee1ce6367e90c82683
    return (
        <>
        <div className="Welcome">
            
            </div>
            <Spin 
            indicator={antIcon} 
            Style="
                z-index:1;
                margin-top:-50%;
                margin-left:50%;
            "
          />
          </>
    );
}