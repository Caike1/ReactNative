import React from 'react';

import { Container, Option, Title, Img } from './styles';

import img8 from '../../images/08.png';
import img9 from '../../images/09.png';
import img10 from '../../images/10.png';
import img13 from '../../images/13.png';
import img12 from '../../images/12.png';

const items = [
  {
    key: String(Math.random()),
    img: img12,
    title: 'Mande um pix pro pai kkkkkkkkkkkkk',
    bgColor: '#ba2f76',
  },
  {
    key: String(Math.random()),
    img: img8,
    title: 'Arrasta pra cima',
    bgColor: '#172c4a',
  },
  {
    key: String(Math.random()),
    img: img9,
    title: 'O dia ta lindo, clima ensolarado',
    bgColor: '#6a0159',
  },
  {
    key: String(Math.random()),
    img: img10,
    title: 'esforça-te',
    bgColor: '#4139c8',
  },
  {
    key: String(Math.random()),
    img: img13,
    title: 'melhor forma',
    bgColor: '#00ab4b',
  },
  
];

export default function Tips() {
  return (
    <Container>
      {items.map((item) => (
        <Option key={item.key} bgColor={item.bgColor}>
          <Title>{item.title}</Title>

          <Img source={item.img} />
        </Option>
      ))}
    </Container>
  );
}