import * as React from 'react';
import Svg, {SvgProps, Rect, Mask, Path} from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={20} height={29} fill="none" viewBox="0 0 20 29">
      <Rect
        x={1.375}
        y={1.375}
        width={16.948}
        height={25.615}
        rx={2.625}
        stroke={props.stroke || '#B5B5B5'}
        strokeWidth={2.75}
      />
      <Mask id="prefix__a" fill="#fff">
        <Rect x={3.94} y={4.728} width={2.364} height={3.94} rx={1} />
      </Mask>
      <Rect
        x={3.94}
        y={4.728}
        width={2.364}
        height={3.94}
        rx={1}
        fill="#fff"
        stroke={props.stroke || '#B5B5B5'}
        strokeWidth={2.364}
        mask="url(#prefix__a)"
      />
      <Mask id="prefix__b" fill="#fff">
        <Rect x={3.94} y={15.758} width={2.364} height={4.728} rx={1} />
      </Mask>
      <Rect
        x={3.94}
        y={15.758}
        width={2.364}
        height={4.728}
        rx={1}
        fill="#fff"
        stroke={props.stroke || '#B5B5B5'}
        strokeWidth={2.364}
        mask="url(#prefix__b)"
      />
      <Path
        fill="#B5B5B5"
        stroke={props.stroke || '#B5B5B5'}
        d="M.5 12.5h18v1H.5z"
      />
    </Svg>
  );
}

export default SvgComponent;
