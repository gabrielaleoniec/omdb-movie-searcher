
import {combineReducers} from 'redux'
const titleReducer = (title = '', action) => {
    if(action.type === 'TITLE_INPUT') {
        return action.payload
    }

    return title
}

const pageReducer = (page = 1, action) => {
    if(action.type === 'PAGE_INPUT') {
        return action.payload
    }

    return page
}

const moviesReducer = (movies = [], action) => {
    if(action.type === 'LIST_MOVIES') {
        return action.payload
    }

    return movies
}

export default combineReducers({
    title: titleReducer,
    page: pageReducer,
    movies: moviesReducer
})