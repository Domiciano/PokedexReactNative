
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
            alignItems: 'center',
        },

        basicTextIntput: {
            width : 250,
            height : 'auto',
            borderColor:'#888',
            padding: 8,
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
            height: 100,
            width: 300,
            resizeMode: 'stretch'
        },
        //Todas las imágenes deben ir en stretch, al probarlo en iPhone, resulta que no muestra bien 
        //Cuando se le pone cover
        rowList: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
        },

        tinyImage: {
            width: 28,
            height: 28,
            opacity: 1
        },

        tinyImageSelected: {
            width: 28,
            height: 28,
            opacity: 0.3
        },
        centerText: {
            flex: 1,
            fontSize: 18,
            padding: 32,
            color: '#777'
        },
        textBold: {
            fontWeight: '500',
            color: '#000'
        },
        buttonText: {
            fontSize: 21,
            color: 'rgb(0,122,255)'
        },
        buttonTouchable: {
            padding: 16
        }

    });

export {styles}
