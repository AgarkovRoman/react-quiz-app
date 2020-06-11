import {combineReducers} from 'redux'
import quizReducer from "./quizreducer";
import createReducer from "./createreducer"
import authReducer from "./authreducer";


export default combineReducers({
    quiz: quizReducer,
    create: createReducer,
    auth: authReducer,
})
