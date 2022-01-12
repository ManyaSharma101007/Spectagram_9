import React from 'react';
import {ActivityIndicator,View} from 'react-native';

export default class LoadingScreen extends React.Component {

    componentDidMount(){
        this.checkIfLoggedIn()
    }

    checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged((user) =>{
            if(user){
                this.props.navigation.navigate("DashboardScreen")
            }
            else{
                this.props.navigation.navigate("LogimScreen")
            }
        })
    }

    render(){
        return(
            <View style={{flex : 1, justifyContent : "center", alignItems : "center"}}>
                <ActivityIndicator size="large" />
            </View>
        )
    }
}