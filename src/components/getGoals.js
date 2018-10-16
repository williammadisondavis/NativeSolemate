import axios from 'axios';
import { AsyncStorage } from 'react-native';

getGoals = async (dispatch) => {
    const id = await AsyncStorage.getItem('id')
    const res = await axios.get(`http://localhost:3005/goals/${id}`)
    const data = await res.data
    
    dispatch({type: 'UPDATE_GOALS', newGoals: data.goals})
    
}

export default getGoals;