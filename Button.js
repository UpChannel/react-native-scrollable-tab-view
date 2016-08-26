const React = require('react');
const ReactNative = require('react-native');
const {
  View,
} = ReactNative;

const Button = (props) => {
  return <View
    {...props}
  >
    {props.children}
  </View>;
};

module.exports = Button;
