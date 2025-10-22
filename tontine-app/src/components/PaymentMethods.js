import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function PaymentMethods() {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Moyens de paiement</Text>

      <LinearGradient
        colors={['#FFF7ED', '#FFEDD5']}
        style={styles.paymentMethodCard}
      >
        <View style={styles.paymentMethodLeft}>
          <View
            style={[
              styles.paymentMethodIcon,
              { backgroundColor: '#F97316' },
            ]}
          >
            <Feather name="smartphone" size={24} color="#fff" />
          </View>
          <View>
            <Text style={styles.paymentMethodName}>Orange Money</Text>
            <Text style={styles.paymentMethodNumber}>
              +225 XX XX XX XX
            </Text>
          </View>
        </View>
        <Feather name="chevron-right" size={20} color="#9CA3AF" />
      </LinearGradient>

      <LinearGradient
        colors={['#FFFBEB', '#FEF3C7']}
        style={styles.paymentMethodCard}
      >
        <View style={styles.paymentMethodLeft}>
          <View
            style={[
              styles.paymentMethodIcon,
              { backgroundColor: '#EAB308' },
            ]}
          >
            <Feather name="smartphone" size={24} color="#fff" />
          </View>
          <View>
            <Text style={styles.paymentMethodName}>MTN Money</Text>
            <Text style={styles.paymentMethodNumber}>
              Ajouter un compte
            </Text>
          </View>
        </View>
        <Feather name="plus" size={20} color="#9CA3AF" />
      </LinearGradient>

      <LinearGradient
        colors={['#EFF6FF', '#DBEAFE']}
        style={styles.paymentMethodCard}
      >
        <View style={styles.paymentMethodLeft}>
          <View
            style={[
              styles.paymentMethodIcon,
              { backgroundColor: '#3B82F6' },
            ]}
          >
            <Feather name="smartphone" size={24} color="#fff" />
          </View>
          <View>
            <Text style={styles.paymentMethodName}>Moov Money</Text>
            <Text style={styles.paymentMethodNumber}>
              Ajouter un compte
            </Text>
          </View>
        </View>
        <Feather name="plus" size={20} color="#9CA3AF" />
      </LinearGradient>
    </View>
  );
}