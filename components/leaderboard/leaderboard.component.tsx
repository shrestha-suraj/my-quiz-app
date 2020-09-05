import React from 'react'
import {View,FlatList} from 'react-native'
import {Card,CardItem,Right,Body,Text} from 'native-base'
import leaderboardStyles from './leaderboard.styles'

type WinnerType={
    name:string,
    score:number
}

type WinnersType=WinnerType[]

const Leaderboard:React.FC=()=>{

    const winners:WinnersType=[{
            name:"Suraj",
            score:100  
        },{
            name:"Ramesh",
            score:98
        },{
            name:"Kalyan",
            score:95
        },{
            name:"Dhamala",
            score:85
        },{
            name:"Kamala",
            score:82
        },{
            name:"Ashish",
            score:79
        },{
            name:"Sushant",
            score:75
        },{
            name:"Ranvir",
            score:50
        },{
            name:"Kush",
            score:48
        },{
            name:"Karey",
            score:45
        },{
            name:"Sushant1",
            score:75
        },{
            name:"Ranvir2",
            score:50
        },{
            name:"Kush3",
            score:48
        },{
            name:"Karey4",
            score:45
        }
    ]


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
                keyExtractor={item=>item.name}
                style={{width:'90%'}}
                />
        </Card>
    )
}

export default Leaderboard