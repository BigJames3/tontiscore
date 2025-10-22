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
import TransactionList from '../components/TransactionList';
import PaymentMethods from '../components/PaymentMethods';

export default function WalletScreen({ navigation }) {
    // const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.scrollView}>
        <LinearGradient
          colors={['#3B82F6', '#2563EB']}
          style={styles.detailHeader}
        >
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Feather name="arrow-left" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.detailHeaderTitle}>Mon Wallet</Text>

          <View style={styles.walletBalanceCard}>
            <Text style={styles.walletBalanceLabel}>Solde disponible</Text>
            <Text style={styles.walletBalanceAmount}>45 000 FCFA</Text>
            <View style={styles.walletButtonsRow}>
              <TouchableOpacity style={styles.walletPrimaryButton}>
                <Feather name="plus" size={16} color="#2563EB" />
                <Text style={styles.walletPrimaryButtonText}>Recharger</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.walletSecondaryButton}>
                <Feather name="send" size={16} color="#fff" />
                <Text style={styles.walletSecondaryButtonText}>Envoyer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.detailContent}>
          {/* Payment Methods */}
          <PaymentMethods/>

          {/* Transactions */}
          <TransactionList/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}