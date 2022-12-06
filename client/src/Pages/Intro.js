import "../Assets/CSS/Pages/Intro.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import p1 from '../Assets/Images/Intro/p1.png';
import p2 from '../Assets/Images/Intro/p2.png';
import p3 from '../Assets/Images/Intro/p3.png';
import p4 from '../Assets/Images/Intro/p4.png';
import p5 from '../Assets/Images/Intro/p5.png';
import p6 from '../Assets/Images/Intro/p6.png';
import p7 from '../Assets/Images/Intro/p7.png';
import { useNavigate } from 'react-router-dom';

const steps = ['Update Profile', 'Matches', 'Messages','Global','Podcast','Premium','Support'];
const dataSteps = [
    {
        title: 'Update Profile',
        description: 'Update your profile and get matched with other users.',
        image: p2,
    },
    {
        title: 'Matches',
        description: 'View your matches and start chatting with them.',
        image: p1,
    },
    {
        title: 'Messages',
        description: 'Send and receive messages from your matches.',
        image: p3,
    },
    {
        title: 'Global',
        description: 'View users from all over the world.',
        image: p4,
    },
    {
        title: 'Podcast',
        description: 'Listen to our podcast and learn more about dating.',
        image: p5,
    },
    {
        title: 'Premium',
        description: 'Upgrade to premium to get more features.',
        image: p6,
    },
    {
        title: 'Support',
        description: 'Contact us if you have any questions.',
        image: p7
    },
];



export default function Intro() {

    let navigate = useNavigate();
    const Finish = async () => {
        navigate('/home');
    }

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

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

        if (activeStep === steps.length - 1) {
            Finish();
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
            <div className="Intro">
                <h1>STARTED</h1>
                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
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
                        <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            {/* Show data  */}
                            <div className="IntroData">
                                <h4>{dataSteps[activeStep].title}</h4>
                                <p>{dataSteps[activeStep].description}</p>
                                <img src={dataSteps [activeStep].image} alt="image" />
                            </div>
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
                            {activeStep === steps.length-1  ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                    </React.Fragment>
                </Box>
            </div>
    );
}