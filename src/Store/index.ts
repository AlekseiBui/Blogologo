import { configureStore, Action } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { FavPostReducer } from './FavPosts/Reducer'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { PostsReducer } from './Posts/Reducert'

const rootReducer = combineReducers({
    favPosts: FavPostReducer,
    allPosts: PostsReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunkMiddleware)
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>