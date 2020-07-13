
import {combineReducers} from 'redux'
const titleReducer = (title = '', action) => {
    if(action.type === 'TITLE_INPUT') {
        return action.payload
    }

    return title
}

const yearReducer = (year = '', action) => {
    if(action.type === 'YEAR_INPUT') {
        return action.payload
    }

    return year
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

const toggleLoadingReducer = (isLoading = false, action) => {
    if(action.type === 'IS_LOADING') {
        return action.payload
    }

    return isLoading
}

export default combineReducers({
    title: titleReducer,
    year: yearReducer,
    page: pageReducer,
    movies: moviesReducer,
    showMore: toggleMoreReducer,
    isLoading: toggleLoadingReducer
})