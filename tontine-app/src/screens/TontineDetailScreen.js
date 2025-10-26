import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
// import styles from '../theme/styles'; // on change le nom à l'import
import StatsGrid from '../components/StatsGrid';
import AlertCard from '../components/AlertCard';
import Membres from '../components/Membres';
import TransactionHistory from '../components/TransactionHistory';
import ActionButtonsRow from '../components/AIRecommendation';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';


  
 export default function TontineDetailScreen({ navigation }) {
    const [activeTab, setActiveTab] = useState('members');
  
    const members = [
      { initials: 'KY', name: 'Kouassi Yao', score: 745, badge: 'Or', status: 'paid' },
      { initials: 'AD', name: 'Aya Diabaté', score: 680, badge: 'Argent', status: 'paid' },
      { initials: 'KN', name: "Koffi N'Guessan", score: 720, badge: 'Or', status: 'pending' },
      { initials: 'MK', name: 'Marie Koné', score: 790, badge: 'Or', status: 'paid' },
      { initials: 'YK', name: 'Yao Kouamé', score: 650, badge: 'Argent', status: 'paid' },
      { initials: 'AT', name: 'Aminata Traoré', score: 590, badge: 'Bronze', status: 'late' },
      { initials: 'JB', name: 'Jean Bamba', score: 710, badge: 'Or', status: 'paid' },
      { initials: 'FS', name: 'Fatou Sanogo', score: 700, badge: 'Or', status: 'pending' },
    ];
  
    const history = [
      { tour: 8, date: '15 Oct 2025', beneficiary: 'Kouassi Yao', amount: '400,000 FCFA' },
      { tour: 7, date: '15 Sep 2025', beneficiary: 'Marie Koné', amount: '400,000 FCFA' },
      { tour: 6, date: '15 Août 2025', beneficiary: "Koffi N'Guessan", amount: '400,000 FCFA' },
    ];
  
    const getBadgeColor = (badge) => {
      switch (badge) {
        case 'Or':
          return '#F59E0B';
        case 'Argent':
          return '#94A3B8';
        case 'Bronze':
          return '#D97706';
        default:
          return '#94A3B8';
      }
    };
  
    const getStatusIcon = (status) => {
      switch (status) {
        case 'paid':
          return 'check-circle';
        case 'pending':
          return 'clock';
        case 'late':
          return 'alert-circle';
        default:
          return 'clock';
      }
    };
  
    const getStatusColor = (status) => {
      switch (status) {
        case 'paid':
          return '#10B981';
        case 'pending':
          return '#94A3B8';
        case 'late':
          return '#EF4444';
        default:
          return '#94A3B8';
      }
    };
  
    const renderMembers = () => (
      <View>
        <View style={styles.progressContainer}>
          <Text style={styles.tourText}>Tour en cours: 9/8</Text>
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '87.5%' }]} />
            </View>
          </View>
        </View>
  
        <View style={styles.membersList}>
          {members.map((member, index) => (
            <View key={index} style={styles.memberCard}>
              <View style={styles.memberAvatar}>
                <Text style={styles.memberInitials}>{member.initials}</Text>
              </View>
              <View style={styles.memberInfo}>
                <Text style={styles.memberName}>{member.name}</Text>
                <View style={styles.memberMeta}>
                  <Text style={styles.memberScore}>Score: {member.score}</Text>
                  <View style={[styles.badge, { borderColor: getBadgeColor(member.badge) }]}>
                    <Text style={[styles.badgeText, { color: getBadgeColor(member.badge) }]}>
                      {member.badge}
                    </Text>
                  </View>
                </View>
              </View>
              <Feather
                name={getStatusIcon(member.status)}
                size={20}
                color={getStatusColor(member.status)}
              />
            </View>
          ))}
        </View>
      </View>
    );
  
    const renderRules = () => (
      <View style={styles.rulesCard}>
        <View style={styles.rulesSection}>
          <Text style={styles.rulesSectionTitle}>Règles du groupe</Text>
          <View style={styles.rulesList}>
            <View style={styles.ruleItem}>
              <Text style={styles.ruleBullet}>•</Text>
              <Text style={styles.ruleText}>Cotisation mensuelle de 50,000 FCFA</Text>
            </View>
            <View style={styles.ruleItem}>
              <Text style={styles.ruleBullet}>•</Text>
              <Text style={styles.ruleText}>Paiement avant le 25 de chaque mois</Text>
            </View>
            <View style={styles.ruleItem}>
              <Text style={styles.ruleBullet}>•</Text>
              <Text style={styles.ruleText}>Ordre de distribution basé sur le tirage au sort initial</Text>
            </View>
            <View style={styles.ruleItem}>
              <Text style={styles.ruleBullet}>•</Text>
              <Text style={styles.ruleText}>Pénalité de 5,000 FCFA en cas de retard de plus de 3 jours</Text>
            </View>
            <View style={styles.ruleItem}>
              <Text style={styles.ruleBullet}>•</Text>
              <Text style={styles.ruleText}>Exclusion après 2 retards consécutifs</Text>
            </View>
          </View>
        </View>
  
        <View style={styles.divider} />
  
        <View style={styles.rulesSection}>
          <Text style={styles.rulesSectionTitle}>Documents</Text>
          <TouchableOpacity style={styles.documentButton}>
            <Feather name="file-text" size={20} color="#6B7280" />
            <Text style={styles.documentButtonText}>Règlement intérieur</Text>
            <Feather name="download" size={16} color="#9CA3AF" />
          </TouchableOpacity>
        </View>
  
        <View style={styles.divider} />
  
        <View style={styles.rulesSection}>
          <Text style={styles.rulesSectionTitle}>Administrateurs</Text>
          <View style={styles.adminContainer}>
            <View style={styles.adminAvatar}>
              <Text style={styles.adminInitials}>KY</Text>
            </View>
            <View>
              <Text style={styles.adminName}>Kouassi Yao</Text>
              <Text style={styles.adminRole}>Créateur du groupe</Text>
            </View>
          </View>
        </View>
      </View>
    );
  
    const renderHistory = () => (
      <View style={styles.historyList}>
        {history.map((item, index) => (
          <View key={index} style={styles.historyCard}>
            <View style={styles.historyHeader}>
              <View>
                <Text style={styles.historyTour}>Tour {item.tour}</Text>
                <Text style={styles.historyDate}>{item.date}</Text>
              </View>
              <View style={styles.completedBadge}>
                <Text style={styles.completedBadgeText}>Complété</Text>
              </View>
            </View>
            <View style={styles.historyDetails}>
              <View style={styles.historyRow}>
                <Text style={styles.historyLabel}>Bénéficiaire:</Text>
                <Text style={styles.historyValue}>{item.beneficiary}</Text>
              </View>
              <View style={styles.historyRow}>
                <Text style={styles.historyLabel}>Montant reçu:</Text>
                <Text style={styles.historyAmount}>{item.amount}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView style={styles.scrollView}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton}
            onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={24} color="#FFF" />
            </TouchableOpacity>
  
            <View style={styles.headerContent}>
              <View style={styles.headerIcon}>
                <Feather name="users" size={32} color="#FFF" />
              </View>
              <View style={styles.headerInfo}>
                <Text style={styles.headerTitle}>Famille Kouassi</Text>
                <Text style={styles.headerSubtitle}>8 membres actifs</Text>
              </View>
              <View style={styles.activeStatusBadge}>
                <Text style={styles.activeStatusText}>Actif</Text>
              </View>
            </View>
  
            <View style={styles.statsContainer}>
              <View style={styles.statCard}>
                <Text style={styles.statLabel}>Cotisation</Text>
                <Text style={styles.statValue}>50,000 FCFA</Text>
              </View>
              <View style={styles.statCard}>
                <Text style={styles.statLabel}>Fonds total</Text>
                <Text style={styles.statValue}>400,000 FCFA</Text>
              </View>
            </View>
          </View>
  
          {/* Next Payment Alert */}
          <View style={styles.alertContainer}>
            <View style={styles.alert}>
              <Feather name="clock" size={20} color="#F59E0B" />
              <View style={styles.alertContent}>
                <Text style={styles.alertTitle}>Prochain paiement</Text>
                <Text style={styles.alertSubtitle}>Dans 5 jours - 25 Oct 2025</Text>
              </View>
              <TouchableOpacity style={styles.payButton}>
                <Text style={styles.payButtonText}>Payer</Text>
              </TouchableOpacity>
            </View>
          </View>
  
          {/* Tabs */}
          <View style={styles.tabsContainer}>
            <View style={styles.tabs}>
              <TouchableOpacity
                style={[styles.tab, activeTab === 'members' && styles.activeTab]}
                onPress={() => setActiveTab('members')}
              >
                <Text style={[styles.tabText, activeTab === 'members' && styles.activeTabText]}>
                  Membres
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tab, activeTab === 'rules' && styles.activeTab]}
                onPress={() => setActiveTab('rules')}
              >
                <Text style={[styles.tabText, activeTab === 'rules' && styles.activeTabText]}>
                  Règles
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tab, activeTab === 'history' && styles.activeTab]}
                onPress={() => setActiveTab('history')}
              >
                <Text style={[styles.tabText, activeTab === 'history' && styles.activeTabText]}>
                  Historique
                </Text>
              </TouchableOpacity>
            </View>
          </View>
  
          {/* Content */}
          <View style={styles.content}>
            {activeTab === 'members' && renderMembers()}
            {activeTab === 'rules' && renderRules()}
            {activeTab === 'history' && renderHistory()}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F9FAFB',
    },
    scrollView: {
      flex: 1,
    },
    header: {
      backgroundColor: '#10B981',
      paddingHorizontal: 24,
      paddingTop: 24,
      paddingBottom: 24,
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
    },
    backButton: {
      width: 40,
      height: 40,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 24,
    },
    headerContent: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 24,
    },
    headerIcon: {
      width: 64,
      height: 64,
      borderRadius: 32,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 16,
    },
    headerInfo: {
      flex: 1,
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: '#FFF',
      marginBottom: 4,
      letterSpacing: -0.5,
    },
    headerSubtitle: {
      fontSize: 14,
      color: 'rgba(255, 255, 255, 0.9)',
    },
    activeStatusBadge: {
      backgroundColor: '#FFF',
      paddingHorizontal: 12,
      paddingVertical: 4,
      borderRadius: 16,
    },
    activeStatusText: {
      color: '#10B981',
      fontSize: 14,
      fontWeight: '500',
    },
    statsContainer: {
      flexDirection: 'row',
      gap: 12,
    },
    statCard: {
      flex: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 12,
      padding: 16,
    },
    statLabel: {
      fontSize: 14,
      color: 'rgba(255, 255, 255, 0.9)',
      marginBottom: 4,
    },
    statValue: {
      fontSize: 20,
      fontWeight: '600',
      color: '#FFF',
    },
    alertContainer: {
      paddingHorizontal: 24,
      marginTop: -16,
      marginBottom: 24,
    },
    alert: {
      backgroundColor: 'rgba(245, 158, 11, 0.1)',
      borderWidth: 1,
      borderColor: 'rgba(245, 158, 11, 0.2)',
      borderRadius: 12,
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    alertContent: {
      flex: 1,
    },
    alertTitle: {
      fontSize: 14,
      fontWeight: '500',
      marginBottom: 2,
    },
    alertSubtitle: {
      fontSize: 12,
      color: '#6B7280',
    },
    payButton: {
      backgroundColor: '#F59E0B',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 8,
    },
    payButtonText: {
      color: '#FFF',
      fontSize: 14,
      fontWeight: '500',
    },
    tabsContainer: {
      paddingHorizontal: 24,
      marginBottom: 24,
    },
    tabs: {
      backgroundColor: '#FFF',
      borderWidth: 1,
      borderColor: '#E5E7EB',
      borderRadius: 12,
      padding: 4,
      flexDirection: 'row',
      gap: 4,
    },
    tab: {
      flex: 1,
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 8,
      alignItems: 'center',
    },
    activeTab: {
      backgroundColor: '#10B981',
    },
    tabText: {
      fontSize: 14,
      fontWeight: '500',
      color: '#6B7280',
    },
    activeTabText: {
      color: '#FFF',
    },
    content: {
      paddingHorizontal: 24,
      paddingBottom: 24,
    },
    progressContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    tourText: {
      fontSize: 14,
      fontWeight: '500',
    },
    progressBarContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    progressBar: {
      width: 96,
      height: 8,
      backgroundColor: '#E5E7EB',
      borderRadius: 4,
      overflow: 'hidden',
    },
    progressFill: {
      height: '100%',
      backgroundColor: '#10B981',
      borderRadius: 4,
    },
    membersList: {
      gap: 12,
    },
    memberCard: {
      backgroundColor: '#FFF',
      borderWidth: 1,
      borderColor: '#E5E7EB',
      borderRadius: 12,
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 16,
    },
    memberAvatar: {
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    memberInitials: {
      color: '#10B981',
      fontSize: 16,
      fontWeight: '600',
    },
    memberInfo: {
      flex: 1,
    },
    memberName: {
      fontSize: 16,
      fontWeight: '500',
      marginBottom: 4,
    },
    memberMeta: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    memberScore: {
      fontSize: 12,
      color: '#6B7280',
    },
    badge: {
      borderWidth: 1,
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderRadius: 4,
    },
    badgeText: {
      fontSize: 12,
      fontWeight: '500',
    },
    rulesCard: {
      backgroundColor: '#FFF',
      borderWidth: 1,
      borderColor: '#E5E7EB',
      borderRadius: 12,
      padding: 24,
    },
    rulesSection: {
      marginBottom: 24,
    },
    rulesSectionTitle: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 12,
    },
    rulesList: {
      gap: 12,
    },
    ruleItem: {
      flexDirection: 'row',
      gap: 12,
    },
    ruleBullet: {
      color: '#10B981',
      fontWeight: '600',
    },
    ruleText: {
      flex: 1,
      fontSize: 14,
      color: '#6B7280',
      lineHeight: 20,
    },
    divider: {
      height: 1,
      backgroundColor: '#E5E7EB',
      marginBottom: 24,
    },
    documentButton: {
      borderWidth: 1,
      borderColor: '#E5E7EB',
      borderRadius: 8,
      padding: 12,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    documentButtonText: {
      flex: 1,
      fontSize: 14,
      fontWeight: '500',
    },
    adminContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    adminAvatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#10B981',
      alignItems: 'center',
      justifyContent: 'center',
    },
    adminInitials: {
      color: '#FFF',
      fontSize: 14,
      fontWeight: '600',
    },
    adminName: {
      fontSize: 14,
      fontWeight: '500',
      marginBottom: 2,
    },
    adminRole: {
      fontSize: 12,
      color: '#6B7280',
    },
    historyList: {
      gap: 12,
    },
    historyCard: {
      backgroundColor: '#FFF',
      borderWidth: 1,
      borderColor: '#E5E7EB',
      borderRadius: 12,
      padding: 16,
    },
    historyHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 12,
    },
    historyTour: {
      fontSize: 16,
      fontWeight: '500',
      marginBottom: 4,
    },
    historyDate: {
      fontSize: 14,
      color: '#6B7280',
    },
    completedBadge: {
      backgroundColor: '#10B981',
      paddingHorizontal: 12,
      paddingVertical: 4,
      borderRadius: 16,
    },
    completedBadgeText: {
      color: '#FFF',
      fontSize: 12,
      fontWeight: '500',
    },
    historyDetails: {
      gap: 8,
    },
    historyRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    historyLabel: {
      fontSize: 14,
      color: '#6B7280',
    },
    historyValue: {
      fontSize: 14,
      fontWeight: '500',
    },
    historyAmount: {
      fontSize: 14,
      fontWeight: '500',
      color: '#10B981',
    },
  });