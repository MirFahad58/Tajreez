import { Dimensions } from 'react-native'

const { width } = Dimensions.get('screen')

export const styles = {
    drawer : {
        backgroundColor : '#323232',
        drawerWidth: width * 0.8
    }
}