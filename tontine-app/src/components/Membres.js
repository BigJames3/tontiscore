import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import styles from '../theme/styles';

export default function Membres() {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Membres (8)</Text>

      <View style={styles.memberItem}>
        <View style={styles.memberLeft}>
          <View style={[styles.avatar, { backgroundColor: '#D1FAE5' }]}>
            <Text style={[styles.avatarText, { color: '#059669' }]}>
              KJ
            </Text>
          </View>
          <View>
            <Text style={styles.memberName}>Kouassi Jean (Vous)</Text>
            <Text style={styles.memberTurn}>Tour 3 • 15 juin</Text>
          </View>
        </View>
        <View style={styles.memberCheck}>
          <Feather name="check" size={16} color="#059669" />
        </View>
      </View>

      <View style={styles.memberItem}>
        <View style={styles.memberLeft}>
          <View style={[styles.avatar, { backgroundColor: '#DBEAFE' }]}>
            <Text style={[styles.avatarText, { color: '#2563EB' }]}>
              AM
            </Text>
          </View>
          <View>
            <Text style={styles.memberName}>Aïcha Mensah</Text>
            <Text style={styles.memberTurnComplete}>Tour 1 • Complété</Text>
          </View>
        </View>
        <View style={styles.memberCheck}>
          <Feather name="check" size={16} color="#059669" />
        </View>
      </View>

      <View style={styles.memberItem}>
        <View style={styles.memberLeft}>
          <View style={[styles.avatar, { backgroundColor: '#F3E8FF' }]}>
            <Text style={[styles.avatarText, { color: '#9333EA' }]}>
              YK
            </Text>
          </View>
          <View>
            <Text style={styles.memberName}>Yao Kouamé</Text>
            <Text style={styles.memberTurnComplete}>Tour 2 • Complété</Text>
          </View>
        </View>
        <View style={styles.memberCheck}>
          <Feather name="check" size={16} color="#059669" />
        </View>
      </View>

      <TouchableOpacity style={styles.seeMoreButton}>
        <Text style={styles.seeMoreText}>Voir tous les membres →</Text>
      </TouchableOpacity>
    </View>
  );
}