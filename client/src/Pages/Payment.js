import Layout from "../Components/Layout";
import "../Assets/CSS/Pages/Payment.css";
import Bank from "../Assets/Images/Bank.jpg";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getUser } from "../services/userService";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function Payment() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("UserId");
  const [user, setUser] = useState(null);
  const [premium, setPremium] = useState(null);
  const premiumId = useParams().id;

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (userId) {
      getUser(userId)
        .then((res) => {
          setUser(res.data.user);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const getPremium = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8000/types/${id}`);
      setPremium(response.data.type);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPremium(premiumId);
  }, [premiumId]);

  const handlePayment = async (userId,typeId) => {
    try {
      const response = await axios.post('http://localhost:8000/orders',{userId,typeId});
      console.log(response);
      toast.success('We have received your order! Please wait for our processing!')
    } catch(err) {
      console.log(err);
    } finally {
      handleClose();
    }
  }

  return (
    <Layout>
      <div className="Payment">
        <div className="Payment-Content">
          <h1 className="Payment-Title">Payment</h1>
          <p>Payment by bank transfer</p>
        </div>
        <div className="Group">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              <p
                style={{
                  color: "#E94057",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                Confirm Payment
              </p>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Hi there! Please confirm your payment by clicking confirm button, otherwise click cancel!
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={() => handlePayment(user?._id,premium?._id)} autoFocus>
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
          <div className="Bank">
            <h3>Invoice</h3>
            <table>
              <tr>
                <th>Email</th>
                <td>{user?.email}</td>
              </tr>
              <tr>
                <th>{premium?.name}</th>
                <td>{premium?.price}</td>
              </tr>
              <tr>
                <th colSpan={2}>
                  <hr />
                </th>
              </tr>
              <tr>
                <th>Total</th>
                <td>{premium?.price}</td>
              </tr>
            </table>
            <h3>Transfer Contents</h3>
            <div className="cTrans">
              <h3>BeDating {user?.email}</h3>
            </div>
            <img src={Bank} alt="Bank" />
            <Button
              variant="contained"
              onClick={() => {navigate('/premium')}}
              style={{
                backgroundColor: "#E94057",
                color: "white",
                fontWeight: "bold",
                width: "13rem",
                marginTop: "0.6rem",
              }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={handleClickOpen}
              style={{
                backgroundColor: "#E94057",
                color: "white",
                fontWeight: "bold",
                width: "13rem",
                marginTop: "0.6rem",
              }}
            >
              Complete payment
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
