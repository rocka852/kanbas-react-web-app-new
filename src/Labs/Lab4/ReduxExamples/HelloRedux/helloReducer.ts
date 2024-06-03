import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  message: "Hello World",
};

const helloSlice = createSlice({
  name: "hello",
  initialState,
  reducers: {},
});


//export default helloSlice.reducer
//without the above you will have bug

//export default helloReducer
//cannot find name "helloReducer"

//export default helloSlice
/*
ERROR in src/Labs/Store/index.tsx:5:5
TS2322: Type 'Slice<{ message: string; }, {}, "hello", "hello", SliceSelectors<{ message: string; }>>' is not assignable to type 'Reducer<unknown, UnknownAction, unknown>'.
  Type 'Slice<{ message: string; }, {}, "hello", "hello", SliceSelectors<{ message: string; }>>' provides no match for the signature '(state: unknown, action: UnknownAction): unknown'.
    3 | const store = configureStore({
    4 |   reducer: {
  > 5 |     helloReducer,
      |     ^^^^^^^^^^^^
    6 |   },
    7 | });
    8 | export default store
*/

export default helloSlice.reducer
//without default there will be error too