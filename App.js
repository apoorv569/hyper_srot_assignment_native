import Board from "./components/Board";
import Card from "./components/Card";
import FilterBar from "./components/FilterBar";
import Navbar from "./components/Navbar";
import { Button, StyleSheet, View, ScrollView, StatusBar, SafeAreaView, TouchableOpacity, Text, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const containerWidth = windowWidth * 0.9;

export default function App() {
    return (
        <SafeAreaView style={ styles.topContainer }>

          <StatusBar />

          <Navbar />

          <View style={{ flex: 1, borderWidth: 4, borderColor: 'white', borderRadius: 12, }}>
            <FilterBar />

            <ScrollView
              style={ styles.cardsContainer }
              contentContainerStyle={ styles.cardsContentContainer }
              horizontal={true}
              snapToInterval={containerWidth}
              pagingEnabled={true}
            >
              <Board title="Pending" extraTitleStyles={{ backgroundColor: "grey" }}>
                <Card
                  title='Foo1'
                  description='Aliquam erat volutpat. Nunc eleifend leo vitae magna. In id erat non orci commodo lobortis. Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus. Sed diam. Praesent fermentum tempor tellus. Nullam tempus. Mauris ac felis vel velit tristique imperdiet. Donec at pede'
                  person='Person1'
                  priority='Low'
                  status='Pending'
                />
                <Card
                  title='Foo2'
                  description='Aliquam erat volutpat. Nunc eleifend leo vitae magna. In id erat non orci commodo lobortis. Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus. Sed diam. Praesent fermentum tempor tellus. Nullam tempus. Mauris ac felis vel velit tristique imperdiet. Donec at pede'
                  person='Person2'
                  priority='Medium'
                  status='Pending'
                />
                <Card
                  title='Foo3'
                  description='Aliquam erat volutpat. Nunc eleifend leo vitae magna. In id erat non orci commodo lobortis. Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus. Sed diam. Praesent fermentum tempor tellus. Nullam tempus. Mauris ac felis vel velit tristique imperdiet. Donec at pede'
                  person='Person3'
                  priority='High'
                  status='Pending'
                />
              </Board>
              <Board title="In Progress" extraTitleStyles={{ backgroundColor: "goldenrod" }}>
                <Card
                  title='Foo1'
                  description='Aliquam erat volutpat. Nunc eleifend leo vitae magna. In id erat non orci commodo lobortis. Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus. Sed diam. Praesent fermentum tempor tellus. Nullam tempus. Mauris ac felis vel velit tristique imperdiet. Donec at pede'
                  person='Person1'
                  priority='Low'
                  status='Pending'
                />
                <Card
                  title='Foo2'
                  description='Aliquam erat volutpat. Nunc eleifend leo vitae magna. In id erat non orci commodo lobortis. Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus. Sed diam. Praesent fermentum tempor tellus. Nullam tempus. Mauris ac felis vel velit tristique imperdiet. Donec at pede'
                  person='Person2'
                  priority='Medium'
                  status='Pending'
                />
                <Card
                  title='Foo3'
                  description='Aliquam erat volutpat. Nunc eleifend leo vitae magna. In id erat non orci commodo lobortis. Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus. Sed diam. Praesent fermentum tempor tellus. Nullam tempus. Mauris ac felis vel velit tristique imperdiet. Donec at pede'
                  person='Person3'
                  priority='High'
                  status='Pending'
                />
              </Board>
              <Board title="Completed" extraTitleStyles={{ backgroundColor: "green" }}>
                <Card
                  title='Foo1'
                  description='Aliquam erat volutpat. Nunc eleifend leo vitae magna. In id erat non orci commodo lobortis. Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus. Sed diam. Praesent fermentum tempor tellus. Nullam tempus. Mauris ac felis vel velit tristique imperdiet. Donec at pede'
                  person='Person1'
                  priority='Low'
                  status='Pending'
                />
                <Card
                  title='Foo2'
                  description='Aliquam erat volutpat. Nunc eleifend leo vitae magna. In id erat non orci commodo lobortis. Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus. Sed diam. Praesent fermentum tempor tellus. Nullam tempus. Mauris ac felis vel velit tristique imperdiet. Donec at pede'
                  person='Person2'
                  priority='Medium'
                  status='Pending'
                />
                <Card
                  title='Foo3'
                  description='Aliquam erat volutpat. Nunc eleifend leo vitae magna. In id erat non orci commodo lobortis. Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus. Sed diam. Praesent fermentum tempor tellus. Nullam tempus. Mauris ac felis vel velit tristique imperdiet. Donec at pede'
                  person='Person3'
                  priority='High'
                  status='Pending'
                />
              </Board>
              <Board title="Deployed" extraTitleStyles={{ backgroundColor: "purple" }}>
                <Card
                  title='Foo1'
                  description='Aliquam erat volutpat. Nunc eleifend leo vitae magna. In id erat non orci commodo lobortis. Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus. Sed diam. Praesent fermentum tempor tellus. Nullam tempus. Mauris ac felis vel velit tristique imperdiet. Donec at pede'
                  person='Person1'
                  priority='Low'
                  status='Pending'
                />
                <Card
                  title='Foo2'
                  description='Aliquam erat volutpat. Nunc eleifend leo vitae magna. In id erat non orci commodo lobortis. Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus. Sed diam. Praesent fermentum tempor tellus. Nullam tempus. Mauris ac felis vel velit tristique imperdiet. Donec at pede'
                  person='Person2'
                  priority='Medium'
                  status='Pending'
                />
                <Card
                  title='Foo3'
                  description='Aliquam erat volutpat. Nunc eleifend leo vitae magna. In id erat non orci commodo lobortis. Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus. Sed diam. Praesent fermentum tempor tellus. Nullam tempus. Mauris ac felis vel velit tristique imperdiet. Donec at pede'
                  person='Person3'
                  priority='High'
                  status='Pending'
                />
              </Board>
              <Board title="Deffered" extraTitleStyles={{ backgroundColor: "lightcoral" }}>
                <Card
                  title='Foo1'
                  description='Aliquam erat volutpat. Nunc eleifend leo vitae magna. In id erat non orci commodo lobortis. Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus. Sed diam. Praesent fermentum tempor tellus. Nullam tempus. Mauris ac felis vel velit tristique imperdiet. Donec at pede'
                  person='Person1'
                  priority='Low'
                  status='Pending'
                />
                <Card
                  title='Foo2'
                  description='Aliquam erat volutpat. Nunc eleifend leo vitae magna. In id erat non orci commodo lobortis. Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus. Sed diam. Praesent fermentum tempor tellus. Nullam tempus. Mauris ac felis vel velit tristique imperdiet. Donec at pede'
                  person='Person2'
                  priority='Medium'
                  status='Pending'
                />
                <Card
                  title='Foo3'
                  description='Aliquam erat volutpat. Nunc eleifend leo vitae magna. In id erat non orci commodo lobortis. Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus. Sed diam. Praesent fermentum tempor tellus. Nullam tempus. Mauris ac felis vel velit tristique imperdiet. Donec at pede'
                  person='Person3'
                  priority='High'
                  status='Pending'
                />
              </Board>
            </ScrollView>

            <View style={ styles.buttonTopContainer }>
              {/* <Button title="Add New Task" /> */}
              <TouchableOpacity style={ styles.buttonContainer }>
                <Text style={ styles.button }>Add New Task</Text>
              </TouchableOpacity>
            </View>

          </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    topContainer: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // padding: 20,
        // backgroundColor: 'teal'
        backgroundColor: 'lightblue'
    },
    cardsContainer: {
        flex: 1,
        // flexGrow: 1,
        // flexDirection: 'row',
        // minWidth: '100%',
        backgroundColor: 'lightblue'
    },
    cardsContentContainer: {
        padding: 5,
        // justifyContent: 'center',
        // flexGrow: 1,
        alignItems: 'center',
    },
    buttonTopContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 30,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        paddingVertical: 20,
        backgroundColor: 'blue',
        width: '70%',
        // height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    button: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
