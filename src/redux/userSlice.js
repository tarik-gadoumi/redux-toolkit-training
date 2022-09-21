import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  //this will be the store name [ for exmple inside  the store we will have store:{user,posts,setting etc..}]
  name: "user",
  //here will be my initial state
  initialState: {
    userInfo: { name: "tarik", email: "tarik.gadoumi@laplateforme.io" },
    pending: false,
    error: false,
  },
  reducers: {
    // will include our actions [each  action takes the state as param & action]
    /////////////
    // update: (state, action) => {
    //   console.log(action);
    //   state.name = action.payload.name;
    //   state.email = action.payload.email;
    //   // here is an  amazing thing  about redux, if for example we are updating only the name ,
    //   // componenents that consume the email WONT RE-RENDER, and that so coool
    // },
    // remove: (state) => {
    //   state.name = "";
    //   state.email = "";
    // },
    // addHello: (state, action) => {
    //   state.name = "Hello " + action.payload.name;
    // },
    //////////////
    updateStart: (state) => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    updateError: (state) => {
      state.error = true;
      state.pending = false;
    },
  },
});
// now we will export our "actions"
// notice the "actions" method on the userSlice object will  go and grab our action inside the reducers:{}
// why we export  our action ?
// because  once i click update button
//i wan't to trigger the change on my reducer
////////
//export const { update, remove, addHello } = userSlice.actions;
//////
export const { updateStart, updateSuccess, updateError } = userSlice.actions;
// now  next step exporting our reducer  bcause we will be using it in our "store"
export default userSlice.reducer;