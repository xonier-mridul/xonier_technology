import { createSlice } from "@reduxjs/toolkit";

const initialState= {
     email:""
}


const FooterMailSlice = createSlice({
    name: "footerMail",
    initialState,
    reducers:{
        footerMail:(state,action)=>{
            state = action.payload
        }
    }

})

export const {footerMail} = FooterMailSlice.reducer

export default FooterMailSlice.actions