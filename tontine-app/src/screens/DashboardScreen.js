import React from 'react';
import { StatusBar, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import themeStyles from '../theme/styles';
import { useNavigation } from '@react-navigation/native';

// 🔹 On importe ton composant ici :
import WalletCard from '../components/WalletCard';
import QuickActions from '../components/QuickActions';
import TontineList from '../components/TontineList';

import styles from '../theme/styles';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function DashboardScreen() {
  // const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.scrollView}>
        <LinearGradient
          colors={['#10B981', '#059669']}
          style={styles.dashboardHeader}
        >
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.headerGreeting}>Bonjour,</Text>
              <Text style={styles.headerName}>Kouassi Jean</Text>
            </View>
            <TouchableOpacity
              style={styles.profileButton}
              onPress={() => navigation.navigate('Profile')}
            >
              <Feather name="user" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={styles.scoreCard}>
            <View style={styles.scoreContent}>
              <View>
                <Text style={styles.scoreLabel}>Votre TontiScore</Text>
                <View style={styles.scoreRow}>
                  <Text style={styles.scoreValue}>720</Text>
                  <Text style={styles.scoreChange}>+15 pts</Text>
                </View>
              </View>
              <LinearGradient
                colors={['#FBBF24', '#F59E0B']}
                style={styles.trophyIcon}
              >
                <Feather name="award" size={32} color="#fff" />
              </LinearGradient>
            </View>

            <View style={styles.progressSection}>
              <View style={styles.progressLabels}>
                <Text style={styles.progressLabel}>Bronze</Text>
                <Text style={[styles.progressLabel, styles.progressLabelActive]}>
                  Argent
                </Text>
                <Text style={styles.progressLabel}>Or</Text>
              </View>
              <View style={styles.progressBar}>
                <LinearGradient
                  colors={['#10B981', '#FBBF24']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={[styles.progressFill, { width: '72%' }]}
                />
              </View>
            </View>

            <TouchableOpacity
              style={styles.scoreDetailButton}
              onPress={() => navigation.navigate('ScoreDetail')}
            >
              <Text style={styles.scoreDetailText}>Voir les détails</Text>
              <Feather name="chevron-right" size={16} color="#10B981" />
            </TouchableOpacity>
          </View>
        </LinearGradient>

        <View style={styles.dashboardContent}>
          {/* Wallet Card */}
          <WalletCard />
          
          {/* Quick Actions */}
          <QuickActions/>

          {/* Tontines List */}          
          <TontineList/>

        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="home" size={24} color="#10B981" />
          <Text style={[styles.navText, styles.navTextActive]}>Accueil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="users" size={24} color="#9CA3AF" />
          <Text style={styles.navText}>Tontines</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Wallet')}
        >
          <Feather name="credit-card" size={24} color="#9CA3AF" />
          <Text style={styles.navText}>Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Notifications')}
        >
          <View>
            <Feather name="bell" size={24} color="#9CA3AF" />
            <View style={styles.notificationBadge} />
          </View>
          <Text style={styles.navText}>Alertes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
