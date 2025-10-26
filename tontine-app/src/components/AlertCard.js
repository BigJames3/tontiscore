import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import styles from '../theme/styles';

export default function AlertCard() {
  const navigation = useNavigation();

  return (
    <View style={styles.alertCard}>
      <View style={styles.alertIconContainer}>
        <Feather name="calendar" size={20} color="#fff" />
      </View>
      <View style={styles.alertContent}>
        <Text style={styles.alertTitle}>Votre tour dans 3 jours</Text>
        <Text style={styles.alertText}>
          Vous recevrez 40 000 FCFA le 15 juin 2024
        </Text>
        <TouchableOpacity>
          <Text style={styles.alertLink}>Voir le calendrier →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}