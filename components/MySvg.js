import { StyleSheet } from 'react-native';
import Svg, { Image } from 'react-native-svg';

const MySvg = (props) => {
  // const svgString = require(svgPath);
  // const svgString = require(props.svgPath);
  return (
    <Svg style={[styles.svg, props.style]}>
      <Image href={props.svgPath} />
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