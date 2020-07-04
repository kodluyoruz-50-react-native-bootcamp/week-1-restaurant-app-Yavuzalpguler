import React from 'react'
import { SafeAreaView, StyleSheet, View, Text, Dimensions, Image } from 'react-native'
import styles from './styles'

const RestaurantItem = (props) => {
    return (
        <SafeAreaView style={{ flex: 1}}>
            <View style = {{flex: 1, backgroundColor:'red'}}>

                <View style={{ flex: 1 , backgroundColor: '#000'}}>
                    <View style={styles.restImgContainer, { flex: 1 }}>

                        <Image source={{ uri: props.data.image, }} style={styles.RestImage} />

                    </View>

                    
                    <View style={styles.infoContainer }>

                        <View style={styles.nameLoc}>

                            <View>

                            <Text style={styles.restName}>{props.data.name}</Text>
                            <Text style={styles.location}>{props.data.location}</Text>

                            </View>

                        </View>
        
                        <View style={styles.likeContainer}>

                            <Image style={styles.imageLike} source={require('./asset/like.png')} />
                            <Text style={styles.likes}>{props.data.likes}</Text> 
                            {props.data.isPopular && 
                            <Image style={styles.imagePopular} source={require('./asset/popular.png')} />}

                        </View>

                    </View>

                    



                </View>
            </View>
        </SafeAreaView>
    )
}



export default RestaurantItem;