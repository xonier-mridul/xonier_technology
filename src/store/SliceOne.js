import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    contactData:{
        name:"",
        country:"",
        number:"",
        email:"",
        enquiry:""
    }
}

const ContactSlice = createSlice({
    name: "contactSlice",
    initialState,
    reducers:{
        manageData(state,action){
            state.contactData = {...state.contactData, ...action.payload}
        }
    }
})

export const {manageData} = ContactSlice.actions;
export default ContactSlice.reducer