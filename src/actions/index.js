export const titleInput = title => {
    return {
        type: 'TITLE_INPUT',
        payload: title
    }
}

export const pageInput = page => {
    return {
        type: 'PAGE_INPUT',
        payload: page
    }
}

export const listMovies = movies => {
    return {
        type: 'LIST_MOVIES',
        payload: movies
    }
}
