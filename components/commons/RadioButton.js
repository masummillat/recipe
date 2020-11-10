import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View, Text, ViewPropTypes} from 'react-native';

/**
 * Example:
 * <RadioButton
     onChange={(val) => {
                      console.log(val);
                    }}
     selectedOption={1}
     options={[
                      {id: 1, label: 'Cash on delivery'},
                      {id: 2, label: 'Bkash'},
                      {id: 3, label: 'Card'},
                    ]}
     labelStyle={{color: 'black'}}
     radioStyle={{
                      width: 24,
                      height: 24,
                      borderRadius: 12,
                      borderColor: '#f89973',
                    }}
     radioWrapperStyle={{margin: 5}}
     />
 * @param onChange
 * @param selectedOption
 * @param options
 * @param labelStyle
 * @param radioStyle
 * @param radioWrapperStyle
 * @returns {*[]}
 * @constructor
 */
const RadioButton = ({
  onChange,
  selectedOption,
  options,
  labelStyle,
  radioStyle,
  radioWrapperStyle,
}): React.Component => {
  const [radioSelected, setRadioSelected] = useState(1);
  const radioClick = (radio) => {
    setRadioSelected(radio.id);
    onChange(radio);
  };
  useEffect(() => {
    setRadioSelected(selectedOption);
  }, [selectedOption]);
  return options.map((val) => {
    return (
      <TouchableOpacity
        style={[{flexDirection: 'row', margin: 5}, radioWrapperStyle]}
        key={val.id}
        onPress={() => radioClick(val)}>
        <View
          style={[
            {
              height: 24,
              width: 24,
              borderRadius: 12,
              borderWidth: 2,
              borderColor: '#f89973',
              alignItems: 'center',
              justifyContent: 'center',
            },
            radioStyle,
          ]}>
          {val.id == radioSelected ? (
            <View
              style={{
                height: radioStyle.height / 2 || 12,
                width: radioStyle.width / 2 || 12,
                borderRadius: radioStyle.borderRadius / 2 || 6,
                backgroundColor: radioStyle.borderColor || '#f89973',
              }}
            />
          ) : null}
        </View>
        <Text style={[{marginHorizontal: 5, color: '#f89973'}, labelStyle]}>
          {val.label}
        </Text>
      </TouchableOpacity>
    );
  });
};

RadioButton.defaultProps = {
  labelStyle: Text.propTypes.style,
  radioStyle: ViewPropTypes.style,
  radioWrapperStyle: ViewPropTypes.style,
};

RadioButton.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  labelStyle: Text.propTypes.style,
  radioStyle: ViewPropTypes.style,
  radioWrapperStyle: ViewPropTypes.style,
};
export default React.memo(RadioButton);
