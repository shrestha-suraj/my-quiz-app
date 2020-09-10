import React, { useState, useEffect } from 'react'
import { Text, View, ImageBackground, TextInput, Button } from 'react-native'
import scoreStyle from './score.styles'
import AsyncStorage from '@react-native-community/async-storage'


type WinnerType = {
    name: string,
    score: number
}

type WinnersType = WinnerType[]


interface ScoreTabType{
    navigation:any
}

const ScoreTab: React.FC<ScoreTabType> = ({navigation}) => {

    const [score, setScore] = useState<number>(0)
    const [leaderBoardData, setLeaderBoardData] = useState<WinnersType>([])
    const [madeToLeaderboard, setMadeToLeaderboard] = useState<boolean>(false)
    const [name, setName] = useState<string>('')

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        let fullScore = 0;
        try {
            const score = await AsyncStorage.getItem('score')
            if (score) {
                fullScore = parseInt(score)
                setScore(fullScore)
            }

            const leaderBoard = await AsyncStorage.getItem('topTenNames')
            if (leaderBoard) {
                setLeaderBoardData(JSON.parse(leaderBoard))
            }

        } catch (error) {
        }

        setMadeToLeaderboard(leaderBoardData.length < 10 ? true : leaderBoardData[leaderBoardData.length - 1].score < fullScore ? true : false)
    }

    const saveScoreToLeaderboard=async()=>{
        const leaderBoardDataTemp=leaderBoardData
        const rank=leaderBoardDataTemp.findIndex((player)=>player.score<score)
        if(leaderBoardDataTemp.length===10){
            leaderBoardDataTemp.pop()
        }
        const value:WinnerType={
            name:name,
            score:score
        }
        leaderBoardDataTemp.splice(rank,0,value) 
        console.log(leaderBoardDataTemp)
        try{
            await AsyncStorage.setItem("topTennames",JSON.stringify(leaderBoardDataTemp))
        }catch(error){

        }
        return navigation.navigate("hometab")

    }

    return (
        <ImageBackground style={scoreStyle.scoreTab}
            source={{ uri: `https://i.pinimg.com/originals/1d/7e/4d/1d7e4dfd1194a19152cfc55a77d64982.jpg` }}
        >
            <View style={{ width: '100%', height: '35%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 120 }}>{score}</Text>
                <Text style={{ color: 'white', fontSize: 50 }}>You Scored</Text>
            </View>
            <View style={{ width: '100%', height: '65%', backgroundColor: 'red', alignItems: 'center', justifyContent: "space-evenly" }}>
                <Text style={{ fontSize: 50, color: "white" }}>{madeToLeaderboard ? "Congratuation" : "Sorry"}</Text>
                {madeToLeaderboard ?
                    <TextInput
                        placeholder="Enter your name for leaderboard"
                        style={{ width: '80%', borderWidth: 1, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 10, backgroundColor: 'white', margin: 10,fontSize:20}}
                        value={name}
                        onChangeText={(text:string) => setName(text)}
                    /> : <Text style={{fontSize:30,color:'white',width:'80%',textAlign:'center'}}>You did not make to leaderboard.</Text>}

                {madeToLeaderboard ?
                    <Button title="Save to Leaderboard" onPress={saveScoreToLeaderboard} /> :
                    <Button title="Play Again" onPress={() => navigation.navigate("gametab")} />}

                {!madeToLeaderboard && <Button title="Go To Home" onPress={()=>navigation.navigate("hometab")}/>}
                
            </View>

        </ImageBackground>

    )
}

export default ScoreTab