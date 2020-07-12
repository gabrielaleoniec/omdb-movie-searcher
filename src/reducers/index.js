
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

const toggleMoreReducer = (showMore = false, action) => {
    if(action.type === 'SHOW_MORE') {
        return action.payload
    }

    return showMore
}

export default combineReducers({
    title: titleReducer,
    page: pageReducer,
    movies: moviesReducer,
    showMore: toggleMoreReducer
})