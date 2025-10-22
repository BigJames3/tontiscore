import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function ActionButtonsRow() {
  const navigation = useNavigation();

  return (
    <View style={styles.actionButtonsRow}>
      <TouchableOpacity style={styles.actionButtonSecondary}>
        <Feather name="file-text" size={16} color="#111827" />
        <Text style={styles.actionButtonSecondaryText}>Règlement</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButtonSecondary}>
        <Feather name="share-2" size={16} color="#111827" />
        <Text style={styles.actionButtonSecondaryText}>Inviter</Text>
      </TouchableOpacity>
    </View>
  );
}