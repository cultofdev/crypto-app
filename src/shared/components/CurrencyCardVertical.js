import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';

import { COLORS, FONTS, SIZES } from '../../utilities/constants';

const CurrencyCardVertical = ({containerStyle, currencyItem, onPress}) => {
    return (
        <TouchableOpacity>
            <Text>{currencyItem.name}</Text>
        </TouchableOpacity>
    )
}

export default CurrencyCardVertical;