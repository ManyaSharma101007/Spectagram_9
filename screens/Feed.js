import {React} from 'react';
import {View,Text,Image, SafeAreaView,FlatList,StyleSheet,Platform,StatusBar,RFValue, SafeAreaViewBase} from 'react-native';

export default class Feed extends React.Componennt {

    constructor(props) {
        super(props);
        this.state = {
          fontsLoaded: false,
          light_theme: true,
          posts: []
        };
      }

      fetchPosts = () => {
        firebase
          .database()
          .ref("/posts/")
          .on(
            "value",
            snapshot => {
              let post = [];
              if (snapshot.val()) {
                Object.keys(snapshot.val()).forEach(function (key) {
                  stories.push({
                    key: key,
                    value: snapshot.val()[key]
                  });
                });
              }
              this.setState({ posts: posts });
              this.props.setUpdateToFalse();
            },
            function (errorObject) {
              console.log("The read failed: " + errorObject.code);
            }
          );
      };

    render() {
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image
                            source = {require("../assets/logo.png")}
                            style={styles.iconImage}
                        />
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}> Spectagram </Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <FlatList
                        keyExtractor = {this.keyExtractor}
                        data = {posts}
                        renderItems = {this.renderItems}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor :  "black"
    },
    droidSafeArea : {
        marginTop : Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle : {
        flex : 0.07,
        flexDirection : "row",
    },
    appIcon : {
        flex : 0.2,
        justifyContent : "center",
        alignItems : "center"
    },
    iconImage : {
        width :  "100%",
        height : "100%",
        resizeMode : "contain",
    },
    appTitleTextContainer : {
        flex : 0.8,
        justifyContent : "center"
    },
    appTitleText : {
        color : "white",
        fontSize : RFValue(28),
    },
    cardContainer : {
        flex : 0.85 
    },
})