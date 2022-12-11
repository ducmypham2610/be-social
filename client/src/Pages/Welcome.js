import '../Assets/CSS/Welcome.css';
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