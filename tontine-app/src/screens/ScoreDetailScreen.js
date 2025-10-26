import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    StatusBar,
  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
// import styles from '../theme/styles';
import AIRecommendation from '../components/AIRecommendation';
  
  export default function ScoreDetailScreen({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView style={styles.scrollView}>
          {/* Header */}
          <LinearGradient
            colors={['#10b981', '#059669']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.header}
          >
            <TouchableOpacity style={styles.backButton}
            onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Votre TontiScore</Text>
            <Text style={styles.headerSubtitle}>Suivez votre progression financière</Text>
          </LinearGradient>
  
          <View style={styles.content}>
            {/* Score Overview Card */}
            <View style={styles.card}>
              <View style={styles.scoreContainer}>
                <LinearGradient
                  colors={['#fbbf24', '#f59e0b']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.scoreBadge}
                >
                  <Text style={styles.scoreNumber}>745</Text>
                </LinearGradient>
                <Text style={styles.scoreLevel}>Niveau Or</Text>
                <Text style={styles.scoreSubtext}>Encore 255 points pour atteindre Platine</Text>
              </View>
  
              <View style={styles.progressBarContainer}>
                <View style={styles.progressBarBg}>
                  <LinearGradient
                    colors={['#10b981', '#fbbf24']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={[styles.progressBarFill, { width: '74.5%' }]}
                  />
                </View>
              </View>
  
              <View style={styles.levelsContainer}>
                <View style={styles.levelBox}>
                  <Text style={styles.levelLabel}>Argent</Text>
                  <Text style={styles.levelRange}>500-800</Text>
                </View>
                <View style={[styles.levelBox, styles.levelBoxActive]}>
                  <Text style={styles.levelLabelActive}>Or</Text>
                  <Text style={styles.levelRangeActive}>800-1000</Text>
                </View>
                <View style={styles.levelBox}>
                  <Text style={styles.levelLabel}>Platine</Text>
                  <Text style={styles.levelRange}>1000+</Text>
                </View>
              </View>
            </View>
  
            {/* AI Recommendations Card */}
            <View style={styles.card}>
              <View style={styles.aiHeader}>
                <LinearGradient
                  colors={['#8b5cf6', '#7c3aed']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.aiIcon}
                >
                  <Feather name="cpu" size={20} color="#fff" />
                </LinearGradient>
                <View style={styles.aiHeaderText}>
                  <Text style={styles.aiTitle}>Conseils Personnalisés IA</Text>
                  <Text style={styles.aiSubtitle}>Optimisez votre score facilement</Text>
                </View>
              </View>
  
              {/* Advice Card 1 */}
              <LinearGradient
                colors={['#fef3c7', '#fde68a']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.adviceCard}
              >
                <View style={styles.adviceHeader}>
                  <View style={styles.adviceIconContainer}>
                    <Feather name="zap" size={20} color="#f59e0b" />
                  </View>
                  <View style={styles.adviceBadge}>
                    <Feather name="arrow-up" size={12} color="#fff" />
                    <Text style={styles.adviceBadgeText}>+10</Text>
                  </View>
                </View>
                <Text style={styles.adviceTitle}>Payez 2 jours à l'avance</Text>
                <Text style={styles.adviceDescription}>
                  Gagnez +10 points en payant avant l'échéance
                </Text>
                <TouchableOpacity style={styles.adviceButton}>
                  <Text style={styles.adviceButtonText}>Voir comment</Text>
                  <Feather name="arrow-right" size={16} color="#d97706" />
                </TouchableOpacity>
              </LinearGradient>
  
              {/* Advice Card 2 */}
              <LinearGradient
                colors={['#dbeafe', '#bfdbfe']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.adviceCard}
              >
                <View style={styles.adviceHeader}>
                  <View style={styles.adviceIconContainer}>
                    <Feather name="award" size={20} color="#3b82f6" />
                  </View>
                  <View style={[styles.adviceBadge, { backgroundColor: '#3b82f6' }]}>
                    <Feather name="arrow-up" size={12} color="#fff" />
                    <Text style={styles.adviceBadgeText}>+15</Text>
                  </View>
                </View>
                <Text style={styles.adviceTitle}>Rejoignez une nouvelle tontine</Text>
                <Text style={styles.adviceDescription}>
                  Diversifiez votre profil pour +15 points
                </Text>
                <TouchableOpacity style={styles.adviceButton}>
                  <Text style={[styles.adviceButtonText, { color: '#2563eb' }]}>Explorer</Text>
                  <Feather name="arrow-right" size={16} color="#2563eb" />
                </TouchableOpacity>
              </LinearGradient>
  
              {/* Advice Card 3 */}
              <LinearGradient
                colors={['#d1fae5', '#a7f3d0']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.adviceCard}
              >
                <View style={styles.adviceHeader}>
                  <View style={styles.adviceIconContainer}>
                    <Feather name="check-circle" size={20} color="#10b981" />
                  </View>
                  <View style={[styles.adviceBadge, { backgroundColor: '#10b981' }]}>
                    <Feather name="arrow-up" size={12} color="#fff" />
                    <Text style={styles.adviceBadgeText}>+10</Text>
                  </View>
                </View>
                <Text style={styles.adviceTitle}>Maintenez votre régularité</Text>
                <Text style={styles.adviceDescription}>
                  6 mois sans retard = Niveau Or garanti
                </Text>
                <TouchableOpacity style={styles.adviceButton}>
                  <Text style={[styles.adviceButtonText, { color: '#059669' }]}>Voir progression</Text>
                  <Feather name="arrow-right" size={16} color="#059669" />
                </TouchableOpacity>
              </LinearGradient>
            </View>
  
            {/* Score Factors */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Facteurs de calcul</Text>
  
              <View style={styles.factorContainer}>
                <View style={styles.factorHeader}>
                  <View style={styles.factorLabelContainer}>
                    <Feather name="clock" size={16} color="#10b981" />
                    <Text style={styles.factorLabel}>Ponctualité des paiements</Text>
                  </View>
                  <View style={styles.factorBadgePositive}>
                    <Text style={styles.factorBadgeText}>Très positif</Text>
                  </View>
                </View>
                <View style={styles.progressBarBg}>
                  <View style={[styles.progressBarFillGreen, { width: '95%' }]} />
                </View>
                <View style={styles.factorFooter}>
                  <Text style={styles.factorFooterText}>19/20 paiements à temps</Text>
                  <Text style={styles.factorFooterPercent}>95%</Text>
                </View>
              </View>
  
              <View style={styles.factorContainer}>
                <View style={styles.factorHeader}>
                  <View style={styles.factorLabelContainer}>
                    <Feather name="calendar" size={16} color="#10b981" />
                    <Text style={styles.factorLabel}>Historique de participation</Text>
                  </View>
                  <View style={styles.factorBadgePositive}>
                    <Text style={styles.factorBadgeText}>Positif</Text>
                  </View>
                </View>
                <View style={styles.progressBarBg}>
                  <View style={[styles.progressBarFillGreen, { width: '88%' }]} />
                </View>
                <View style={styles.factorFooter}>
                  <Text style={styles.factorFooterText}>8 mois d'activité</Text>
                  <Text style={styles.factorFooterPercent}>88%</Text>
                </View>
              </View>
  
              <View style={styles.factorContainer}>
                <View style={styles.factorHeader}>
                  <View style={styles.factorLabelContainer}>
                    <Feather name="users" size={16} color="#6b7280" />
                    <Text style={styles.factorLabel}>Ancienneté sur la plateforme</Text>
                  </View>
                  <View style={styles.factorBadgeNeutral}>
                    <Text style={styles.factorBadgeTextNeutral}>Neutre</Text>
                  </View>
                </View>
                <View style={styles.progressBarBg}>
                  <View style={[styles.progressBarFillGray, { width: '60%' }]} />
                </View>
                <View style={styles.factorFooter}>
                  <Text style={styles.factorFooterText}>Membre depuis 8 mois</Text>
                  <Text style={styles.factorFooterPercent}>60%</Text>
                </View>
              </View>
  
              <View style={styles.factorContainer}>
                <View style={styles.factorHeader}>
                  <View style={styles.factorLabelContainer}>
                    <Feather name="trending-up" size={16} color="#3b82f6" />
                    <Text style={styles.factorLabel}>Diversité des tontines</Text>
                  </View>
                  <View style={styles.factorBadgeBlue}>
                    <Text style={styles.factorBadgeTextBlue}>Très bon</Text>
                  </View>
                </View>
                <View style={styles.progressBarBg}>
                  <View style={[styles.progressBarFillBlue, { width: '85%' }]} />
                </View>
                <View style={styles.factorFooter}>
                  <Text style={styles.factorFooterText}>3 tontines actives</Text>
                  <Text style={styles.factorFooterPercent}>85%</Text>
                </View>
              </View>
            </View>
  
            {/* Evolution Chart */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Évolution sur 6 mois</Text>
  
              <View style={styles.chartContainer}>
                <View style={styles.chartBar}>
                  <View style={[styles.chartBarFill, { height: '65%', opacity: 0.4 }]} />
                  <Text style={styles.chartLabel}>Mai</Text>
                </View>
                <View style={styles.chartBar}>
                  <View style={[styles.chartBarFill, { height: '68%', opacity: 0.5 }]} />
                  <Text style={styles.chartLabel}>Juin</Text>
                </View>
                <View style={styles.chartBar}>
                  <View style={[styles.chartBarFill, { height: '69.5%', opacity: 0.6 }]} />
                  <Text style={styles.chartLabel}>Juil</Text>
                </View>
                <View style={styles.chartBar}>
                  <View style={[styles.chartBarFill, { height: '71%', opacity: 0.7 }]} />
                  <Text style={styles.chartLabel}>Août</Text>
                </View>
                <View style={styles.chartBar}>
                  <View style={[styles.chartBarFill, { height: '72%', opacity: 0.8 }]} />
                  <Text style={styles.chartLabel}>Sept</Text>
                </View>
                <View style={styles.chartBar}>
                  <LinearGradient
                    colors={['#f59e0b', '#fbbf24']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0, y: 0 }}
                    style={[styles.chartBarFillGradient, { height: '74.5%' }]}
                  />
                  <Text style={styles.chartLabel}>Oct</Text>
                </View>
              </View>
  
              <View style={styles.chartFooter}>
                <Feather name="trending-up" size={16} color="#10b981" />
                <Text style={styles.chartFooterText}>+95 points ce mois</Text>
              </View>
            </View>
  
            {/* Benefits Card */}
            <View style={[styles.card, { marginBottom: 24 }]}>
              <View style={styles.benefitsHeader}>
                <Feather name="gift" size={20} color="#f59e0b" />
                <Text style={styles.cardTitle}>Avantages de votre niveau</Text>
              </View>
  
              <View style={styles.benefitItem}>
                <Feather name="check-circle" size={20} color="#10b981" />
                <Text style={styles.benefitText}>Taux préférentiel: 2% sur les crédits</Text>
              </View>
              <View style={styles.benefitItem}>
                <Feather name="check-circle" size={20} color="#10b981" />
                <Text style={styles.benefitText}>Montant maximum: 500,000 FCFA</Text>
              </View>
              <View style={styles.benefitItem}>
                <Feather name="check-circle" size={20} color="#10b981" />
                <Text style={styles.benefitText}>Approbation instantanée des prêts</Text>
              </View>
              <View style={styles.benefitItem}>
                <Feather name="check-circle" size={20} color="#10b981" />
                <Text style={styles.benefitText}>Badge Or visible dans les tontines</Text>
              </View>
              <View style={styles.benefitItem}>
                <Feather name="check-circle" size={20} color="#10b981" />
                <Text style={styles.benefitText}>Accès prioritaire aux nouvelles tontines</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f9fafb',
    },
    scrollView: {
      flex: 1,
    },
    header: {
      paddingHorizontal: 24,
      paddingTop: 32,
      paddingBottom: 48,
    },
    backButton: {
      marginBottom: 16,
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: '#fff',
      marginBottom: 8,
      letterSpacing: -0.5,
    },
    headerSubtitle: {
      fontSize: 14,
      color: 'rgba(255, 255, 255, 0.9)',
    },
    content: {
      paddingHorizontal: 24,
      marginTop: -24,
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 16,
      padding: 24,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 3,
      elevation: 2,
    },
    scoreContainer: {
      alignItems: 'center',
      marginBottom: 24,
    },
    scoreBadge: {
      width: 128,
      height: 128,
      borderRadius: 64,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 5,
    },
    scoreNumber: {
      fontSize: 36,
      fontWeight: '700',
      color: '#fff',
    },
    scoreLevel: {
      fontSize: 20,
      fontWeight: '600',
      color: '#111827',
      marginBottom: 4,
    },
    scoreSubtext: {
      fontSize: 14,
      color: '#6b7280',
    },
    progressBarContainer: {
      marginBottom: 16,
    },
    progressBarBg: {
      width: '100%',
      height: 8,
      backgroundColor: '#f3f4f6',
      borderRadius: 4,
      overflow: 'hidden',
    },
    progressBarFill: {
      height: '100%',
      borderRadius: 4,
    },
    progressBarFillGreen: {
      height: '100%',
      backgroundColor: '#10b981',
      borderRadius: 4,
    },
    progressBarFillGray: {
      height: '100%',
      backgroundColor: '#6b7280',
      borderRadius: 4,
    },
    progressBarFillBlue: {
      height: '100%',
      backgroundColor: '#3b82f6',
      borderRadius: 4,
    },
    levelsContainer: {
      flexDirection: 'row',
      gap: 8,
    },
    levelBox: {
      flex: 1,
      alignItems: 'center',
      padding: 12,
      backgroundColor: '#f9fafb',
      borderRadius: 8,
    },
    levelBoxActive: {
      backgroundColor: '#fef3c7',
      borderWidth: 1,
      borderColor: '#fcd34d',
    },
    levelLabel: {
      fontSize: 12,
      color: '#6b7280',
      marginBottom: 4,
    },
    levelLabelActive: {
      fontSize: 12,
      color: '#b45309',
      fontWeight: '500',
      marginBottom: 4,
    },
    levelRange: {
      fontSize: 12,
      color: '#6b7280',
      fontWeight: '500',
    },
    levelRangeActive: {
      fontSize: 12,
      color: '#d97706',
      fontWeight: '600',
    },
    aiHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      marginBottom: 20,
    },
    aiIcon: {
      width: 44,
      height: 44,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
    },
    aiHeaderText: {
      flex: 1,
    },
    aiTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: '#111827',
      letterSpacing: -0.5,
    },
    aiSubtitle: {
      fontSize: 14,
      color: '#6b7280',
    },
    adviceCard: {
      borderRadius: 16,
      padding: 16,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0.05)',
    },
    adviceHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 12,
    },
    adviceIconContainer: {
      width: 44,
      height: 44,
      borderRadius: 12,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    adviceBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f59e0b',
      paddingHorizontal: 10,
      paddingVertical: 6,
      borderRadius: 12,
      gap: 4,
    },
    adviceBadgeText: {
      fontSize: 12,
      fontWeight: '600',
      color: '#fff',
    },
    adviceTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: '#111827',
      marginBottom: 6,
    },
    adviceDescription: {
      fontSize: 14,
      color: '#374151',
      lineHeight: 20,
      marginBottom: 14,
    },
    adviceButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
    },
    adviceButtonText: {
      fontSize: 14,
      fontWeight: '600',
      color: '#d97706',
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: '#111827',
      marginBottom: 16,
      letterSpacing: -0.5,
    },
    factorContainer: {
      marginBottom: 20,
    },
    factorHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8,
    },
    factorLabelContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      flex: 1,
    },
    factorLabel: {
      fontSize: 14,
      fontWeight: '500',
      color: '#111827',
    },
    factorBadgePositive: {
      backgroundColor: '#d1fae5',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 12,
    },
    factorBadgeText: {
      fontSize: 12,
      fontWeight: '500',
      color: '#059669',
    },
    factorBadgeNeutral: {
      backgroundColor: '#f3f4f6',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 12,
    },
    factorBadgeTextNeutral: {
      fontSize: 12,
      fontWeight: '500',
      color: '#6b7280',
    },
    factorBadgeBlue: {
      backgroundColor: '#dbeafe',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 12,
    },
    factorBadgeTextBlue: {
      fontSize: 12,
      fontWeight: '500',
      color: '#2563eb',
    },
    factorFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 8,
    },
    factorFooterText: {
      fontSize: 12,
      color: '#6b7280',
    },
    factorFooterPercent: {
      fontSize: 12,
      fontWeight: '600',
      color: '#111827',
    },
    chartContainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      height: 160,
      marginBottom: 16,
    },
    chartBar: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      height: '100%',
    },
    chartBarFill: {
      width: '100%',
      backgroundColor: '#a7f3d0',
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
    },
    chartBarFillGradient: {
      width: '100%',
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
    },
    chartLabel: {
      fontSize: 12,
      color: '#6b7280',
      marginTop: 8,
    },
    chartFooter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
    },
    chartFooterText: {
      fontSize: 14,
      fontWeight: '500',
      color: '#10b981',
    },
    benefitsHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginBottom: 16,
    },
    benefitItem: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 12,
      marginBottom: 12,
    },
    benefitText: {
      fontSize: 14,
      color: '#374151',
      flex: 1,
      paddingTop: 2,
    },
  });