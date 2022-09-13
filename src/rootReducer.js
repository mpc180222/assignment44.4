const INIT_STATE = {posts: {}, titles: []};

function rootReducer(state = INIT_STATE, action){

    switch(action.type){

        case "ADD-POST":
    
            return {titles: [...state.titles, {id: action.payload.data.id, title: action.payload.data.title,
               description: action.payload.data.description, votes: action.payload.data.votes} ], posts: {...state.posts, [action.payload.data.id]: action.payload.data}}
        case "EDIT-POST":
            let otherTitles = state.titles.filter(t=> t.id !== +action.payload.id);
            return {...state, titles: [...otherTitles, action.payload]}
        case "DELETE-POST":
            return {...state, titles: state.titles.filter(x=> x.id !== +action.payload)}
        case "LOAD-POST":

            return {...state, posts: action.payload}
            
        case "ADD-COMMENT":
            return {...state, posts: {...state.posts, comments: [...state.posts.comments, action.payload]}};
        case "DELETE-COMMENT":
            return {...state, posts: {...state.posts, comments: state.posts.comments.filter(comment=> +comment.id !== +action.payload)}};
        case "LOAD-TITLES":
            return {...state, titles: action.titles}
        case "VOTE-POST":
            return {...state, titles: state.titles.map((title)=> (title.id === action.postId) ? {...title, votes: action.payload} : title ),
            posts: {...state.posts, votes: action.payload}}


        default:
            return state;

    }
}

export default rootReducer;