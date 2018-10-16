import axios from 'axios';
import { AsyncStorage } from 'react-native';

let getProfile = async (dispatch) => {
    const id = await AsyncStorage.getItem('id')
    const res = await axios.get(`http://localhost:3005/users/${id}`)
    const data = res.data;
    if (data !== null) {
        dispatch({type: 'NEW_USER_PROFILE', data: data})
    } else {
        return console.log('error')
    }
}

export default getProfile;