// components/CarteWallet.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function walletCard() {
  const navigation = useNavigation();

  return (
    <View style={styles.walletCard}>
      <View style={styles.walletContent}>
        <View style={styles.walletLeft}>
          <View style={[styles.iconBox, { backgroundColor: '#DBEAFE' }]}>
            <Feather name="credit-card" size={20} color="#2563EB" />
          </View>
          <View>
            <Text style={styles.walletLabel}>Solde Wallet</Text>
            <Text style={styles.walletAmount}>45 000 FCFA</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('Wallet')}
        >
          <Feather name="plus" size={20} color="#111827" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

{/* <View style={styles.walletCard}>
  <View style={styles.walletContent}>
    <View style={styles.walletLeft}>
      <View style={[styles.iconBox, { backgroundColor: '#DBEAFE' }]}>
        <Feather name="credit-card" size={20} color="#2563EB" />
      </View>
      <View>
        <Text style={styles.walletLabel}>Solde Wallet</Text>
        <Text style={styles.walletAmount}>45 000 FCFA</Text>
      </View>
    </View>
    <TouchableOpacity
      style={styles.addButton}
      onPress={() => navigation.navigate('Wallet')}
    >
      <Feather name="plus" size={20} color="#111827" />
    </TouchableOpacity>
  </View>
</View> */}