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

export default function ProfileScreen({ navigation }) {
    // const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.scrollView}>
        <LinearGradient
          colors={['#10B981', '#059669']}
          style={styles.profileHeader}
        >
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Feather name="arrow-left" size={24} color="#fff" />
          </TouchableOpacity>

          <View style={styles.profileInfo}>
            <View style={styles.profileAvatar}>
              <Text style={styles.profileAvatarText}>KJ</Text>
            </View>
            <Text style={styles.profileName}>Kouassi Jean</Text>
            <Text style={styles.profilePhone}>+225 07 XX XX XX XX</Text>

            <View style={styles.profileBadge}>
              <Feather name="award" size={20} color="#FBBF24" />
              <Text style={styles.profileBadgeText}>
                Score: 720 • Niveau Argent
              </Text>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.profileContent}>
          {/* Stats */}
          <View style={styles.profileStats}>
            <View style={styles.profileStatItem}>
              <Text style={styles.profileStatValue}>3</Text>
              <Text style={styles.profileStatLabel}>Tontines</Text>
            </View>
            <View style={styles.profileStatItem}>
              <Text style={styles.profileStatValue}>8</Text>
              <Text style={styles.profileStatLabel}>Mois</Text>
            </View>
            <View style={styles.profileStatItem}>
              <Text style={styles.profileStatValue}>95%</Text>
              <Text style={styles.profileStatLabel}>Ponctualité</Text>
            </View>
          </View>

          {/* Menu */}
          <View style={styles.card}>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <View style={styles.menuIcon}>
                  <Feather name="user" size={20} color="#111827" />
                </View>
                <Text style={styles.menuItemText}>
                  Informations personnelles
                </Text>
              </View>
              <Feather name="chevron-right" size={20} color="#9CA3AF" />
            </TouchableOpacity>

            <View style={styles.menuDivider} />

            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <View style={styles.menuIcon}>
                  <Feather name="shield" size={20} color="#111827" />
                </View>
                <Text style={styles.menuItemText}>Sécurité et confidentialité</Text>
              </View>
              <Feather name="chevron-right" size={20} color="#9CA3AF" />
            </TouchableOpacity>

            <View style={styles.menuDivider} />

            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <View style={styles.menuIcon}>
                  <Feather name="bell" size={20} color="#111827" />
                </View>
                <Text style={styles.menuItemText}>Notifications</Text>
              </View>
              <Feather name="chevron-right" size={20} color="#9CA3AF" />
            </TouchableOpacity>

            <View style={styles.menuDivider} />

            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <View style={styles.menuIcon}>
                  <Feather name="globe" size={20} color="#111827" />
                </View>
                <Text style={styles.menuItemText}>Langue</Text>
              </View>
              <View style={styles.menuItemRight}>
                <Text style={styles.menuItemValue}>Français</Text>
                <Feather name="chevron-right" size={20} color="#9CA3AF" />
              </View>
            </TouchableOpacity>
          </View>

          {/* Support */}
          <View style={styles.card}>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <View style={styles.menuIcon}>
                  <Feather name="help-circle" size={20} color="#111827" />
                </View>
                <Text style={styles.menuItemText}>Centre d'aide</Text>
              </View>
              <Feather name="chevron-right" size={20} color="#9CA3AF" />
            </TouchableOpacity>

            <View style={styles.menuDivider} />

            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <View style={styles.menuIcon}>
                  <Feather name="mail" size={20} color="#111827" />
                </View>
                <Text style={styles.menuItemText}>Nous contacter</Text>
              </View>
              <Feather name="chevron-right" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          </View>

          {/* Logout */}
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => navigation.navigate('Onboarding')}
          >
            <Feather name="log-out" size={20} color="#DC2626" />
            <Text style={styles.logoutButtonText}>Se déconnecter</Text>
          </TouchableOpacity>

          <Text style={styles.versionText}>Version 1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}