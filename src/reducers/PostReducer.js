const postReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
        return [{
            id: (state.length === 0) ? 0 : state[0].id + 1,
            title: action.title,
            content: action.content
        }, ...state];

        default: 
            return state;
    }
}

export default postReducer;
