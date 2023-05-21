import Svg, { Path } from 'react-native-svg';
const Location = ({color, ...rest}) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={14} height={20} {...rest}>
    <Path
      fill={color || "#4b6a9b"}
      d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 0 0-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 0 0-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 0 0-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z"
    />
  </Svg>
);
export default Location;