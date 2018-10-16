import React from 'React';
import { Text, View, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import { CheckBox } from 'react-native-elements';
import axios from 'axios';

export default class EditGoals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: [],
            goals: []
        }

    }
    checkItem = item => {
        const { checked } = this.state;

        if (!checked.includes(item)) {
            this.setState({ checked: [...checked, item] });
        } else {
            this.setState({ checked: checked.filter(a => a !== item) });
        }
    };
    SubmitGoals = () => {


        handleInput = async () => {

            getIdAsync = async () => {
                try {
                    let userID = await AsyncStorage.getItem('id');
                    if (userID !== null) {
                        const res = await axios.post('http://localhost:3005/goals/', {
                            id: userID,
                            goals: this.state.checked
                        });
                        const data = await res.data;
                        // this.state.goals.push
                        console.log(data)
                    }


                } catch (err) {
                    console.log(err);
                }

            };

            getIdAsync();


            // if (data.jwt === undefined) {
            //   Alert.alert('Invalid Email, this one already exists. Try again')
            // } else {
            //   this.setState({id: data.jwt.id})
            //   this.setState({jwt: data.jwt.token})
            //   this._signInAsync()
            // }
        };
        handleInput()
    }

    render() {
        return (
            <View style={styles.container}>
                <CheckBox
                    title='Run 1 Mile'
                    onPress={() => this.checkItem('Run 1 Mile')}
                    checked={this.state.checked.includes('Run 1 Mile')}
                />
                <Text style={styles.goalsTitle}>Easy</Text>
                <CheckBox
                    title='Run a 5k'
                    onPress={() => this.checkItem('Run a 5k')}
                    checked={this.state.checked.includes('Run a 5k')}
                />
                <Text style={styles.goalsTitle}>Medium</Text>
                <CheckBox
                    title='Run a 10k'
                    onPress={() => this.checkItem('Run a 10k')}
                    checked={this.state.checked.includes('Run a 10k')}
                />
                <Text style={styles.goalsTitle}>Hard</Text>
                <CheckBox
                    title='Run a 15k'
                    onPress={() => this.checkItem('Run a 15k')}
                    checked={this.state.checked.includes('Run a 15k')}
                />
                <CheckBox
                    title='Half Marathon'
                    onPress={() => this.checkItem('Half Marathon')}
                    checked={this.state.checked.includes('Half Marathon')}
                />
                <CheckBox
                    title='Marathon'
                    onPress={() => this.checkItem('Marathon')}
                    checked={this.state.checked.includes('Marathon')}
                />

                <TouchableOpacity style={styles.buttonContainerLeave} onPress={() => this.SubmitGoals()}>
                    <Text style={styles.button}>Confirm Goals</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFE5CC',
        flex: 1

    },
    goalsTitle: {
        fontSize: 22,
        color: "#404040",
        fontWeight: "600",
        alignSelf: 'center'
    },
    buttonContainerLeave: {
        marginTop: 60,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 50,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#02B881",
    },
    button: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
    }
})
