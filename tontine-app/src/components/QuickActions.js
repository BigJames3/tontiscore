import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function QuickActions() {
  const navigation = useNavigation();

  return (
    <View style={styles.quickActions}>
    <TouchableOpacity style={styles.actionCard}>
      <View style={[styles.actionIcon, { backgroundColor: '#D1FAE5' }]}>
        <Feather name="users" size={24} color="#059669" />
      </View>
      <Text style={styles.actionText}>Créer groupe</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionCard}>
      <View style={[styles.actionIcon, { backgroundColor: '#DBEAFE' }]}>
        <Feather name="user-plus" size={24} color="#2563EB" />
      </View>
      <Text style={styles.actionText}>Rejoindre</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.actionCard}
      onPress={() => navigation.navigate('Credit')}
    >
      <View style={[styles.actionIcon, { backgroundColor: '#FEF3C7' }]}>
        <Feather name="dollar-sign" size={24} color="#D97706" />
      </View>
      <Text style={styles.actionText}>Microcrédit</Text>
    </TouchableOpacity>
  </View>
  );
}