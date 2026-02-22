import React from "react";
import styled, { useTheme } from "styled-components/native";
//import { useTheme } from 'styled-components/native';
// the below variable sets indexes of array containing the size we refer to

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};
const positionVariant = {
  top: "margin-top",
  left: "margin-left",
  right: "margin-right",
  bottom: "margin-bottom",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];
  return `${property}:${value}`; //${value}
};
// as Spacer is a view, we will use it to wrap other components
//

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const newPosition = position ? position : "top";
  const newSize = size ? size : "small";
  const variant = getVariant(newPosition, newSize, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

export default Spacer;
/*
 the below implementation didn't work for Android, this is why we are changing it
export const Spacer = styled.View`
  ${({ position, size, theme }) => getVariant(position, size, theme)}
`;
*/
/* 
doesn't work anymore as from REACT-NATIVE 0.78
Spacer.defaultProps = {
  position: 'top',
  size: 'small',
};
*/
