import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function OnboardingScreen({ navigation }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: 'users',
      title: 'Gestion de Tontines',
      description: "Créez et rejoignez des groupes d'épargne avec vos proches. Gérez vos cotisations facilement.",
      colors: ['#ECFDF5', '#EFF6FF'],
    },
    {
      icon: 'trending-up',
      title: 'Scoring Automatique',
      description: 'Votre ponctualité et votre engagement sont récompensés par un score évolutif.',
      colors: ['#ECFDF5', '#D1FAE5'],
    },
    {
      icon: 'dollar-sign',
      title: 'Accès au Microcrédit',
      description: 'Obtenez des prêts instantanés basés sur votre TontineScore et votre historique.',
      colors: ['#FEF3C7', '#FFFBEB'],
    },
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigation.navigate('Login'); // 👈 Redirige vers ton écran Login
    }
  };

  const slide = slides[currentSlide];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <LinearGradient colors={slide.colors} style={styles.gradient}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>TontiScore</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.skip}>Passer</Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <Feather name={slide.icon} size={48} color="#059669" />
          </View>

          <Text style={styles.title}>{slide.title}</Text>
          <Text style={styles.description}>{slide.description}</Text>

          {/* Pagination */}
          <View style={styles.dots}>
            {slides.map((_, i) => (
              <View
                key={i}
                style={[styles.dot, i === currentSlide && styles.dotActive]}
              />
            ))}
          </View>
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {currentSlide === slides.length - 1 ? 'Commencer' : 'Suivant'}
          </Text>
          <Feather name="chevron-right" size={20} color="white" />
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#059669',
  },
  skip: {
    color: '#4B5563',
    fontSize: 16,
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 24,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#4B5563',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  dots: {
    flexDirection: 'row',
    marginTop: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D1D5DB',
    marginHorizontal: 4,
  },
  dotActive: {
    width: 20,
    backgroundColor: '#10B981',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#10B981',
    paddingVertical: 14,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});
