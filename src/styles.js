import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    restImgContainer: {
        margin: 5,
        padding: 10,    
    },
    likeContainer: {
        alignContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#6d6d6d',
        width: 120,
        height: 50,
        padding: 5,
    },
    restName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#7da453',
    },
    likes: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    location: {
        color: 'gray',
        fontSize: 10,
        marginLeft: 20,

    },
    imageLike: {
        width: 25,
        height: 25,
    },
    imagePopular: {
        width: 15,
        height: 15,
        margin: 15,
        bottom : 2,
        
    },
    RestImage: {
        height: Dimensions.get("window").height / 3,
        padding: 5,
        margin: 5,
    },
    infoContainer: {
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        flexDirection: 'row',
        backgroundColor: '#212121', 
    },
    nameLoc:{
        flexDirection: 'row', 
        justifyContent:'flex-start',
        margin: 5
    }
})

export default styles