import React from 'react';
import Svg, {Path} from 'react-native-svg';

const CheckedIOS = ({checked, style, ...props}) => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    style={style}
    {...props}>
    {checked ? (
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.808 21.615C4.889 21.615 0 16.726 0 10.808 0 4.889 4.88 0 10.8 0c5.918 0 10.815 4.89 10.815 10.808s-4.889 10.807-10.807 10.807zm-1.329-5.379c.308 0 .573-.14.773-.448l5.578-8.74c.124-.183.232-.407.232-.607 0-.44-.39-.713-.797-.713-.24 0-.481.14-.664.423l-5.163 8.21-2.748-3.446c-.215-.273-.44-.373-.705-.373a.748.748 0 00-.747.764c0 .207.083.431.224.606l3.204 3.884c.257.316.506.44.813.44z"
        fill="#1F88E5"
      />
    ) : (
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.808 21.615C4.889 21.615 0 16.726 0 10.808 0 4.889 4.88 0 10.8 0c5.918 0 10.815 4.89 10.815 10.808s-4.889 10.807-10.807 10.807zm0-1.544c5.13 0 9.272-4.134 9.263-9.263A9.259 9.259 0 0010.8 1.544a9.227 9.227 0 00-9.247 9.264 9.234 9.234 0 009.256 9.263z"
        fill="#97C6EF"
      />
    )}
  </Svg>
);

export default CheckedIOS;
