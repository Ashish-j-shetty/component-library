import React from "react";
import { Card, Div, P } from "../style-components";
import {
  CardDescription,
  CardImg,
  CardPricing,
  CardTitle,
} from "../style-components/Card";

export function CardComponent() {
  return (
    <Div>
      <h2>Cards</h2>
      <Card>
        <CardImg src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/pXNg7ZykRENs8yjJBvkPNCaz" />
        <CardTitle>demo herer</CardTitle>

        <CardDescription>
          this is my first card toe check the bull shitt what the world
        </CardDescription>
        <CardPricing>
          <P bold>₹ 769</P>
          <P stricked>heoolo2</P>
          <P colored>40% off</P>
        </CardPricing>
      </Card>
    </Div>
  );
}
