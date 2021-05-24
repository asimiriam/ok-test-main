import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNextStep } from '../slice';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Step1 from '../../../views/ProductInformation';
import Step2 from '../../../views/Form';
import Step3 from '../../../views/Feedback';
import { tr } from '../common/lang';

import './horizontalStepper.scss';

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return <Step1 />;
        case 1:
            return <Step2 />;
        case 2:
            return <Step3 />;
        default:
            return '';
    }
}

export default function HorizontalStepper() {
    const { disabledNext } = useSelector(store => store.nextStep);
    const { lang } = useSelector(store => store.lang);
    const { resultStep } = useSelector(store => store.nextStep);


    const [activeStep, setActiveStep] = React.useState(0);
    const steps = ['step-1', 'step-2', 'step-3'];

    const dispatch = useDispatch();

    const handleNext = () => {
        dispatch(setNextStep(false))
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        dispatch(setNextStep(true))
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className="div-stepper">
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (<Step key={label}><StepLabel /></Step>))}
            </Stepper>
            <div id="card-steps">
                <Typography>{getStepContent(activeStep)}</Typography>
                <div className="div-buttons-steps">
                    {activeStep !== 0 && (<Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        id="back-button-step"
                    >
                        {tr("Atrás", lang)}
                    </Button>)}
                    {
                        activeStep !== steps.length - 1 ? (
                            <Button
                                variant="contained"
                                onClick={handleNext}
                                id="next-button-step"
                                disabled={!disabledNext}
                            >
                                {tr("Siguiente >", lang)}
                            </Button>
                        ) : (
                            <Button
                                onClick={handleReset}
                                id="finish-button-step"
                            >
                                {resultStep}
                            </Button>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
