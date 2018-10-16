import { createStore } from 'redux';

let reducer = (oldState, action) => {
    if (action.type === 'NEW_USER_PROFILE') {
        console.log(action.data)
        return (
        {... oldState, 
            userProfile:  
               { ...oldState.userProfile,
                 first: action.data.first, 
                 last: action.data.last, 
                 description: action.data.description, 
                 goals: action.data.goals, 
                 location: action.data.location }
            }
        )
    } else if (action.type === 'ADD_GOAL') {
        // console.log(action.newGoal)
        return (
            {... oldState, 
            goals: 
            [
                 ...oldState.goals,
                action.newGoal
            
        ]}
        )

    } else {
    return oldState
    }
}

let initialState = {
    "userProfile" : {
        "first": "",
        "last": "",
        "description": "",
        "goals": "",
        "location": ""
    },
    "goals" : []
          
};

let store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store