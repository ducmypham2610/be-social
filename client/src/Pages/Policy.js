import '../Assets/CSS/Pages/Policy.css';
import Layout from "../Components/Layout";
import React from 'react';

export default function About() {
    return(
        <Layout>
            <div className="Policy">
                <div className="Group">
                    <div className="Title">
                        <h1>Policy</h1>
                    </div>
                    <div className="Content">
                        <h2>I.	Community Standards</h2>
                        <ul>
                            <li>
                                <h3>1. Policy with users</h3>
                                <ul>
                                    <li><b>1.1. Users are 18 years of age or older and are students of FPT education organization</b></li>
                                    <li><b>1.2. Users who are not banned from using social networks, have criminal records or criminal records</b></li>
                                    <li><b>1.3. Users must abide by the following policies:</b>
                                        <ul>
                                            <li>1.3.1. Users must not use the application to post, share, or send any content that is illegal, threatening, abusive, harassing, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically, or otherwise objectionable.</li>
                                            <li>1.3.2. Users must not use the application to post, share, or send any content that infringes on any intellectual property rights of any person or entity.</li>
                                            <li>1.3.3. Users must not use the application to post, share, or send any content that contains any viruses, Trojan horses, worms, time bombs, cancelbots, or any other harmful or deleterious programs.</li>
                                            <li>1.3.4. Users must not use the application to post, share, or send any content that contains any advertising or solicitation of any kind, including but not limited to advertising or solicitation of goods or services.</li>
                                            <li>1.3.5. Users must not use the application to post, share, or send any content that contains any personal information of any third party.</li>
                                            <li>1.3.6. Users must not use the application to post, share, or send any content that contains any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically, or otherwise objectionable.</li>
                                        </ul>
                                    </li>
                                </ul>    
                            </li>
                            <li>
                                <h3>2. Policy with copyright</h3>
                                <ul>
                                    <li><b>2.1.	Users must not use the service to post or transmit any content that contains any material that infringes any patent, trademark, trade secret, copyright, or other proprietary rights of any party.</b></li>
                                    <li><b>2.2.	Users must not use the service to post or transmit any content that contains any material that contains any material that infringes any patent, trademark, trade secret, copyright, or other proprietary rights of any party.</b></li>
                                </ul>
                            </li>
                            <li>
                                <h3>3. User protection policy</h3>
                                <ul>
                                    <li><b>3.1. Do not use other people's photos and personal information for personal purposes</b></li>
                                    <li><b>3.2. Do not use the application to post, share, or send any content that contains any personal information of any third party.</b></li>
                                    <li><b>3.3. Do not use the application to post, share, or send any content that contains any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically, or otherwise objectionable.</b></li>
                                </ul>   
                            </li>
                            <li>
                                <h3>4.	Security policy</h3>
                                <ul>
                                    <li><b>4.1. Committed to keeping user information safe</b></li>
                                    <li><b>4.2. Use organization email account authentication and OTP code validation</b></li>
                                    <li><b>4.3. Use the latest technology to protect user information</b></li>
                                    <li><b>4.4. Commitment to a secure system that meets SSL and HTTPS standards, all information is guaranteed to be safe</b></li>
                                </ul>   
                            </li>
                        </ul> 
                        <h2>II.	Enforcement </h2>
                        <ul>
                            <li><b>1.1.    For users who are not of the allowed age as stated in I.1.1, the account will be locked until the account is verified.</b></li>
                            <li><b>1.2.    For users who violate the policies stated in I.1.3, the account will be locked until the account is verified.</b></li>
                            <li><b>1.3.    For users who are not allowed to use the account, the account will be permanently locked</b>.</li>
                            <li><b>1.4.    For accounts that violate Article I.2 of the copyright policy, the account will be removed from images, sounds, and posts, related to copyright and given sanctions.</b></li>
                            <li><b>1.5.    For users who violate the policies stated in I.3, the account will be locked until the account is verified.</b></li>
                        </ul>
                        <h2>III.	Payment </h2>
                        <ul>
                            <li><b>1.1.    The application is free to use, no payment is required.</b></li>
                            <li><b>1.2.    Make a transfer with the requested content, make sure you transfer the correct content we show.</b></li>
                            <li><b>1.3.    We will not accumulate money or any transfers that are not stored on the system.</b></li>
                            <li><b>1.4. For users who make a transfer with the wrong request, we will not refund for any reason.</b></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
}