import Layout from "../Components/Layout";
import "../Assets/CSS/Pages/Premium.css"
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

//Tạo link điều hướng button với id là btn

export default function Premium() {

    let navigate = useNavigate();
    const titan = async () => { 
        window.location.href ='https://me.momo.vn/BeDating/WPe9932GA5RxeLy';
    }

    const gold = async () => { 
        window.location.href ='https://me.momo.vn/BeDating/QBeXQYMqP995ayK';
    }

    const platinum = async () => { 
        window.location.href ='https://me.momo.vn/BeDating/jnegp7k8GAlYawZ';
    }

    // const btn1 = document.getElementById('btn1');
    // btn1.addEventListener('click', function() {
    //     window.location.href ='https://me.momo.vn/BeDating/WPe9932GA5RxeLy';
    // });
    
    // const btn2 = document.getElementById('btn2');
    // btn2.addEventListener('click', function() {
    //     window.location.href ='https://me.momo.vn/BeDating/QBeXQYMqP995ayK';
    // });
    
    
    // const btn3 = document.getElementById('btn3');
    // btn3.addEventListener('click', function() {
    //     window.location.href ='https://me.momo.vn/BeDating/jnegp7k8GAlYawZ';
    // });
    return (
        <Layout>
            <div className="Premium">
                <div className="Premium-Content">
                    <h1 className="Be">BePremium</h1>
                    <p>Choose to use great experiences on BeDating</p>
                </div>
                <div className="Choice">
                    <div className="Choice-Content">
                        <div className="Title">
                            <h1 className="Titan">TITAN</h1>
                            <p>35,000 VND/Month</p>
                        </div>
                        <div className="Button">
                            <Button onClick={titan} variant="contained">BUY</Button>
                        </div>
                        <div className="Des">
                            <ul>
                                <li>Unlock the feature to see who has liked</li>
                                <li>Unlock the "Second Look" viewing feature</li>
                                <li>Unlock the love counseling feature</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Choice-Content">
                        <div className="Title">
                            <h1 className="Gold">GOLD</h1>
                            <p>120,000 VND/Months</p>
                        </div>
                        <div className="Button">
                            <Button onClick={gold} variant="contained">BUY</Button>
                        </div>
                        <div className="Des">
                            <ul>
                                <li>Unlock the feature to see who has liked</li>
                                <li>Unlock the "Second Look" viewing feature</li>
                                <li>Unlock the love counseling feature</li>
                                <li>Give partners discount vouchers on their birthdays.</li>
                                <li>50% off the next Premium subscription</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Choice-Content">
                        <div className="Title">
                            <h1 className="Platinum">PLATINUM</h1>
                            <p>180,000 VND/12 Months</p>
                        </div>
                        <div className="Button">
                            <Button onClick={platinum} variant="contained">BUY</Button>
                        </div>
                        <div className="Des">
                            <ul>
                                <li>Unlock the feature to see who has liked</li>
                                <li>Unlock the "Second Look" viewing feature</li>
                                <li>Unlock the love counseling feature</li>
                                <li>Give partners discount vouchers on their birthdays</li>
                                <li>Birthday gift from BeDating and the development team</li>
                                <li>70% off the next Premium subscription</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}