import { createStore } from 'redux';

let reducer = (oldState, action) => {
    if (action.type === 'NEW_USER_PROFILE') {
        // console.log(action)
        return (
        {... oldState, 
            userProfile:  
               { ...oldState.userProfile,
                 first: action.data.first, 
                 last: action.data.last, 
                 description: action.data.description,  
                 location: action.data.location }
            }
        )
    } else if (action.type === 'UPDATE_GOALS') {
        // console.log(action)
        return (
            {... oldState, 
            goals: 
            
                action.newGoals
        }
        )

    } else if (action.type === 'ALL_GOALS') {
        return (
            {... oldState,
            allGoals:
                action.allGoals
        }
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
        "location": ""
    },
    "goals" : [],
    "allGoals": []
          
};

let store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store