import React from 'react';
import { StatusBar, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../theme/styles'; // on change le nom à l'import 
import { useNavigation } from '@react-navigation/native';

export default function CreditScreen({ navigation }) {
    // const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.scrollView}>
        <LinearGradient
          colors={['#F59E0B', '#D97706']}
          style={styles.detailHeader}
        >
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Feather name="arrow-left" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.detailHeaderTitle}>Microcrédit</Text>
          <Text style={styles.detailHeaderSubtitle}>
            Obtenez un prêt selon votre score
          </Text>
        </LinearGradient>

        <View style={styles.detailContent}>
          {/* Eligibility Card */}
          <View style={styles.eligibilityCard}>
            <View style={styles.eligibilityContent}>
              <View>
                <Text style={styles.eligibilityLabel}>Montant maximum</Text>
                <Text style={styles.eligibilityAmount}>150 000 FCFA</Text>
              </View>
              <LinearGradient
                colors={['#10B981', '#059669']}
                style={styles.eligibilityIcon}
              >
                <Feather name="check-circle" size={32} color="#fff" />
              </LinearGradient>
            </View>
            <View style={styles.eligibilityAlert}>
              <Text style={styles.eligibilityAlertText}>
                Félicitations ! Vous êtes éligible au microcrédit avec votre
                score de <Text style={styles.boldText}>720 points</Text>
              </Text>
            </View>
          </View>

          {/* Loan Simulator */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Simuler votre prêt</Text>

            <View style={styles.sliderSection}>
              <Text style={styles.sliderLabel}>Montant souhaité</Text>
              <Text style={styles.sliderValue}>75 000 FCFA</Text>
              <View style={styles.sliderTrack}>
                <View style={[styles.sliderFill, { width: '50%' }]} />
              </View>
              <View style={styles.sliderLabels}>
                <Text style={styles.sliderLabelText}>10 000 FCFA</Text>
                <Text style={styles.sliderLabelText}>150 000 FCFA</Text>
              </View>
            </View>

            <View style={styles.durationSection}>
              <Text style={styles.sliderLabel}>Durée de remboursement</Text>
              <View style={styles.durationGrid}>
                <TouchableOpacity style={styles.durationOption}>
                  <Text style={styles.durationOptionText}>3 mois</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.durationOption, styles.durationOptionActive]}
                >
                  <Text style={styles.durationOptionTextActive}>6 mois</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.durationOption}>
                  <Text style={styles.durationOptionText}>9 mois</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.durationOption}>
                  <Text style={styles.durationOptionText}>12 mois</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.loanSummary}>
              <View style={styles.loanSummaryRow}>
                <Text style={styles.loanSummaryLabel}>Taux d'intérêt</Text>
                <Text style={styles.loanSummaryValue}>2.5% / mois</Text>
              </View>
              <View style={styles.loanSummaryRow}>
                <Text style={styles.loanSummaryLabel}>Mensualité</Text>
                <Text style={styles.loanSummaryValue}>13 750 FCFA</Text>
              </View>
              <View style={styles.loanSummaryRow}>
                <Text style={styles.loanSummaryLabel}>
                  Montant total à rembourser
                </Text>
                <Text style={styles.loanSummaryTotal}>82 500 FCFA</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.loanButton}>
              <Text style={styles.loanButtonText}>Demander ce prêt</Text>
            </TouchableOpacity>
          </View>

          {/* Benefits */}
          <LinearGradient
            colors={['#DBEAFE', '#BFDBFE']}
            style={styles.benefitsCard}
          >
            <Text style={styles.benefitsTitle}>Avantages TontiScore</Text>

            <View style={styles.benefitItem}>
              <View style={styles.benefitIcon}>
                <Feather name="zap" size={16} color="#fff" />
              </View>
              <View style={styles.benefitContent}>
                <Text style={styles.benefitTitle}>Validation instantanée</Text>
                <Text style={styles.benefitText}>
                  Réponse en moins de 5 minutes
                </Text>
              </View>
            </View>

            <View style={styles.benefitItem}>
              <View style={styles.benefitIcon}>
                <Feather name="percent" size={16} color="#fff" />
              </View>
              <View style={styles.benefitContent}>
                <Text style={styles.benefitTitle}>Taux préférentiels</Text>
                <Text style={styles.benefitText}>
                  Plus votre score est élevé, moins vous payez
                </Text>
              </View>
            </View>

            <View style={styles.benefitItem}>
              <View style={styles.benefitIcon}>
                <Feather name="shield" size={16} color="#fff" />
              </View>
              <View style={styles.benefitContent}>
                <Text style={styles.benefitTitle}>Sans garantie</Text>
                <Text style={styles.benefitText}>
                  Votre score est votre garantie
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}