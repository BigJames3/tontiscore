import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function AIRecommendation() {
  const navigation = useNavigation();

  return ( 
    <LinearGradient
      colors={['#DBEAFE', '#BFDBFE']}
      style={styles.aiCard}
    >
      <View style={styles.aiIconContainer}>
        <Feather name="zap" size={20} color="#fff" />
      </View>
      <View style={styles.aiContent}>
        <Text style={styles.aiTitle}>Conseil IA du jour</Text>
        <Text style={styles.aiText}>
          Payez votre prochaine cotisation à l'avance pour gagner +10
          points et améliorer votre score !
        </Text>
      </View>
    </LinearGradient>
  );
}