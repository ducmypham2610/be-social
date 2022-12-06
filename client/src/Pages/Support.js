import Layout from "../Components/Layout";
import "../Assets/CSS/Pages/Support.css"

import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import FormControl from '@mui/material/FormControl';

export default function Support() {

const steps = ['Select support issue', 'Processing', 'Completed'];
const getStepContent = (step) => {
    switch (step) {
        case 0:
            return(
                <div className="SupportForm">
                    <div className="SupportFormHeader">
                        <h1>Support Form</h1>
                        <p>Let us know about the problem you are facing, and even if you need us for emotional advice we will support you as much as we can. You can read our policy details to get the right support for your goals at <a href="/policy"><b>Policy</b></a></p>
                    </div>
                    <FormControl fullWidth sx={{ m: 4 }}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 3, width: '25%' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                            <TextField
                                required
                                id="outlined-required"
                                label="First Name"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Last Name"
                            />
                            <TextField id="outlined-basic" label="Email" variant="outlined" />
                            <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
                            <TextField id="outlined-basic" label="Subject" variant="outlined" />
                            <TextField id="outlined-basic" label="Message" variant="outlined" />

                        </Box>
                            <p>We will receive your information at the time you fill out this support form, we promise that all your information will be kept confidential and confidential. Please provide us with your exact email, and we will respond to the results in your email.
                            To keep the information confidential, when sending support information on sensitive issues, you can use your email.</p>
                            <Button sx={{width:'15rem', background:'#E94057'}} variant="contained">Submit</Button>
                    </FormControl>
                </div>
            );
        case 1:
            return(
                <div className="SupportForm">
                    <div className="SupportFormHeader">
                        <h1>Processing</h1>
                        <p>Your support application is being processed by us, and we will respond to you via the email you provided. Please enter the OTP to verify that your email is valid (If available).;</p>
                        <p>We have sent you an OTP to your email, please enter the OTP to verify your email.</p>
                    </div>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <Box component="form" sx={{ '& .MuiTextField-root': { m: 2, width: '25%' }, }} noValidate autoComplete="off">
                            <TextField type='text' length='6' id="outlined-basic" label="OTP" variant="outlined" />
                        </Box>
                        <Button sx={{width:'15rem', background:'#E94057'}} variant="contained">Submit</Button>
                    </FormControl>
                </div>
            );
        case 2:
            return(
                <div className="SupportComplete">
                    <h1>Please check your email</h1>
                    <p>We have responded via your email. Please respond to us shortly. If we do not receive a response from you within 72 hours we will close this support.</p>
                    <h3>Thank you!</h3>
                </div>
            );
        default:
            throw new Error('Unknown step');
    }
}

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Layout>
            <div className="Support">
                <div className="SupportHeader">
                    <h3>SUPPORT</h3>
                </div>
                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {
                            
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                        })}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1 }}>
                            <div className="SupportComplete">
                                <h1>Support completion notification</h1>
                                <p>Your support ticket has been successfully implemented by us. Your request has been resolved through the email you provided. With this issue, we would like to acknowledge and store your feedback.
                                After the response time to your email, we have finished supporting you. For the support process if you are still not satisfied with the results, please resubmit the support request form to us and respond with the Subject "BeDating Support Priority" we will respond to your feedback within 24 hours and there will be the most suitable solutions.
                                The BeDating Board of Directors sincerely thanks you and always looks forward to your support and development of the application in the future.</p>
                                <h3>Thank you!</h3>
                            </div>
                            </Typography>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            {getStepContent(activeStep)}
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                            >
                            Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleNext} sx={{color:'#E94057'}}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                        </React.Fragment>
                    )}
                </Box>
            </div>
        </Layout>
    )
}