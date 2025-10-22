import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function StatsGrid() {
  const navigation = useNavigation();

  return (
    <View style={styles.statsGrid}>
      <View style={styles.statCard}>
        <View style={styles.statHeader}>
          <Feather name="dollar-sign" size={16} color="#059669" />
          <Text style={styles.statLabel}>Montant</Text>
        </View>
        <Text style={styles.statValue}>5 000 FCFA</Text>
        <Text style={styles.statDetail}>par mois</Text>
      </View>

      <View style={styles.statCard}>
        <View style={styles.statHeader}>
          <Feather name="calendar" size={16} color="#2563EB" />
          <Text style={styles.statLabel}>Prochain paiement</Text>
        </View>
        <Text style={styles.statValue}>01 Juil</Text>
        <Text style={styles.statDetail}>2024</Text>
      </View>
    </View>
  );
}