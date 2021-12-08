import {React} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionincons';
import Feed from  '../screens/Feed';
import CreatePost from '../screens/CreatePost';
import { render } from 'react-dom';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
        return (
           <Tab.Navigator
               screenOptions={({route}) => ({
                   tabBarIcon : ({focused, color, size}) => {
                       let iconName;
                       if(route.name === 'Feed') {
                           iconName = focused
                            ? 'book'
                            : 'book-outline';
                       }
                       else if( route.name === 'CreatePost') {
                           iconName = focused 
                            ? 'create'
                            : 'create-outline';
                       }
                       return <Ionicons name={iconName} size={size} color={color} />
                   },
               })}
               tabBarOptions={{
                   activeTintColor : 'tomato',
                   inactiveTintColor : 'gray',
               }}
            >   
                <Tab.Screen name="Feed" componnet ={Feed} />
                <Tab.Screen name="CreatePost" component={CreatePost} />

           </Tab.Navigator>
        );  
}

export default BottomTabNavigator;