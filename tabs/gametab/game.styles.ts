import {StyleSheet} from 'react-native'

const gameStyle=StyleSheet.create({
    gameTabContainer:{
        width:'100%',
        flex:1,
        alignItems:'center'
    },
    scoreBoard:{
        width:'90%',
        height:'10%',
        flexDirection:'row',
        alignItems:'center'
    },
    questionBoard:{
        width:'90%',
        height:'30%',
    },
    optionsBoard:{
        width:'90%',
        height:'30%',
        flexDirection:'row',
        flexWrap:"wrap",
        justifyContent:'space-evenly',
    },
    lifelineBoard:{
        width:'80%',
        height:'10%',
        backgroundColor:'#b7eb8f',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        borderRadius:30
    },
    quitGameBoard:{
        width:'90%',
        height:'20%',
        backgroundColor:'pink'
    }
})

export default gameStyle