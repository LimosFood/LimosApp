import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgComponent(props: SvgProps): JSX.Element {
  return (
    <Svg
      width={props.width || 27}
      height={props.height || 29}
      fill="none"
      viewBox="0 0 27 29 "
      {...props}>
      <Path
        d="M13.376 27.07c5.98 0 10.829-4.848 10.829-10.828 0-5.981-4.848-10.83-10.83-10.83-5.98 0-10.828 4.849-10.828 10.83 0 5.98 4.848 10.828 10.829 10.828z"
        stroke={props.stroke || '#16CEBE'}
        strokeWidth={2.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.376 11.6v4.642h3.094M5.64 2.319L1.388 5.413M21.11 2.319l4.255 3.094"
        stroke={props.stroke || '#16CEBE'}
        strokeWidth={2.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
