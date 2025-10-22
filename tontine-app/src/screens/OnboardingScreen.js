import React from 'react';
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import themeStyles from '../theme/styles';
import { useNavigation } from '@react-navigation/native';

export default function OnboardingScreen({ navigation }) {
    // const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.onboardingContainer}>
        <LinearGradient
          colors={['#D1FAE5', '#DBEAFE']}
          style={styles.onboardingContent}
        >
          <View style={styles.iconContainer}>
            <LinearGradient
              colors={['#10B981', '#059669']}
              style={styles.largeIcon}
            >
              <Feather name="users" size={64} color="#fff" />
            </LinearGradient>
          </View>
          <Text style={styles.onboardingTitle}>
            Gérez vos tontines facilement
          </Text>
          <Text style={styles.onboardingSubtitle}>
            Créez et participez à des tontines digitales avec vos proches en
            toute sécurité
          </Text>
        </LinearGradient>

        <View style={styles.pagination}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate('Dashboard')}
          >
            <Text style={styles.primaryButtonText}>Créer un compte</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.secondaryButtonText}>Se connecter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
