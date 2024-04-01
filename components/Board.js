import { StyleSheet, Picker, Text, View, Platform, Dimensions, ScrollView } from "react-native";

export default function Board({ title, extraTitleStyles, children }) {
    return (
        <View style={ styles.container }>
          <Text style={ [styles.title, extraTitleStyles] }>{ title }</Text>
          <ScrollView>
            { children }
          </ScrollView>
        </View>
    );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const containerWidth = windowWidth * 0.9;

console.log(`Window width: ${windowWidth}`);
console.log(`Container width: ${containerWidth}`);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: containerWidth,
        // height: "90%",
        // marginBottom: 10,
        // marginHorizontal: 10,
        // columnGap: 10,
        // padding: 16,
        margin: 20,
        // borderWidth: 2,
        borderRadius: 16,
        borderColor: 'transparent',
        ...Platform.select({
            ios: {
                shadowOffset: {
                    width: 2,
                    height: 2
                },
                shadowColor: '#333',
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            }
        }),
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        padding: 20,
        textAlign: "center",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
});
