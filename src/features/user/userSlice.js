import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: sessionStorage.getItem('username') || '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateName(state, action) {
            state.username = action.payload
            sessionStorage.setItem('username', action.payload)
        },
    },
})

export const { updateName } = userSlice.actions
export default userSlice.reducer
