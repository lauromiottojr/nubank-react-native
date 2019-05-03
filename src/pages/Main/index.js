import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './styles';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

export default function Main() {

  const translateY = new Animated.Value(0);

  const animatedEvent = new Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      }
    ],
    { useNativeDriver: true }
  );

  function onHandlerStateChanged(event) {
    
  }

  return (
    <Container>
      <Header />
      <Content>
        <Menu translateY={translateY} />
        <PanGestureHandler onGestureEvent={animatedEvent} onHandlerStateChange={onHandlerStateChanged}>
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 380], // se o card estiver fora desses valorres px, 
                outputRange: [-50, 0, 380], // meio que a sensibilidade que arrasta o item
                extrapolate: 'clamp', // esse atributo não deixa ele proceguir
              }),
            }]
          }}>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$197.611,65</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferência de R$20,00 recebida de Laurão hoje às 06:00h
            </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs translateY={translateY} />
    </Container>
  );
}
