import React from 'react';
import  { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { Wrapper, Header, BalanceContainer, BalanceTitle, Balance, Container} from './styles';
import Suggestions from '../../componentes/Suggestions';
import Activities from '../../componentes/Activities';
import Tips from '../../componentes/Tips';
import Banner from '../../componentes/Banner';
export default function Home() {
    return (
        <Wrapper>
            <Container>
            <Header>
            <MaterialCommunityIcons
            name="qrcode-scan" size={30} color="#10c86e"
            />
    <BalanceContainer>
        <BalanceTitle>Meu saldo</BalanceTitle>
        <Balance>R$8999,00</Balance>
    </BalanceContainer>
    <AntDesign
            name="gift" size={30} color="#10c86e"
            />
            </Header>
            <Suggestions />
            <Activities />
            <Tips />
            <Banner />
            </Container>
        </Wrapper>
    );
}