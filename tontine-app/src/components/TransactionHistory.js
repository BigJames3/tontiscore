import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function TransactionHistory() {
  const navigation = useNavigation();

  return (<View style={styles.card}>
    <Text style={styles.cardTitle}>Historique des paiements</Text>

    <View style={styles.transactionItem}>
      <View style={styles.transactionLeft}>
        <View
          style={[
            styles.transactionIcon,
            { backgroundColor: '#D1FAE5' },
          ]}
        >
          <Feather name="arrow-down" size={16} color="#059669" />
        </View>
        <View>
          <Text style={styles.transactionTitle}>Cotisation mai</Text>
          <Text style={styles.transactionDate}>01 mai 2024</Text>
        </View>
      </View>
      <Text style={styles.transactionAmount}>-5 000 FCFA</Text>
    </View>

    <View style={styles.transactionItem}>
      <View style={styles.transactionLeft}>
        <View
          style={[
            styles.transactionIcon,
            { backgroundColor: '#D1FAE5' },
          ]}
        >
          <Feather name="arrow-down" size={16} color="#059669" />
        </View>
        <View>
          <Text style={styles.transactionTitle}>Cotisation avril</Text>
          <Text style={styles.transactionDate}>01 avr 2024</Text>
        </View>
      </View>
      <Text style={styles.transactionAmount}>-5 000 FCFA</Text>
    </View>
  </View>
  );
}