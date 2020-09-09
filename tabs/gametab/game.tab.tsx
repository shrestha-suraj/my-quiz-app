import React, { useState, useEffect } from 'react'
import { ImageBackground, View, Text, TouchableOpacity, Alert } from 'react-native'
import gameStyle from './game.styles'
import { Right } from 'native-base'
import Option from '../../components/option/option.component'
import { Ionicons } from '@expo/vector-icons';

type OptionsType = string[]

type gameQuestionsType = {
    question: string,
    options: OptionsType,
    answer: string
}[]

const gameQuestions: gameQuestionsType = [
    {
        question: 'How many district in Nepal?',
        options: ['78', '76', '77', '75'],
        answer: '77'
    },
    {
        question: 'Which is the largest district in Nepal?',
        options: ['Dolpa', 'Rolpa', 'Rukum', 'Surkhe'],
        answer: 'Dolpa'
    },
    {
        question: 'Which is smallest district of Nepal?',
        options: ['Bhaktapur District', 'Lalitpur District', 'Kathmandu District', 'Dhading District'],
        answer: 'Bhaktapur District'
    },
    {
        question: 'Which is the largest bridge in Nepal?',
        options: ['Ghatbesi Bridge', 'Dhading Bridge', 'Kothiyaghat Bridge', 'Surkhe Bridge'],
        answer: 'Kothiyaghat Bridge'
    },
    {
        question: 'Which is the longest waterfall of Nepal?',
        options: ['Jhor Falls', 'Hyatung Falls', 'Pokali Falls', 'Devis Falls'],
        answer: 'Hyatung Falls'
    },
    {
        question: 'Which is the only bird found in Nepal?',
        options: ['Himalayan Monal', 'Tibetan Snowcock', 'Spiny Babbler', 'Spotted owlet'],
        answer: 'Spiny Babbler'
    },
    {
        question: 'How many rivers are in Nepal?',
        options: ['5000', '4000', '3000', '6000'],
        answer: '6000'
    }, {
        question: 'Which is the deepest lake in Nepal?',
        options: ['Rara Lake', 'Phewa Lake', 'Tilicho Lake', 'She-Phoksundo Lake'],
        answer: 'She-Phoksundo Lake'
    },
    {
        question: 'How many national parks are in Nepal?',
        options: ['10', '12', '9', '11'],
        answer: '10'
    }
]


const GameTab: React.FC = () => {
    const [index, setIndex] = useState<number>(0)
    const [score, setScore] = useState<number>(0)
    const [fiftyFiftyUsed, setFiftyUsed] = useState<boolean>(false)
    const [showAnswerUsed, setShowAnswerUsed] = useState<boolean>(false)
    const [optionsStatus, setOptionStatus] = useState<boolean[]>([false, false, false, false])

    const [selectedAnswer, setSelectedAnswer] = useState<string>('')
    const [color,setColor]=useState<string>('white')

    const { question, options, answer } = gameQuestions[index]
    const correctAnswerIndex = options.findIndex((option) => option === answer)



    const triggerFiftyFifty = () => {
        setFiftyUsed(true)
        let randomIndex: number | null = null
        do {
            randomIndex = Math.floor(Math.random() * Math.floor(4))
        } while (randomIndex === correctAnswerIndex);
        const newOptionsStatus: boolean[] = optionsStatus.map(
            (value: boolean, index: number) => index === randomIndex || index === correctAnswerIndex ? false : true)
        setOptionStatus([...newOptionsStatus])
    }

    const triggerShowAnswer = () => {
        setShowAnswerUsed(true)
        setSelectedAnswer(options[correctAnswerIndex])
        setColor("green")
    }

    const optionsClicked = (optionValue: string) => {
        setSelectedAnswer(optionValue)
        setColor("gray")
     }

     const nextQuestion=()=>{
         setColor(selectedAnswer===options[correctAnswerIndex]?"green":"red")
         setOptionStatus([true,true,true,true])
         setScore(selectedAnswer===options[correctAnswerIndex]?score+1:score)
         setTimeout(()=>{
            setIndex(index+1)
            setOptionStatus([false,false,false,false])
            setSelectedAnswer("")
         },1000)
     }


    return (
        <ImageBackground style={{ ...gameStyle.gameTabContainer }}
            source={{ uri: `https://i.pinimg.com/originals/1d/7e/4d/1d7e4dfd1194a19152cfc55a77d64982.jpg` }}
        >
            <View style={{ ...gameStyle.scoreBoard }}>
                <Text style={{ color: 'white', fontSize: 30 }}>Score: </Text>
                <Text style={{ color: 'yellow', fontSize: 50 }}>{score}</Text>
                <Right>
                    <Text style={{ color: 'white', fontSize: 40 }}>{index + 1} / {gameQuestions.length}</Text>
                </Right>

            </View>
            <View style={{ ...gameStyle.questionBoard }}>
                <ImageBackground
                    style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                    source={{ uri: `https://www.uokpl.rs/fpng/f/431-4314555_background-notice-paper.png` }}
                    resizeMode="cover"
                >
                    <Text style={{ width: '75%', textAlign: 'center', fontSize: 20, fontStyle: 'italic' }}>Q: {question}</Text>
                </ImageBackground>
            </View>
            <View style={{ ...gameStyle.optionsBoard }}>

                {options.map((option: string, index: number) =>
                    <Option
                        width='40%'
                        height='40%'
                        option={option}
                        bgColor={selectedAnswer && selectedAnswer === option ? color : "white"}
                        key={index}
                        disabled={optionsStatus[index]}
                        handlePress={(value: string) => optionsClicked(value)}
                    />

                )}
                {/* <Option width='40%' height='40%' option="75" bgColor="white" textColor="red" disabled={true}/>
                <Option width='40%' height='40%' option="80" bgColor="white" textColor="red" disabled={false}/>
                <Option width='40%' height='40%' option="25" bgColor="white" textColor="red" disabled={true}/>
                <Option width='40%' height='40%' option="30" bgColor="white" textColor="red" disabled={false}/> */}
            </View>
            <View style={{ ...gameStyle.lifelineBoard }}>
                <TouchableOpacity onPress={triggerFiftyFifty} disabled={fiftyFiftyUsed}>
                    <Ionicons name="md-heart-half" size={50} color={fiftyFiftyUsed ? "black" : "#f5222d"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={triggerShowAnswer} disabled={showAnswerUsed}>
                    <Ionicons name="ios-eye" size={50} color={showAnswerUsed ? "black" : "#69c0ff"} />
                </TouchableOpacity>

            </View>
            <View style={{ ...gameStyle.quitGameBoard }}>
                <TouchableOpacity style={{
                    backgroundColor: "red",
                    width: "30%",
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: "50%",
                    borderRadius: 10
                }}>
                    <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>Quit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor: "green",
                    width: "30%",
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: "50%",
                    borderRadius: 10
                }}
                    onPress={nextQuestion}
                >
                    <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>{selectedAnswer?"Check":"Pass"}</Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    )
}

export default GameTab