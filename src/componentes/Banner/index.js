import React from 'react';

import { Container, Details, Img, Title, Description } from './styles';

import img11 from '../../images/11.png';

export default function Banner() {
  return (
    <Container>
      <Details>
        <Title>Cobre um amigo</Title>

        <Description>
         pai ta agiota kkkkkkkkkkkkkkkk
        </Description>
      </Details>
      <Img source={img11} />
    </Container>
  );
}