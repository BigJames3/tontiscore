import React from 'react';
import { StatusBar, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../theme/styles'; // on change le nom à l'import
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
            <View style={styles.profileHeader}>
              <View style={styles.profileAvatarContainer}>
                <View style={styles.profileAvatar}>
                  <Text style={styles.profileAvatarText}>KJ</Text>
                </View>
                <TouchableOpacity style={styles.profileAvatarButton}>
                  <Feather name="camera" size={16} color="#fff" />
                </TouchableOpacity>
              </View>

              <Text style={styles.profileName}>Kouassi Jean</Text>
              <Text style={styles.profilePhone}>+225 07 XX XX XX XX</Text>

              <View style={styles.headerTop}> 
                <View style={styles.profileBadge}>
                  <Feather name="award" size={20} color="#FCD34D" />
                  <Text style={styles.profileBadgeText}>Score: 720 • Niveau Argent</Text>
                </View>
                <TouchableOpacity style={styles.profileEditButton}>
                  <Feather name="edit-2" size={16} color="#10B981" />
                  <Text style={styles.profileEditButtonText}>Modifier le profil</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </LinearGradient>

        <View style={styles.profileContent}>
          {/* Stats */}
          <View style={styles.profileStats}>
            <View style={styles.profileStatItem}>              
            <View style={[styles.statIcon, { backgroundColor: '#D1FAE5' }]}>
              <Feather name="users" size={24} color="#059669" />
            </View>
              <Text style={styles.profileStatValue}>3</Text>
              <Text style={styles.profileStatLabel}>Tontines</Text>
            </View>
            <View style={styles.profileStatItem}>
            <View style={[styles.statIcon, { backgroundColor: '#DBEAFE' }]}>
              <Feather name="calendar" size={24} color="#2563EB" />
            </View>
              <Text style={styles.profileStatValue}>8</Text>
              <Text style={styles.profileStatLabel}>Mois</Text>
            </View>
            <View style={styles.profileStatItem}>
            <View style={[styles.statIcon, { backgroundColor: '#FEF3C7' }]}>
              <Feather name="trending-up" size={24} color="#D97706" />
            </View>
              <Text style={styles.profileStatValue}>95%</Text>
              <Text style={styles.profileStatLabel}>Ponctualité</Text>
            </View>
          </View>


        {/* Quick Actions */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Actions rapides</Text>
          <View style={styles.actionsGrid}>
            <TouchableOpacity style={styles.actionButton}>
              <View style={[styles.actionIcon, { backgroundColor: '#D1FAE5' }]}>
                <Feather name="download" size={24} color="#059669" />
              </View>
              <Text style={styles.actionText}>Historique</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <View style={[styles.actionIcon, { backgroundColor: '#DBEAFE' }]}>
                <Feather name="file-text" size={24} color="#2563EB" />
              </View>
              <Text style={styles.actionText}>Documents</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <View style={[styles.actionIcon, { backgroundColor: '#FEF3C7' }]}>
                <Feather name="award" size={24} color="#D97706" />
              </View>
              <Text style={styles.actionText}>Badges</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <View style={[styles.actionIcon, { backgroundColor: '#F3E8FF' }]}>
                <Feather name="gift" size={24} color="#9333EA" />
              </View>
              <Text style={styles.actionText}>Récompenses</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.cardTitle}></Text>
          {/* Menu */}
          <View style={styles.card}>            
            <Text style={styles.cardTitle}>Paramètres du compte</Text>
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
                <Text style={styles.settingsSubtext}>Push, Email, SMS</Text>
              </View>
              <Feather name="chevron-right" size={20} color="#9CA3AF" />
            </TouchableOpacity>

            <View style={styles.menuDivider} />

            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <View style={styles.menuIcon}>
                  <Feather name="credit-card"  size={20} color="#111827" />
                </View>
                <Text style={styles.menuItemText}>Moyens de paiement</Text>                
                <Text style={styles.settingsSubtext}>3 comptes liés</Text>
              </View>
              <Feather name="chevron-right" size={20} color="#9CA3AF" />
            </TouchableOpacity>

            <View style={styles.settingsDivider} />

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

          <Text style={styles.cardTitle}></Text>
          {/* Support */}
          <View style={styles.card}>
          <Text style={styles.cardTitle}>Support</Text>
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
                <Text style={styles.menuItemText}>Conditions d'utilisation</Text>
              </View>
              <Feather name="chevron-right" size={20} color="#9CA3AF" />
            </TouchableOpacity>
            <View style={styles.menuDivider} />

            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <View style={styles.menuIcon}>
                  <Feather name="mail" size={20} color="#111827" />
                </View>
                <Text style={styles.menuItemText}>Politique de confidentialité</Text>
              </View>
              <Feather name="chevron-right" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          </View>

          <Text style={styles.cardTitle}></Text>

          {/* Logout */}
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => navigation.navigate('Onboarding')}
          >
            <Feather name="log-out" size={20} color="#DC2626" />
            <Text style={styles.logoutButtonText}>Se déconnecter</Text>
          </TouchableOpacity>

          <Text style={styles.versionText}>Version 1.0.0 • TontiScore © 2025</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}