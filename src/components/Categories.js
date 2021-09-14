import React, { Component } from 'react'

import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

const categories = ['Entertainment', 'Business', 'Politics', 'Health', 'Technology', 'Sports'];
class Categories extends Component {


    render() {
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    categories.map((category, index) => (
                        <TouchableOpacity key={index} onPress={() => {
                            this.props.navigation.navigate('GetNews', { category })
                        }}>
                            <View>
                                <Text style={{ padding: 10, borderWidth: 1, borderRadius: 10, borderColor: 'black', fontSize: 19, margin: 10 }}>{category}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }

            </ScrollView>
        )
    }
}

export default Categories;
