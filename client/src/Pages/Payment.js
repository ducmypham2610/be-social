import Layout from "../Components/Layout";
import "../Assets/CSS/Pages/Payment.css"
import Bank from "../Assets/Images/Bank.jpg";
import Button from "@mui/material/Button";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React from "react";


export default function Payment() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Layout>
            <div className="Payment">
                <div className="Payment-Content">
                    <h1 className="Payment-Title">Payment</h1>
                    <p>Payment by bank transfer</p>
                </div>
                <div className="Group">
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        <h5
                        style={{
                            color: '#E94057',
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                        }}>Confirm Payment</h5>
                    </DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Hi there! We have received your payment. Please wait for the confirmation email from us. Thank you!
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} autoFocus>
                        Confirm
                    </Button>
                    </DialogActions>
                </Dialog>
                    <div className="Bank">
                        <h3>Invoice</h3>
                        <table>
                            <tr>
                                <th>Email</th>
                                <td>Email@gmail.com</td>
                            </tr>
                            <tr>
                                <th>Gold</th>
                                <td>120,000 VND</td>
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
                        <div className="cTrans">
                            <h3>BeDating </h3>
                        </div>          
                        <img src={Bank} alt = "Bank"/>
                        <Button variant="contained" onClick={handleClickOpen} style={{backgroundColor: '#E94057', color: 'white', fontWeight: 'bold', width:'13rem', marginTop:'0.6rem'}}>Complete payment</Button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
