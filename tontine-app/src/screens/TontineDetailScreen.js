import React from 'react';
import {StatusBar,  View,  Text,  TouchableOpacity,  ScrollView} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import themeStyles from '../theme/styles';

import StatsGrid from '../components/StatsGrid';
import AlertCard from '../components/AlertCard';
import Membres from '../components/Membres';
import TransactionHistory from '../components/TransactionHistory';
import ActionButtonsRow from '../components/AIRecommendation';

export default function TontineDetailScreen({ navigation }) {
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
          <View style={styles.tontineDetailHeader}>
            <View style={styles.tontineDetailIcon}>
              <Feather name="users" size={32} color="#fff" />
            </View>
            <View>
              <Text style={styles.detailHeaderTitle}>Famille Kouassi</Text>
              <Text style={styles.detailHeaderSubtitle}>8 membres • Tour 3/8</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.detailContent}>
          {/* Next Payment Alert */}
          <AlertCard/>

          {/* Stats Grid */}
          <StatsGrid/>

          {/* Members */}
          <Membres/>

          {/* Transaction History */}
          <TransactionHistory/>
          

          {/* Action Buttons */}
          <ActionButtonsRow/>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}