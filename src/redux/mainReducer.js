const mainStateApp = {
    type: 'page load',
    news: 2
}

const mainReducer = (state = mainStateApp, action) => {
    switch(state.type) {
        case 'page load' :
            return {
                ...state, news: action.news
            }
        default : 
        return state
    }
}

export default mainReducer;













