import {React} from 'react';
import {View,Text,Image,ScrollView,TextInput,SafeAreaView} from 'react-native';
import {DropDownPicker} from 'react-native-dropdown-picker';
import { RFValue } from 'react-native-responsive-fontsize';
import {RFValue} from 'react-native-responsive-font-size';

export default class CreatePost extends React.Componennt {
    constructor(props){
        super(props)
        this.state={
            dropdownHeight,
            previewImage,
            light_theme : true,
        }
    }

    render() {
        return(
            <View style={this.state.light_theme ? styles.containerLight : styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image
                            source={require("../assets/logo.png")}
                            style={styles.iconImage}
                        />
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}> New Post </Text>
                    </View>
                </View>
                <View style={styles.fieldsContainer}>
                    <ScrollView>
                        <Image
                            source={preview_image[this.state.preview_image]}
                            style={styles.previewImage}
                        />  
                        <View style={{height : RFValue(this.state.dropdownHeight)}}>
                            <DropDownPicker
                                items={[
                                    {label : "Image 1", value : "image_1"},
                                    {label : "Image 2", value : "image_2"},
                                    {label : "Image 3", value : "image_3"},
                                    {label : "Image 4", value : "image_4"},
                                    {label : "Image 5", value : "image_5"},
                                    {label : "Image 6", value : "image_6"},
                                    {label : "Image 7", value : "image_7"},
                                    
                                ]}
                                defaultValue={this.state.previewImage}
                                containerStyle={{
                                    height : 40,
                                    borderRadius : 20,
                                    marginBottom : 10
                                }}
                                onOpen={() => {
                                    this.setState({dropDownHeight : 170})
                                }}
                                onClose={() => {
                                    this.setState({dropDownHeight : 40})
                                }}
                                style={{backgroundColor : "transparent"}}
                                itemStyle={{
                                    justifyContent : "flex-start"
                                }}
                                dropDownStyle={{
                                    background : "#2a2a2a"
                                }}
                                labelStyle={{
                                    color : "white"
                                }}
                                arrowStyle={{
                                    color : "white"
                                }}
                                onChangeItem={item => this.setState({previewImage : item.value})}
                            />
                        </View>
                        <TextInput
                            style={styles.inputFont}
                            onChangeText={caption => this.setState({caption})}
                            placeholder={"Caption"}
                            placeholderTextColor="white"
                        />
                    </ScrollView>
                </View>
                <View style={{flex : 0.08}}/>
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
    previewImage: {
        width: "93%",
        height: RFValue(250),
        alignSelf: "center",
        borderRadius: RFValue(10),
        marginVertical: RFValue(10),
        resizeMode: "contain"
    },
    containerLight: {
        flex: 1,
        backgroundColor: "white"
    },
})