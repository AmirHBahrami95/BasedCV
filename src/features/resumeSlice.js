import { createSlice } from '@reduxjs/toolkit';

export const resumeSlice = createSlice({
    name: 'resume',
    initialState: {
        personalInfo:{
            fname:null,
            lname:null,
            birthDate:null,
            email:null,
            website:null
        },
        educations:null,/*[{type,where,what}, ]*/
        work:null,/*[{role,where,from,to=null}, ]*/
        projects:null/*[{title,description,link=null}, ]*/
    },

    /* just, dont fuck with the stupid functions in here, its working. OK?! */ 
    reducers: {

        setPersonalInfo:(state,action)=>{
            state.personalInfo.fname=action.payload.fname;
            state.personalInfo.lname=action.payload.lname;
            state.personalInfo.birthDate=action.payload.birthDate;
            state.personalInfo.email=action.payload.email;
            state.personalInfo.website=action.payload.website;
        },

        // TODO do the fucking thing about the functions, it's not working very well! (data structure is needed)
        setEducations:(state,action)=>{
            // console.log(JSON.stringify(action.payload,' ',2));
            state.educations={...Object.values(action.payload)}
        },

        setWorks:(state,action)=>{
            state.work=action.payload;
        },

        addProject:(state,action)=>{
            state.projects=action.payload; // should be an array
        },

        resetAll:(state,action)=>{
            state.personalInfo.fname=null;
            state.personalInfo.lname=null;
            state.personalInfo.email=null;
            state.personalInfo.website=null;
            state.education=null;
            state.work=null;
        },
    }
});

// Action creators are generated for each case reducer function
export const { setPersonalInfo,setEducations,addWork,resetAll} = resumeSlice.actions;
export default resumeSlice.reducer;