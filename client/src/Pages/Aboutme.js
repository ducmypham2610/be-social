import '../Assets/CSS/Pages/About.css';
import Layout from "../Components/Layout";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import QR from '../Assets/Images/qrcode.png';

import React from 'react';

export default function About() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return(
        <Layout>
            <div className="About">
                <div className="Group">
                    <div className="Title">
                        <h1>Preamble</h1>
                    </div>
                    <div className="Content">
                        <p>The first word on behalf of all participants in the development of the BeDating project would like to thank all the users and the application experience. During the development of the project, we encountered many difficulties to implement. We all have a common goal which is to bring the best and most wonderful user experience to our website. On behalf of the project development board, we would like to express our sincere thanks to everyone.
                        <br/> <br/>In the process of using, if you are satisfied, you can support and donate to us. For other feedback, please provide us with the bug via the BeDating Global platform with #Feedback or you can contact our developers directly. We will try to fix it as soon as possible.
                        <br/> <br/><b>Best regards</b></p>
                        <p>
                            <b style={{color:'#E94057'}}>BeDating Development Board</b> 
                            <ol style={{listStyle:'none', fontSize:'0.9rem'}}>
                                <li>Quach Cong Tuan</li>
                                <li>Pham Duc My</li>
                                <li>Nguyen Quoc Huy</li>
                                <li>Nguyen Van Manh</li>
                            </ol>
                        </p>
                        <br/>
                        <Button variant="contained" onClick={handleClickOpen} style={{background:'#E94057'}}>
                            Donate
                        </Button>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                            {"Donate for Developers"}
                            </DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <img src={QR} alt="Donate" />
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button variant="contained" onClick={handleClose} autoFocus style={{background:'#E94057'}}>
                                Thanks
                            </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </div>
            </div>
        </Layout>
    );
}