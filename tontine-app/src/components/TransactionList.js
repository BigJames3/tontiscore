import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function TransactionList() {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>Transactions récentes</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>Tout voir</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.transactionItem}>
        <View style={styles.transactionLeft}>
          <View
            style={[
              styles.transactionIcon,
              { backgroundColor: '#D1FAE5' },
            ]}
          >
            <Feather name="arrow-down-left" size={16} color="#059669" />
          </View>
          <View>
            <Text style={styles.transactionTitle}>Recharge Wallet</Text>
            <Text style={styles.transactionDate}>
              10 juin 2024 • 14:30
            </Text>
          </View>
        </View>
        <View style={styles.transactionRight}>
          <Text style={styles.transactionAmountPositive}>
            +20 000 FCFA
          </Text>
          <Text style={styles.transactionMethod}>Orange Money</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.transactionItem}>
        <View style={styles.transactionLeft}>
          <View
            style={[styles.transactionIcon, { backgroundColor: '#FEE2E2' }]}
          >
            <Feather name="arrow-up-right" size={16} color="#DC2626" />
          </View>
          <View>
            <Text style={styles.transactionTitle}>
              Cotisation tontine
            </Text>
            <Text style={styles.transactionDate}>01 juin 2024 • 09:15</Text>
          </View>
        </View>
        <View style={styles.transactionRight}>
          <Text style={styles.transactionAmountNegative}>
            -5 000 FCFA
          </Text>
          <Text style={styles.transactionMethod}>Famille Kouassi</Text>
        </View>
      </View>
    </View>
  );
}