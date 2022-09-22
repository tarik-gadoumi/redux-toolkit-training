import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";
export default configureStore({
  reducer: {
    //1.the name of the store again (user) (WHAT I TRY TO LOOK for when using useSelector)
    user: userReducer,
  },
});
// 2. Now we can import configureStore any where  to "reach the user info in our state on the `userSlice.initialStat`"
// and also we will be able to react action (update)

//3. So to use the store wrap  the whole app in redux provider & pass the store so any component inside that provider
// can acccess userSlice intialState as well as the actions
