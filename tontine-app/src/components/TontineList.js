import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function TontineList() {
  const navigation = useNavigation();

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Mes tontines</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>Voir tout</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.tontineCard}
        onPress={() => navigation.navigate('TontineDetail')}
      >
        <LinearGradient
          colors={['#10B981', '#059669']}
          style={styles.tontineIcon}
        >
          <Feather name="users" size={24} color="#fff" />
        </LinearGradient>
        <View style={styles.tontineInfo}>
          <Text style={styles.tontineName}>Famille Kouassi</Text>
          <Text style={styles.tontineDetails}>
            8 membres • 5 000 FCFA/mois
          </Text>
        </View>
        <View style={styles.tontineStatus}>
          <Text style={styles.tontineStatusLabel}>Votre tour</Text>
          <Text style={styles.tontineStatusDate}>Dans 3 jours</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.tontineCard}>
        <LinearGradient
          colors={['#3B82F6', '#2563EB']}
          style={styles.tontineIcon}
        >
          <Feather name="briefcase" size={24} color="#fff" />
        </LinearGradient>
        <View style={styles.tontineInfo}>
          <Text style={styles.tontineName}>Collègues Bureau</Text>
          <Text style={styles.tontineDetails}>
            5 membres • 10 000 FCFA/mois
          </Text>
        </View>
        <View style={styles.tontineStatus}>
          <Text style={styles.tontineStatusLabel2}>Tour 2/5</Text>
          <Text style={styles.tontineStatusDate2}>En cours</Text>
        </View>
      </View>

      <View style={styles.tontineCard}>
        <LinearGradient
          colors={['#A855F7', '#9333EA']}
          style={styles.tontineIcon}
        >
          <Feather name="heart" size={24} color="#fff" />
        </LinearGradient>
        <View style={styles.tontineInfo}>
          <Text style={styles.tontineName}>Amis Cocody</Text>
          <Text style={styles.tontineDetails}>
            12 membres • 3 000 FCFA/mois
          </Text>
        </View>
        <View style={styles.tontineStatus}>
          <Text style={styles.tontineStatusLabel2}>Tour 7/12</Text>
          <Text style={styles.tontineStatusDate2}>En cours</Text>
        </View>
      </View>
    </View>
  );
}