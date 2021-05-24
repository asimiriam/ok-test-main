import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    disabledNext: false,
    password: null,
    repassword: null,
    question: null,
    resultStep: null,
};

const nextStepSlice = createSlice({
    name: 'nextStep',
    initialState,
    reducers: {
        setNextStep(state, action) { state.disabledNext = action.payload; },
        setPassword(state, action) {
            //const { password, repassword, question } = action.payload;
            state.password = action.payload.password;
            state.repassword = action.payload.repassword;
            state.question = action.payload.question;
        },
        setResultStep(state, action) { state.resultStep = action.payload; },
    },
});

export const {
    setNextStep,
    setPassword,
    setResultStep,
} = nextStepSlice.actions;

export default nextStepSlice;
