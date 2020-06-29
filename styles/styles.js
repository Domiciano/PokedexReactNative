
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

        bottomMargin: {
            marginBottom: 24
        },

        topMargin: {
            marginTop: 48
        },

        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },

        basicTextIntput: {
            width : '65%',
            height : 'auto',
            borderColor:'#888',
            borderBottomWidth:1
        },

        row: {
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-around',
            alignItems: 'center'
        },

        squareImage:{
            margin: 20,
            width: 80,
            height: 80,
        },

        allBorders:{
            borderColor:'#333',
            borderWidth:1
        },

        signInButton: {
            width : 200,
            height : 42,
            backgroundColor: '#122199',
            borderRadius: 10,
            color: '#fff',
            textAlign: 'center',
            textAlignVertical : 'center',
            fontSize: 18,
            justifyContent: 'center',
            alignItems: 'center',
        },

        signInTextButton: {
            color: '#fff',
            fontSize: 18
        },

        icesiLogo: {
            height: 150,
            width: 300,
            resizeMode: 'center'
        },

        rowList: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
        },


        //Fragments: Navigation bar

        bottomBar: {
            flexDirection: 'row',
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: 60,
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: '#DDD',

        },

        barButton: {
            width: 40,
            height: 40,
            opacity: 0.3
        },

        barButtonSelected: {
            width: 40,
            height: 40,
            opacity: 1
        },

        //Fragments: Content
        fragmentContainer: {
            position: 'absolute',
            bottom: 60,
            top:0,
            right:0,
            left:0,
            backgroundColor: '#fff',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap'
        },

        fragment: {
            width: '100%',
            height: '100%',
        },

        fragmentContent: {
            flex: 1,
            flexDirection: 'column',
            alignItems:'center'
        }

    });

export {styles}
