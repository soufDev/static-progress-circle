import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";
import {
  Circle,
  LeftWrap,
  Loader,
  SecondLoader,
  InnerCirle,
  Text
} from "./styledComponents";

const PercentageCircle = React.memo(props => {
  const { percent, radius, bgcolor, color, borderWidth, innerColor } = props;
  let leftTransformerDegree = "0deg",
    rightTransformerDegree = "180deg",
    progress = percent;

  if (progress >= 50) {
    rightTransformerDegree = "180deg";
    leftTransformerDegree = `${(progress - 50) * 3.6}deg`;
  } else {
    rightTransformerDegree = `${progress * 3.6}deg`;
    leftTransformerDegree = "0deg";
  }
  const circleStyle = {
    width: radius * 2,
    height: radius * 2,
    borderRadius: radius,
    backgroundColor: bgcolor
  };

  const leftWrapStyle = {
    width: radius,
    height: radius * 2,
    left: 0
  };

  const laoderStyle = {
    left: radius,
    width: radius,
    height: radius * 2,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: color,
    transform: `rotate(${leftTransformerDegree})`
  };

  const secondLoaderStyle = {
    left: -radius,
    width: radius,
    height: radius * 2,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: color,
    transform: `rotate(${rightTransformerDegree})`
  };

  const innerCirleStyle = {
    left: borderWidth,
    top: borderWidth,
    width: (radius - borderWidth) * 2,
    height: (radius - borderWidth) * 2,
    borderRadius: radius - borderWidth,
    backgroundColor: innerColor
  };

  const rightWrapStyle = {
    width: radius,
    height: radius * 2,
    left: radius
  };

  const textColor = {
    color
  };

  return (
    <Circle style={circleStyle}>
      <Circle />
      <LeftWrap style={leftWrapStyle}>
        <Loader style={laoderStyle} />
      </LeftWrap>
      <LeftWrap style={rightWrapStyle}>
        <SecondLoader style={secondLoaderStyle} />
      </LeftWrap>
      <InnerCirle style={innerCirleStyle}>
        <Text style={textColor}>{progress}%</Text>
      </InnerCirle>
    </Circle>
  );
});

PercentageCircle.defaultProps = {
  color: "#000",
  radius: 20,
  percent: 0,
  borderWidth: 2,
  bgcolor: "#e3e3e3",
  innerColor: "#fff",
  step: 1,
  delay: 1
};

PercentageCircle.propTypes = {
  color: propTypes.string,
  radius: propTypes.number,
  percent: propTypes.number,
  borderWidth: propTypes.number,
  bgcolor: propTypes.string,
  innerColor: propTypes.string,
  step: propTypes.number,
  delay: propTypes.number
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <PercentageCircle
    radius={100}
    borderWidth={5}
    percent={50}
    color="#ffa7c4"
  />,
  rootElement
);
