import React, { Component } from 'react';
import { 
  Image, 
  Text, 
  View
} from 'react-native';

import styles from './styles/Company';

export default class Company extends Component {
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
        const { company } = this.props;
        return (
            <View>
                <Image source={require('../../images/coffee.png')} style={styles.image} />
                    <Text style={styles.cardText} numberOfLines={3}>
                        {company.name}
                    </Text>
                    <Text style={styles.cardText} numberOfLines={10}>
                        {company.overview}
                    </Text>
            </View>
        )
    }
}