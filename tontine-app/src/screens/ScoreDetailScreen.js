import React from 'react';
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import themeStyles from '../theme/styles';
import { useNavigation } from '@react-navigation/native';
import AIRecommendation from '../components/AIRecommendation';

export default function ScoreDetailScreen({ navigation }) {
  // const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.scrollView}>
        <LinearGradient
          colors={['#10B981', '#059669']}
          style={styles.detailHeader}
        >
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Feather name="arrow-left" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.detailHeaderTitle}>Votre TontiScore</Text>
          <Text style={styles.detailHeaderSubtitle}>
            Suivez votre progression financière
          </Text>
        </LinearGradient>

        <View style={styles.detailContent}>
          <View style={styles.scoreOverviewCard}>
            <LinearGradient
              colors={['#FBBF24', '#F59E0B']}
              style={styles.scoreCircle}
            >
              <Text style={styles.scoreCircleText}>720</Text>
            </LinearGradient>
            <Text style={styles.scoreLevelText}>Niveau Argent</Text>
            <Text style={styles.scoreProgressText}>
              Encore 80 points pour atteindre Or
            </Text>

            <View style={styles.progressBar}>
              <LinearGradient
                colors={['#10B981', '#FBBF24']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[styles.progressFill, { width: '72%' }]}
              />
            </View>

            <View style={styles.levelGrid}>
              <View style={styles.levelItem}>
                <Text style={styles.levelName}>Bronze</Text>
                <Text style={styles.levelRange}>0-500</Text>
              </View>
              <View style={styles.levelItem}>
                <Text style={[styles.levelName, styles.levelNameActive]}>
                  Argent
                </Text>
                <Text style={[styles.levelRange, styles.levelRangeActive]}>
                  500-800
                </Text>
              </View>
              <View style={styles.levelItem}>
                <Text style={styles.levelName}>Or</Text>
                <Text style={styles.levelRange}>800-1000</Text>
              </View>
            </View>
          </View>

          {/* AI Recommendation */}          
          <AIRecommendation/>
         

          {/* Score Factors */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Facteurs de calcul</Text>

            <View style={styles.factorItem}>
              <View style={styles.factorHeader}>
                <View style={styles.factorLabelContainer}>
                  <Feather name="clock" size={16} color="#059669" />
                  <Text style={styles.factorLabel}>Ponctualité</Text>
                </View>
                <Text style={styles.factorValue}>Excellent</Text>
              </View>
              <View style={styles.factorProgressBar}>
                <View
                  style={[
                    styles.factorProgressFill,
                    { width: '95%', backgroundColor: '#10B981' },
                  ]}
                />
              </View>
              <Text style={styles.factorDetail}>19/20 paiements à temps</Text>
            </View>

            <View style={styles.factorItem}>
              <View style={styles.factorHeader}>
                <View style={styles.factorLabelContainer}>
                  <Feather name="calendar" size={16} color="#D97706" />
                  <Text style={styles.factorLabel}>Historique</Text>
                </View>
                <Text style={[styles.factorValue, { color: '#D97706' }]}>
                  Bon
                </Text>
              </View>
              <View style={styles.factorProgressBar}>
                <View
                  style={[
                    styles.factorProgressFill,
                    { width: '70%', backgroundColor: '#F59E0B' },
                  ]}
                />
              </View>
              <Text style={styles.factorDetail}>8 mois d'activité</Text>
            </View>

            <View style={styles.factorItem}>
              <View style={styles.factorHeader}>
                <View style={styles.factorLabelContainer}>
                  <Feather name="trending-up" size={16} color="#2563EB" />
                  <Text style={styles.factorLabel}>Participation</Text>
                </View>
                <Text style={[styles.factorValue, { color: '#2563EB' }]}>
                  Très bon
                </Text>
              </View>
              <View style={styles.factorProgressBar}>
                <View
                  style={[
                    styles.factorProgressFill,
                    { width: '85%', backgroundColor: '#3B82F6' },
                  ]}
                />
              </View>
              <Text style={styles.factorDetail}>3 tontines actives</Text>
            </View>
          </View>

          {/* Score History Chart */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Évolution sur 6 mois</Text>
            <View style={styles.chartContainer}>
              <View style={styles.chartBar}>
                <View style={[styles.bar, { height: '45%', opacity: 0.4 }]} />
                <Text style={styles.chartLabel}>Janv</Text>
              </View>
              <View style={styles.chartBar}>
                <View style={[styles.bar, { height: '52%', opacity: 0.5 }]} />
                <Text style={styles.chartLabel}>Fév</Text>
              </View>
              <View style={styles.chartBar}>
                <View style={[styles.bar, { height: '60%', opacity: 0.6 }]} />
                <Text style={styles.chartLabel}>Mar</Text>
              </View>
              <View style={styles.chartBar}>
                <View style={[styles.bar, { height: '68%', opacity: 0.7 }]} />
                <Text style={styles.chartLabel}>Avr</Text>
              </View>
              <View style={styles.chartBar}>
                <View style={[styles.bar, { height: '70%', opacity: 0.8 }]} />
                <Text style={styles.chartLabel}>Mai</Text>
              </View>
              <View style={styles.chartBar}>
                <LinearGradient
                  colors={['#FBBF24', '#F59E0B']}
                  style={[styles.bar, { height: '72%' }]}
                />
                <Text style={styles.chartLabel}>Juin</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}