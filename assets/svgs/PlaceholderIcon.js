import * as React from "react"
import Svg, { Path } from "react-native-svg"

const PlaceholderIcon = (props) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M17.333 9A8.333 8.333 0 1 1 .667 9a8.333 8.333 0 0 1 16.666 0Zm-1.25 0A7.083 7.083 0 1 1 1.917 9a7.083 7.083 0 0 1 14.166 0Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default PlaceholderIcon;
