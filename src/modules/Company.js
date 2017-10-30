import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    ScrollView,
    Image,
    Text,
    View
} from 'react-native';

import styles from './styles/Company';

class Company extends Component {
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

    _onScroll(event) {
        const offSetY = event.nativeEvent.contentOffset.y.toFixed();
        if (offSetY > 130) {
            this._toggleNavbar('hidden');
        } else {
            this._toggleNavbar('shown');
        }
    }

    _toggleNavbar(status) {
        this.props.navigator.toggleNavBar({
            to: status,
            animated: true
        });
    }

    render() {
        const { company } = this.props;
        return (
            <ScrollView
                style={styles.container}
                onScroll={this._onScroll.bind(this)}>

                <View style={styles.itemContainer}>
                    <Image source={require('../../images/coffee.png')} style={styles.image} />
                    <View style={styles.overviewArea}>
                        <Text style={styles.title}>{company.name}</Text>
                        <Text style={styles.overview}>{company.overview}</Text>
                    </View>
                </View>
                <View style={styles.contentArea}>
                    <View style={styles.contentContainer}>
                        <View style={styles.labelRow}>
                            <Text style={styles.label}>[従業員数]</Text>
                            <Text style={styles.value}>{company.employeesNum}名</Text>
                        </View>
                        <View style={styles.labelRow}>
                            <Text style={styles.label}>[給与]</Text>
                            <Text style={styles.value}>{company.salaryLow}万円〜{company.salaryHigh}万円</Text>
                        </View>
                        <View style={styles.labelRow}>
                            <Text style={styles.label}>[URL]</Text>
                            <Text style={styles.value}>{company.url}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

Company.propTypes = {
	company: PropTypes.object.isRequired
};

export default Company;