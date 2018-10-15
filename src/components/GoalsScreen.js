import React from 'React';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class EditGoals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: []
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
    SubmitGoals = goals => {
        console.log(goals)
    }
    
    render() {
        return (
            <View style={styles.container}>
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
                <TouchableOpacity style={styles.buttonContainerLeave} onPress={() => this.SubmitGoals(this.state)}>
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
