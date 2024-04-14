import { createSlice } from '@reduxjs/toolkit';

export const resumeSlice = createSlice({
    name: 'resume',
    initialState: {
        personalInfo:{
            fname:null,
            lname:null,
            email:null,
            website:null
        },
        education:[/*{type,where,what}*/],
        work:[/*{role,where,from,to=null}*/],
        projects:[/*{title,description,link=null}*/]
    },

    /* just, dont fuck with the stupid functions in here, its working. OK?! */ 
    reducers: {

        setPersonalInfo:(state,action)=>{
            state.personalInfo.fname=action.payload.fname;
            state.personalInfo.lname=action.payload.lname;
            state.personalInfo.email=action.payload.email;
            state.personalInfo.website=action.payload.website;
        },
        

        // TODO do the fucking thing about the functions, it's not working very well! (data structure is needed)
        addEducation:(state,action)=>{
            state.education.append({...action.payload})
        },

        addWork:(state,action)=>{
            state.work.append({...action.payload})
        },

        addProject:(state,action)=>{
            state.projects.append({...action.payload})
        },

        resetAll:(state,action)=>{
            state.personalInfo.fname=null;
            state.personalInfo.lname=null;
            state.personalInfo.email=null;
            state.personalInfo.website=null;
            state.education.clear();
            state.work.clear();
        },
    }
});

// Action creators are generated for each case reducer function
export const { setPersonalInfo,addEducation,addWork,resetAll} = resumeSlice.actions;
export default resumeSlice.reducer;