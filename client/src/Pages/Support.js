import Layout from "../Components/Layout";
import "../Assets/CSS/Pages/Support.css"

import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Select support issue', 'Processing', 'Completed'];
const getStepContent = (step) => {
    switch (step) {
        case 0:
            return 'Select your issue type from the list below.';
        case 1:
            return 'Your request is being processed.';
        case 2:
            return 'Your request has been completed.';
        default:
            throw new Error('Unknown step');
    }
}

export default function Support() {

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
                            Your support ticket has been sent successfully, please check your email. We will respond to you within 48 hours from the time of applying. Our support will solve your problem and give you the best solution.
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
                            <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                        </React.Fragment>
                    )}
                </Box>
                <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1EQpwudUiy0F5a?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
        </Layout>
    )
}