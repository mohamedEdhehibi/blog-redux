import { ADD_ARTICLE, ADD_DISLIKE, ADD_LIKE, ADD_TODO, DELETE_ARTICLE, DELETE_TODO, DONE_TODO, EDIT_POST, EDIT_TODO } from "../Constants/actions-types"

const initialState = {
    posts: [{
        id: 1,
        title: 'Title',
        content: 'Article Description',
        like: 0,
        dislike: 0
    }],
    todos: [{
        id: 1,
        description: 'Todo Example',
        isDone: false
    }]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return {
                posts: [...state.posts, action.payload]
            }
        case DELETE_ARTICLE:
            return {
                posts: state.posts.filter(ele => action.payload !== ele.id)
            }
        case ADD_LIKE:
            return {
                ...state,
                posts: state.posts.map((post) =>
                    post.id === action.payload
                        ? { ...post, like: post.like + 1 }
                        : post
                )
            };
        case ADD_DISLIKE:
            return {
                ...state,
                posts: state.posts.map((post) =>
                    post.id === action.payload
                        ? { ...post, dislike: post.dislike + 1 }
                        : post
                )
            }
        case ADD_TODO:
            return {
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            return {
                todos: state.todos.filter(ele => action.payload !== ele.id)
            }
        case DONE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload
                        ? { ...todo, isDone: !todo.isDone }
                        : todo
                )
            }
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload
                        ? {
                            ...todo, description: action.desc}
                        : todo
                )
            }
        case EDIT_POST:
            console.log('med');
        case EDIT_POST:
            console.log('med');
            return {
                ...state,
                posts: state.posts.map((post) => (console.log('id:'+post.id, 'post:'+action.desc),
                    post.id === action.payload.id
                    ? { ...post, title: action.payload.title ,content:action.payload.content}
                        : post
                ))
            };
        default:
            return state
    }

}
export default rootReducer

