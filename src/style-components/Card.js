import styled from "styled-components";
import { Div } from "./Container";

export const Card = styled.div`
  display: flex;
  cursor: pointer;
  position: relative;

  flex-direction: column;

  width: ${(props) => props.width};
`;

Card.defaultProps = {
  width: "18rem",
};

export const CardImg = styled.img`
  display: block;
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  margin-bottom: 5px;
  object-fit: cover;
  max-width: 100%;
  height: auto;
`;

export const CardTitle = styled(Div)`
  color: #000;
  font-size: 14px;
  line-height: 1rem;
  margin-top: 0.5rem;
  font-family: BrandonTextWeb-Medium, Helvetica Neue, Helvetica, Roboto, Arial,
    sans-serif;
  text-transform: uppercase;
`;

export const CardDescription = styled(Div)`
  font-size: 14px;
  line-height: 1rem;
  margin-top: 2px;
  color: #9b9b9b;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardPricing = styled(Div)`
  display: flex;
  font-size: 14px;
  line-height: 1rem;
`;
