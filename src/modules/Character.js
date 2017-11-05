// @flow
import React from 'react';
import PropTypes from 'prop-types';
import {
    ScrollView,
    Image,
    Text,
    View
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Hyperlink from 'react-native-hyperlink';
import styles from './styles/Character';

type Props = {
    character: Object,
    navigator: Object
}

class Character extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
    }

    _onNavigatorEvent(event: Object) {
        if(event.type === 'NavBarButtonPress') {
            if(event.id === 'close') {
                this.props.navigator.dismissModal();
            }
        }
    }

    render() {
        const { character } = this.props;
        return (
            <ScrollView
                style={styles.container}>
                <View>
                    <Image source={require('../../images/backcover.png')} style={styles.backImage} />
                    <LinearGradient colors={['rgba(0, 0, 0, 0.5)', 'rgba(0,0,0, 0.7)', 'rgba(0,0,0, 0.8)']} style={styles.linearGradient} />
                    <View style={styles.itemContainer}>
                        <Image source={{uri: `${character.thumbnail.path}.${character.thumbnail.extension}`}} style={styles.image} />
                        <View style={styles.titleArea}>
                            <Text style={styles.title}>{character.name}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.contentArea}>
                    <View style={styles.contentContainer}>
                        <View style={styles.labelColumn}>
                            <Text style={styles.label}>Description</Text>
                            <Text style={styles.description}>
                                {character.description}
                            </Text>
                        </View>
                        <View style={styles.labelColumn}>
                            <Text style={styles.label}>Comics</Text>
                            <Text style={styles.available}>[available: {character.comics.available}]</Text>
                        </View>
                        <View style={styles.labelColumn}>
                            {character.comics.items.map(item => (
                                <Text key={item.resourceURI} style={styles.comicsList}>・{item.name}</Text>
                            ))}
                        </View>
                        <View style={styles.labelColumn}>
                            <Text style={styles.label}>Series</Text>
                            <Text style={styles.available}>[available: {character.series.available}]</Text>
                        </View>
                        <View style={styles.labelColumn}>
                            {character.series.items.map(item => (
                                <Text key={item.resourceURI} style={styles.seriesList}>・{item.name}</Text>
                            ))}
                        </View>
                        <View style={styles.labelColumn}>
                            <Text style={styles.label}>Stories</Text>
                            <Text style={styles.available}>[available: {character.stories.available}]</Text>
                        </View>
                        <View style={styles.labelColumn}>
                            {character.stories.items.map(item => (
                                <Text key={item.resourceURI} style={styles.storiesList}>・{item.name}</Text>
                            ))}
                        </View>
                        <View style={styles.labelColumn}>
                            <Text style={styles.label}>Event</Text>
                            <Text style={styles.available}>[available: {character.events.available}]</Text>
                        </View>
                        <View style={styles.labelColumn}>
                            {character.events.items.map(item => (
                                <Text key={item.resourceURI} style={styles.eventsList}>・{item.name}</Text>
                            ))}
                        </View>
                        <View style={styles.labelColumn}>
                            <Text style={styles.label}>Other</Text>
                            {character.urls.map(item => (
                                <Hyperlink
                                    key={item.type}
                                    linkStyle={styles.urlLink}
                                    linkText={ url => url === item.url ? item.type : url }>
                                    <Text style={styles.urlLinkText}> 
                                        link to {item.url}
                                    </Text>
                                </Hyperlink>
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default Character;