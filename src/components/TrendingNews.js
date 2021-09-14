import React, { Component } from 'react'

import { ScrollView, View, Text, ActivityIndicator, Image, TouchableOpacity } from 'react-native';

const url = 'https://newsapi.org/v2/top-headlines?country=IN&apiKey=907b3537f0c9426499bc27332617cb7d'
class TrendingNews extends Component {


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
                {
                    this.state.news.length === 0 ? <ActivityIndicator color='black' size='large' /> :
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {
                                this.state.news.map((news, index) => (
                                    <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate('WebView', { url: news.url })} >

                                        <View style={{ margin: 10 }}>
                                            <Image source={{
                                                uri: `${news.urlToImage}`
                                            }}
                                                style={{ height: 200, width: 200, borderRadius: 10 }}
                                            />
                                            <Text style={{ textAlign: 'justify', width: 200 }}>{news.title}</Text>
                                        </View>
                                    </TouchableOpacity>

                                ))
                            }

                        </ScrollView>
                }

            </View>

        );
    }
}

export default TrendingNews;