import axios from 'axios';

getGoals = async (dispatch) => {
    const res = await axios.get(`http://localhost:3005/allGoals/`)
    const data = await res.data
    
    dispatch({type: 'ALL_GOALS', allGoals: data.allGoals})
    
}

export default getGoals;