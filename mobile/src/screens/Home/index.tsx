import React from 'react';
import { View, Image } from 'react-native';

import { Heading } from '../../components/Heading'
import { styles } from './styles';

import  logoImg  from '../../assets/logo-nlw-esports.png';

export function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
      />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />
    </View>
  );
}
