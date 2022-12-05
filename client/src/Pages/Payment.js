import Layout from "../Components/Layout";
import "../Assets/CSS/Pages/Payment.css"
import Button from '@mui/material/Button';
import Bank from "../Assets/Images/Bank.jpg";

export default function Payment() {
    return (
        <Layout>
            <div className="Payment">
                <div className="Payment-Content">
                    <h1 className="Payment-Title">Payment</h1>
                    <p>Payment by bank transfer</p>
                </div>
                <div className="Group">
                    <div className="Pay">
                        <div className="Info">
                            <h3>Information</h3>
                            <table>
                                <tr>
                                    <th>Full Name</th>
                                    <td>Quach Cong Tuan</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>tuanqcbhaf200014@fpt.edu.vn</td>
                                </tr>
                                <tr>
                                    <th>Phone Number</th>
                                    <td>098-1979-901</td>
                                </tr>
                                <tr>
                                    <th>Status</th>
                                    <td><span style={{color: '#E94057', fontWeight:'bold'}}>Standard</span></td>
                                </tr>
                                <tr>
                                    <th>Coupon</th>
                                    <td><input type="text" name="coupon" maxlength="7" size="7" placeholder="ABC-DET"/></td>
                                </tr>
                                <tr>
                                    <td><Button size="small" variant="contained" style={{background:'#E94057',width:'100%'}}>Cancel</Button></td>
                                    <td><Button size="small" variant="contained" style={{width:'50%'}} color='secondary'>Confirm</Button></td>
                                </tr>
                            </table>
                        </div>
                        <div className="Code">
                            <h3>Payment Guide</h3>
                            <p><b>1. </b>Please pay the exact amount requested.</p>
                            <p><b>2. </b>Make sure you enter the correct content we display.</p>
                            <p><b>3. </b>Before transferring, please double check the information and take a screenshot of the transfer.</p>
                            <p><b>4. </b>After transferring, please send the screenshot to the email: <span style={{color: '#E94057', fontWeight:'bold'}}>yourmail@fpt.edu.vn</span></p>
                        </div>
                    </div>
                    <div className="Bank">
                        <h3>Invoice</h3>
                        <table>
                            <tr>
                                <th>Gold</th>
                                <td>120,000 VND</td>
                            </tr>
                            <tr>
                                <th>Discount</th>
                                <td>0</td>
                            </tr>
                            <tr>
                                <th colSpan={2}><hr/></th>
                            </tr>
                            <tr>
                                <th>Total</th>
                                <td>120,000 VND</td>
                            </tr>
                        </table>
                        <h3>Transfer Contents</h3>
                        {/* <h3 className="cTrans">yourmail@fpt</h3> */}
                        {/* Tạo khung command copy dòng h3 trên */}
                        <div className="cTrans">
                            <h3>BeDating yourmail@fpt.edu.vn</h3>
                            <Button size="small" variant="contained" onClick={() => {
                                navigator.clipboard.writeText("BeDating yourmail@fpt.edu.vn");
                            }}>Copy</Button>
                        </div>
                        
                        {/* <div className="cTrans">
                            <h3>yourmail@fpt</h3>
                            <Button size="small" variant="contained">Copy</Button>
                        </div>      */}
                        
                        <img src={Bank} alt = "Bank"/>
                    </div>
                </div>
                {/* <div className="FootPage">
                    <Button variant="outlined" style={{fontWeight: 'bold', width:'10rem', margin:'1%'}}>Cancel</Button>
                    <Button variant="contained" style={{backgroundColor: '#E94057', color: 'white', fontWeight: 'bold', width:'13rem'}}>Complete payment</Button>
                </div> */}
            </div>
        </Layout>
    )
}
