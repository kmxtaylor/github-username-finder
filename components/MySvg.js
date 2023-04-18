import { StyleSheet } from 'react-native';
import Svg, { Image } from 'react-native-svg';

const MySvg = ({ svgPath }) => {
  // const svgString = require(path);
  return (
    <Svg style={styles.svg}>
      <Image href={svgPath} />
      {/* <Image href={svgString} /> */}
    </Svg>
  );
};

const styles = StyleSheet.create({
  svg: {
    width: 40,
    height: 40,
  },
});

export default MySvg;