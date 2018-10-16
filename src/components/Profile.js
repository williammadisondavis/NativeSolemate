import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';


let Profile = (props) => {
    // { console.log('------------') }
    // { console.log(props) }
    return <ScrollView style={styles.container}>
        <View style={styles.header}></View>

        <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
        <View style={styles.nameContainer}>
        <Text style={styles.name}>{props.profile.first}  {props.profile.last}</Text>
        </View>
        <View style={styles.body}>
            <View style={styles.bodyContent}>

                <Text style={styles.info}>{props.profile.location}</Text>

                <Text style={styles.description}>{props.profile.description}</Text>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.button}>Edit Description</Text>
                </TouchableOpacity>

                <Text style={styles.goalsTitle}>Goals:</Text>
                <View style={styles.goals}>
                    {props.profile.goal1 ?
                        <Text style={styles.description}> - {props.profile.goal1}</Text>
                        :
                        <Text style={styles.description}> - {'You currently have no goals! Set them now!'} </Text>
                    }
                </View>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => { props.navigator('GoalsScreen') }}>
                    <Text style={styles.button}> Set New Goals </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainerLeave} onPress={props.signOut}>
                    <Text style={styles.button}>Sign Out</Text>
                </TouchableOpacity>
            </View>

        </View>
    </ScrollView>
};

const styles = StyleSheet.create({
    header: {
        height: 200,
        backgroundColor: "#00BFFF",
        alignContent: 'center',
    },
    //   container: {
    //       flex: 1
    //   },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 5,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 20
    },
    goals: {
        //   alignSelf: 'center',
        alignItems: 'flex-start'
    },
    nameContainer: {
        alignItems: 'center',
        backgroundColor: "#00BFFF",
        marginTop: -30
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
    },
    goalsTitle: {
        fontSize: 22,
        color: "#404040",
        fontWeight: "600",
    },
    body: {
        backgroundColor: '#FFE5CC'
    },
    bodyContent: {
        flex: .9,
        alignItems: 'center',
        padding: 30,
        width: 375

    },
    button: {
        fontWeight: '500',
        color: 'white',
    },
    name: {
        fontSize: 28,
        color: "#404040",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 180,
        borderRadius: 30,
        backgroundColor: "#FF99CC",
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
        backgroundColor: "#f44256",
    }
});

export default Profile;