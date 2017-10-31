import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    ScrollView,
    Image,
    Text,
    View
} from 'react-native';

import Hyperlink from 'react-native-hyperlink';
import styles from './styles/Character';

class Character extends Component {
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
    }

    _onNavigatorEvent(event) {
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

                <View style={styles.itemContainer}>
                    <Image source={require('../../images/sample.png')} style={styles.image} />
                    <View style={styles.titleArea}>
                        <Text style={styles.title}>Iron Man</Text>
                    </View>
                </View>
                <View style={styles.contentArea}>
                    <View style={styles.contentContainer}>
                        <View style={styles.labelRow}>
                            <Text style={styles.label}>Description</Text>
                            <Text style={styles.value}>
                                Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.
                            </Text>
                        </View>
                        <View style={styles.labelRow}>
                            <Text style={styles.label}>Comics</Text>
                            <Text style={styles.value}>available: 2296</Text>
                        </View>
                        <View style={styles.labelRow}>
                            <Text style={styles.label}>Series</Text>
                            <Text style={styles.value}>available: 547</Text>
                        </View>
                        <View style={styles.labelRow}>
                            <Text style={styles.label}>Stories</Text>
                            <Text style={styles.value}>available: 3264</Text>
                        </View>
                        <View style={styles.labelRow}>
                            <Text style={styles.label}>Event</Text>
                            <Text style={styles.value}>available: 29</Text>
                            <Text style={styles.value}> A+X (2012) #2</Text>
                        </View>
                        <View style={styles.labelRow}>
                            <Text style={styles.label}>Other</Text>
                            <Hyperlink
                                linkStyle={styles.urlLink}
                                linkText={ url => url === 'http://marvel.com/characters/29/iron_man?utm_campaign=apiRef&utm_source=2d9316c75865efd061093c86c624011c' ? 'detail' : url }>
                                <Text style={styles.urlLinkText}> 
                                    http://marvel.com/characters/29/iron_man?utm_campaign=apiRef&utm_source=2d9316c75865efd061093c86c624011c
                                </Text>
                            </Hyperlink>
                            <Hyperlink
                                linkStyle={styles.urlLink}
                                linkText={ url => url === 'http://marvel.com/universe/Iron_Man_(Anthony_Stark)?utm_campaign=apiRef&utm_source=2d9316c75865efd061093c86c624011c' ? 'wiki' : url }>
                                <Text style={styles.urlLinkText}>
                                    http://marvel.com/universe/Iron_Man_(Anthony_Stark)?utm_campaign=apiRef&utm_source=2d9316c75865efd061093c86c624011c
                                </Text>
                            </Hyperlink>
                            <Hyperlink
                                linkStyle={styles.urlLink}
                                linkText={ url => url === 'http://marvel.com/comics/characters/1009368/iron_man?utm_campaign=apiRef&utm_source=2d9316c75865efd061093c86c624011c' ? 'comiclink' : url }>
                                <Text style={styles.urlLinkText}>
                                    http://marvel.com/comics/characters/1009368/iron_man?utm_campaign=apiRef&utm_source=2d9316c75865efd061093c86c624011c
                                </Text>
                            </Hyperlink>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

Character.propTypes = {
	character: PropTypes.object.isRequired
};

export default Character;