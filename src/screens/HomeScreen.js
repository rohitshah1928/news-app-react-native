import React, { Component } from 'react'

import Categories from '../components/Categories'
import TrendingNews from '../components/TrendingNews'

import { Dimensions, ScrollView, Text, View, ActivityIndicator, Image, TouchableOpacity } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const url = 'https://newsapi.org/v2/top-headlines?country=IN&apiKey=907b3537f0c9426499bc27332617cb7d'

class HomeScreen extends Component {

    state = {
        news: []
    }

    componentDidMount() {
        fetch(url).then(res => res.json()).then(response => {
            this.setState({
                news: response.articles
            })

        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <View>
                <View style={{ marginTop: 10, marginBottom: 10 }}>
                    <Categories navigation={this.props.navigation} />
                </View>

                <TrendingNews navigation={this.props.navigation} />
                <View style={{ alignItems: 'center' }}>
                    {this.state.news.length === 0 ? (
                        <ActivityIndicator
                            style={{
                                height: deviceHeight,
                                width: deviceWidth,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            size="large"
                            color="black"
                        />
                    ) : (
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {this.state.news.map((news, index) =>
                                news.urlToImage ? (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() =>
                                            this.props.navigation.navigate('WebView', {
                                                url: news.url,
                                            })
                                        }>
                                        <View
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                backgroundColor: 'white',
                                                borderRadius: 10,
                                                elevation: 4,
                                                width: deviceWidth - 30,
                                                marginVertical: 7,
                                            }}>
                                            <Image
                                                source={{ uri: `${news.urlToImage}` }}
                                                style={{ height: 100, width: 100, borderRadius: 10 }}
                                            />
                                            <Text
                                                style={{
                                                    width: deviceWidth - 130,
                                                    paddingLeft: 10,
                                                    paddingTop: 5,
                                                }}>
                                                {news.title}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                ) : null,
                            )}
                        </ScrollView>
                    )}
                </View>

            </View>
        )
    }
}

export default HomeScreen
