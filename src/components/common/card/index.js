import React from "react";
import { Card, CardHeaderContainer, HeaderSubtitle, CardBody, CardFooter, HeaderTitle } from "./elements";

const CardHeader = ({ title, subtitle }) => (
  <CardHeaderContainer>
    {title && <HeaderTitle>{title}</HeaderTitle>}
    {subtitle && <HeaderSubtitle>{subtitle}</HeaderSubtitle>}
  </CardHeaderContainer>
);

export {
  Card,
  CardHeaderContainer,
  CardFooter,
  CardBody,
  HeaderTitle,
  CardHeader
};
