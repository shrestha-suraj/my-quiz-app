import React from 'react'
import {View,ImageBackground} from 'react-native'
import homeStyle from './home.styles'
import Header from '../../components/header/header.component'
import NewGameButton from '../../components/new-game-button/new-game-button.component'
import Leaderboard from '../../components/leaderboard/leaderboard.component'

interface HomeTapType{
    navigation:any
}

const HomeTab:React.FC<HomeTapType>=({navigation})=>{
    return(
        <View style={homeStyle.homeTab}>
            <ImageBackground
                style={{width:'100%',flex:1}}
                source={{uri:`https://i.pinimg.com/originals/1d/7e/4d/1d7e4dfd1194a19152cfc55a77d64982.jpg`}}
            >
            <View style={{...homeStyle.centerFlex,...homeStyle.newGameContainer}}>
                <NewGameButton navigation={navigation}/>
            </View>
            <View style={{...homeStyle.centerFlex,...homeStyle.leaderBoardContainer}}>
                <Leaderboard/>
            </View>

            </ImageBackground>
            
        </View>
        
    )
}

export default HomeTab