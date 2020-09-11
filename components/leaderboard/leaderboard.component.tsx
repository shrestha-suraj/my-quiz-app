import React,{useState,useEffect} from 'react'
import {View,FlatList} from 'react-native'
import {Card,CardItem,Right,Body,Text} from 'native-base'
import leaderboardStyles from './leaderboard.styles'
import AsyncStorage from '@react-native-community/async-storage';

type WinnerType={
    name:string,
    score:number
}

type WinnersType=WinnerType[]

const Leaderboard:React.FC=()=>{

    const [winners,setWinners]=useState<WinnersType>([])


    useEffect(()=>{
        getPlayers()
    })

    const getPlayers=async()=>{
        try{
            const players=await AsyncStorage.getItem('topTenNames')
            if(players){
                setWinners(JSON.parse(players))
            }

        }catch(error){
            console.log(error)
        }
    }
    const eachCard=({item})=>(<Card style={{width:'95%',borderWidth:2,borderColor:'red'}}>
                                            <CardItem style={{width:'100%'}}>
                                                    <Text>{item.name}</Text>
                                                    <Right><Text>{item.score} / 100</Text></Right>
                                            </CardItem>
                                        </Card>)
    
    
    return(
        <Card style={{...leaderboardStyles.leaderboardContainer}}>
            <View style={{...leaderboardStyles.boardTextView}}>
                <Text style={{...leaderboardStyles.leaderboardText}}>Leaderboard</Text>
            </View>
            <FlatList
                data={winners}
                renderItem={eachCard}
                keyExtractor={(item,index)=>index.toString()}
                style={{width:'90%'}}
                />
        </Card>
    )
}

export default Leaderboard