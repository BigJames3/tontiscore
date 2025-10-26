import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Modal,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from '../theme/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';
import TransactionList from '../components/TransactionList';
import PaymentMethods from '../components/PaymentMethods';


import QRCode from 'react-native-qrcode-svg';

// Icônes simplifiées (utiliser react-native-vector-icons dans un vrai projet)
const Icon = ({ name, size = 20, color = '#000' }) => (
  <View style={{ width: size, height: size, backgroundColor: color, borderRadius: size / 4 }} />
);


export default function WalletScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('historique');
  const [balance, setBalance] = useState(250000);
  const [showQRModal, setShowQRModal] = useState(false);
  
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      type: 'sortie',
      title: 'Cotisation',
      subtitle: 'Famille Kouassi',
      amount: -50000,
      date: '20 Oct 2024 • 14:30',
      method: 'Orange Money',
    },
    {
      id: 2,
      type: 'entree',
      title: 'Tour reçu',
      subtitle: 'Amis du Campus',
      amount: 360000,
      date: '15 Oct 2024 • 09:15',
      method: 'Wallet',
    },
    {
      id: 3,
      type: 'entree',
      title: 'Recharge Wallet',
      subtitle: 'Orange Money',
      amount: 100000,
      date: '10 Oct 2024 • 16:45',
      method: 'Orange Money',
    },
    {
      id: 4,
      type: 'sortie',
      title: 'Cotisation',
      subtitle: 'Commerçants Adjamé',
      amount: -100000,
      date: '5 Oct 2024 • 10:00',
      method: 'Wallet',
    },
  ]);

  const styles = {
    container: {
      flex: 1,
      backgroundColor: '#F9FAFB',
    },
    header: {
      background: 'linear-gradient(to bottom right, #2563EB, #1E40AF, #1E3A8A)',
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
      paddingBottom: 32,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
    },
    statusBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 24,
      paddingVertical: 12,
    },
    statusText: {
      color: '#FFFFFF',
      fontSize: 12,
      fontWeight: '500',
    },
    statusIcons: {
      flexDirection: 'row',
      gap: 8,
    },
    navigation: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 24,
      paddingVertical: 16,
    },
    navButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    navTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: '#FFFFFF',
      letterSpacing: -0.5,
    },
    balanceCard: {
      marginHorizontal: 24,
      marginTop: 16,
      backgroundColor: '#FFFFFF',
      borderRadius: 16,
      padding: 24,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.15,
      shadowRadius: 16,
      elevation: 8,
    },
    balanceLabel: {
      fontSize: 12,
      color: '#6B7280',
      textAlign: 'center',
      marginBottom: 4,
    },
    balanceAmount: {
      fontSize: 36,
      fontWeight: '700',
      color: '#111827',
      textAlign: 'center',
      letterSpacing: -1,
    },
    balanceCurrency: {
      fontSize: 12,
      color: '#9CA3AF',
      textAlign: 'center',
      marginTop: 4,
    },
    buttonRow: {
      flexDirection: 'row',
      gap: 12,
      marginTop: 24,
    },
    primaryButton: {
      flex: 1,
      backgroundColor: '#2563EB',
      paddingVertical: 12,
      borderRadius: 12,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      shadowColor: '#2563EB',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 4,
    },
    secondaryButton: {
      flex: 1,
      backgroundColor: '#F3F4F6',
      paddingVertical: 12,
      borderRadius: 12,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
    },
    buttonText: {
      fontSize: 14,
      fontWeight: '500',
    },
    content: {
      paddingHorizontal: 24,
      marginTop: -12,
    },
    statsGrid: {
      flexDirection: 'row',
      gap: 16,
      marginBottom: 24,
    },
    statCard: {
      flex: 1,
      borderRadius: 12,
      padding: 16,
      borderWidth: 1,
    },
    statCardOut: {
      backgroundColor: '#FEF2F2',
      borderColor: '#FECACA',
    },
    statCardIn: {
      backgroundColor: '#F0FDF4',
      borderColor: '#BBF7D0',
    },
    statHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginBottom: 12,
    },
    statIcon: {
      width: 32,
      height: 32,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    statIconOut: {
      backgroundColor: '#DC2626',
    },
    statIconIn: {
      backgroundColor: '#16A34A',
    },
    statLabel: {
      fontSize: 12,
      fontWeight: '500',
    },
    statAmount: {
      fontSize: 24,
      fontWeight: '700',
      letterSpacing: -0.5,
    },
    statPeriod: {
      fontSize: 12,
      marginTop: 4,
    },
    tabContainer: {
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderColor: '#E5E7EB',
      borderRadius: 12,
      padding: 6,
      marginBottom: 24,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    tabRow: {
      flexDirection: 'row',
      gap: 4,
    },
    tab: {
      flex: 1,
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 8,
      alignItems: 'center',
    },
    activeTab: {
      backgroundColor: '#2563EB',
    },
    inactiveTab: {
      backgroundColor: 'transparent',
    },
    tabText: {
      fontSize: 14,
      fontWeight: '500',
    },
    activeTabText: {
      color: '#FFFFFF',
    },
    inactiveTabText: {
      color: '#6B7280',
    },
    transactionCard: {
      backgroundColor: '#FFFFFF',
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#E5E7EB',
      padding: 20,
      marginBottom: 24,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    transactionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    transactionTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: '#111827',
    },
    viewAllButton: {
      fontSize: 14,
      color: '#2563EB',
      fontWeight: '500',
    },
    transactionItem: {
      marginBottom: 16,
    },
    transactionRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 12,
    },
    transactionLeft: {
      flexDirection: 'row',
      gap: 12,
      flex: 1,
    },
    transactionIconContainer: {
      width: 40,
      height: 40,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    transactionIconOut: {
      backgroundColor: '#FEF2F2',
    },
    transactionIconIn: {
      backgroundColor: '#F0FDF4',
    },
    transactionInfo: {
      flex: 1,
    },
    transactionName: {
      fontSize: 14,
      fontWeight: '500',
      color: '#111827',
    },
    transactionSubtitle: {
      fontSize: 12,
      color: '#6B7280',
      marginTop: 2,
    },
    transactionRight: {
      alignItems: 'flex-end',
    },
    transactionAmount: {
      fontSize: 14,
      fontWeight: '600',
    },
    transactionAmountOut: {
      color: '#DC2626',
    },
    transactionAmountIn: {
      color: '#16A34A',
    },
    transactionCurrency: {
      fontSize: 12,
      color: '#9CA3AF',
      marginTop: 2,
    },
    transactionFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: '#F3F4F6',
      paddingTop: 12,
    },
    transactionDate: {
      fontSize: 12,
      color: '#6B7280',
    },
    transactionBadge: {
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 4,
    },
    badgeOrange: {
      backgroundColor: '#FFF7ED',
    },
    badgeBlue: {
      backgroundColor: '#EFF6FF',
    },
    badgeText: {
      fontSize: 12,
      fontWeight: '500',
    },
    badgeTextOrange: {
      color: '#9A3412',
    },
    badgeTextBlue: {
      color: '#1E40AF',
    },
    divider: {
      height: 1,
      backgroundColor: '#F3F4F6',
      marginVertical: 16,
    },
    rechargeContainer: {
      backgroundColor: '#FFFFFF',
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#E5E7EB',
      padding: 20,
      marginBottom: 24,
    },
    formLabel: {
      fontSize: 14,
      fontWeight: '500',
      color: '#374151',
      marginBottom: 8,
    },
    input: {
      backgroundColor: '#F9FAFB',
      borderWidth: 1,
      borderColor: '#E5E7EB',
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingVertical: 12,
      fontSize: 16,
      color: '#111827',
      marginBottom: 16,
    },
    operatorGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 12,
      marginBottom: 24,
    },
    operatorCard: {
      flex: 1,
      minWidth: '45%',
      backgroundColor: '#F9FAFB',
      borderWidth: 2,
      borderColor: '#E5E7EB',
      borderRadius: 12,
      padding: 16,
      alignItems: 'center',
    },
    operatorCardActive: {
      borderColor: '#2563EB',
      backgroundColor: '#EFF6FF',
    },
    operatorName: {
      fontSize: 14,
      fontWeight: '600',
      color: '#374151',
      marginTop: 8,
    },
    submitButton: {
      backgroundColor: '#2563EB',
      paddingVertical: 16,
      borderRadius: 12,
      alignItems: 'center',
      shadowColor: '#2563EB',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 4,
    },
    submitButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '600',
    },
    transferContainer: {
      backgroundColor: '#FFFFFF',
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#E5E7EB',
      padding: 20,
      marginBottom: 24,
    },
    qrButton: {
      backgroundColor: '#F3F4F6',
      paddingVertical: 12,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 16,
    },
    qrButtonText: {
      color: '#374151',
      fontSize: 14,
      fontWeight: '500',
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: '#FFFFFF',
      borderRadius: 16,
      padding: 24,
      alignItems: 'center',
      margin: 20,
      maxWidth: 320,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: '#111827',
      marginTop: 16,
      marginBottom: 8,
    },
    modalSubtitle: {
      fontSize: 14,
      color: '#6B7280',
      textAlign: 'center',
      marginBottom: 24,
    },
    modalCloseButton: {
      backgroundColor: '#2563EB',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
      width: '100%',
    },
    modalCloseText: {
      color: '#FFFFFF',
      fontSize: 14,
      fontWeight: '600',
      textAlign: 'center',
    },
  };

  const RechargeTab = () => {
    const [amount, setAmount] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedOperator, setSelectedOperator] = useState('');

    const operators = [
      { id: 'orange', name: 'Orange Money', color: '#FF6600' },
      { id: 'mtn', name: 'MTN Money', color: '#FFCC00' },
      { id: 'moov', name: 'Moov Money', color: '#0099CC' },
      { id: 'wave', name: 'Wave', color: '#00D4AA' },
    ];

    const handleRecharge = () => {
      if (amount && phoneNumber && selectedOperator) {
        const newBalance = balance + parseInt(amount);
        setBalance(newBalance);
        
        const newTransaction = {
          id: transactions.length + 1,
          type: 'entree',
          title: 'Recharge Wallet',
          subtitle: operators.find(op => op.id === selectedOperator)?.name,
          amount: parseInt(amount),
          date: new Date().toLocaleDateString('fr-FR') + ' • ' + new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
          method: operators.find(op => op.id === selectedOperator)?.name,
        };
        
        setTransactions([newTransaction, ...transactions]);
        setAmount('');
        setPhoneNumber('');
        setSelectedOperator('');
        setActiveTab('historique');
      }
    };

    return (
      <View style={styles.rechargeContainer}>
        <Text style={styles.formLabel}>Montant (FCFA)</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez le montant"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        <Text style={styles.formLabel}>Numéro de téléphone</Text>
        <TextInput
          style={styles.input}
          placeholder="+225 XX XX XX XX XX"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

        <Text style={styles.formLabel}>Sélectionnez un opérateur</Text>
        <View style={styles.operatorGrid}>
          {operators.map((operator) => (
            <TouchableOpacity
              key={operator.id}
              style={[
                styles.operatorCard,
                selectedOperator === operator.id && styles.operatorCardActive,
              ]}
              onPress={() => setSelectedOperator(operator.id)}
            >
              <View style={{ width: 48, height: 48, backgroundColor: operator.color, borderRadius: 24 }} />
              <Text style={styles.operatorName}>{operator.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleRecharge}>
          <Text style={styles.submitButtonText}>Confirmer la recharge</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const TransferTab = () => {
    const [amount, setAmount] = useState('');
    const [recipient, setRecipient] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleTransfer = () => {
      if (amount && recipient && phoneNumber && parseInt(amount) <= balance) {
        const newBalance = balance - parseInt(amount);
        setBalance(newBalance);
        
        const newTransaction = {
          id: transactions.length + 1,
          type: 'sortie',
          title: 'Transfert',
          subtitle: recipient,
          amount: -parseInt(amount),
          date: new Date().toLocaleDateString('fr-FR') + ' • ' + new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
          method: 'Wallet',
        };
        
        setTransactions([newTransaction, ...transactions]);
        setAmount('');
        setRecipient('');
        setPhoneNumber('');
        setActiveTab('historique');
      }
    };

    return (
      <View style={styles.transferContainer}>
        <Text style={styles.formLabel}>Destinataire</Text>
        <TextInput
          style={styles.input}
          placeholder="Nom du destinataire"
          value={recipient}
          onChangeText={setRecipient}
        />

        <Text style={styles.formLabel}>Numéro de téléphone</Text>
        <TextInput
          style={styles.input}
          placeholder="+225 XX XX XX XX XX"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

        <Text style={styles.formLabel}>Montant (FCFA)</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez le montant"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleTransfer}>
          <Text style={styles.submitButtonText}>Envoyer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.qrButton} onPress={() => setShowQRModal(true)}>
          <Text style={styles.qrButtonText}>Afficher mon QR Code</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const HistoriqueTab = () => (
    <View style={styles.transactionCard}>
      <View style={styles.transactionHeader}>
        <Text style={styles.transactionTitle}>Transactions récentes</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllButton}>Tout voir</Text>
        </TouchableOpacity>
      </View>

      {transactions.map((transaction, index) => (
        <View key={transaction.id}>
          {index > 0 && <View style={styles.divider} />}
          <View style={styles.transactionItem}>
            <View style={styles.transactionRow}>
              <View style={styles.transactionLeft}>
                <View
                  style={[
                    styles.transactionIconContainer,
                    transaction.type === 'sortie' ? styles.transactionIconOut : styles.transactionIconIn,
                  ]}
                >
                  <Icon
                    name={transaction.type === 'sortie' ? 'arrow-up' : 'arrow-down'}
                    size={20}
                    color={transaction.type === 'sortie' ? '#DC2626' : '#16A34A'}
                  />
                </View>
                <View style={styles.transactionInfo}>
                  <Text style={styles.transactionName}>{transaction.title}</Text>
                  <Text style={styles.transactionSubtitle}>{transaction.subtitle}</Text>
                </View>
              </View>
              <View style={styles.transactionRight}>
                <Text
                  style={[
                    styles.transactionAmount,
                    transaction.type === 'sortie' ? styles.transactionAmountOut : styles.transactionAmountIn,
                  ]}
                >
                  {transaction.amount > 0 ? '+' : ''}{transaction.amount.toLocaleString()}
                </Text>
                <Text style={styles.transactionCurrency}>FCFA</Text>
              </View>
            </View>
            <View style={styles.transactionFooter}>
              <Text style={styles.transactionDate}>{transaction.date}</Text>
              <View
                style={[
                  styles.transactionBadge,
                  transaction.method === 'Orange Money' ? styles.badgeOrange : styles.badgeBlue,
                ]}
              >
                <Text
                  style={[
                    styles.badgeText,
                    transaction.method === 'Orange Money' ? styles.badgeTextOrange : styles.badgeTextBlue,
                  ]}
                >
                  {transaction.method}
                </Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );

  const totalIn = transactions.filter(t => t.type === 'entree').reduce((sum, t) => sum + t.amount, 0);
  const totalOut = Math.abs(transactions.filter(t => t.type === 'sortie').reduce((sum, t) => sum + t.amount, 0));

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header with Gradient */}
      <View style={styles.header}>
        {/* Status Bar */}
        <View style={styles.statusBar}>
          <Text style={styles.statusText}>9:41</Text>
          <View style={styles.statusIcons}>
            <Icon name="wifi" size={16} color="#FFFFFF" />
            <Icon name="signal" size={16} color="#FFFFFF" />
            <Icon name="battery" size={16} color="#FFFFFF" />
          </View>
        </View>

        {/* Navigation */}
        <View style={styles.navigation}>
          <TouchableOpacity style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.navTitle}>Mon Wallet</Text>
          <TouchableOpacity style={styles.navButton}>
            <Icon name="more" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <View style={{ alignItems: 'center', marginBottom: 24 }}>
            <Text style={styles.balanceLabel}>Solde disponible</Text>
            <Text style={styles.balanceAmount}>{balance.toLocaleString()}</Text>
            <Text style={styles.balanceCurrency}>FCFA</Text>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => setActiveTab('recharger')}
            >
              <Icon name="download" size={20} color="#FFFFFF" />
              <Text style={[styles.buttonText, { color: '#FFFFFF' }]}>Recharger</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => setActiveTab('transferer')}
            >
              <Icon name="send" size={20} color="#374151" />
              <Text style={[styles.buttonText, { color: '#374151' }]}>Envoyer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          <View style={[styles.statCard, styles.statCardOut]}>
            <View style={styles.statHeader}>
              <View style={[styles.statIcon, styles.statIconOut]}>
                <Icon name="trending-down" size={16} color="#FFFFFF" />
              </View>
              <Text style={[styles.statLabel, { color: '#7F1D1D' }]}>Sorties</Text>
            </View>
            <Text style={[styles.statAmount, { color: '#7F1D1D' }]}>{(totalOut / 1000).toFixed(0)}K</Text>
            <Text style={[styles.statPeriod, { color: '#DC2626' }]}>Ce mois</Text>
          </View>

          <View style={[styles.statCard, styles.statCardIn]}>
            <View style={styles.statHeader}>
              <View style={[styles.statIcon, styles.statIconIn]}>
                <Icon name="trending-up" size={16} color="#FFFFFF" />
              </View>
              <Text style={[styles.statLabel, { color: '#14532D' }]}>Entrées</Text>
            </View>
            <Text style={[styles.statAmount, { color: '#14532D' }]}>{(totalIn / 1000).toFixed(0)}K</Text>
            <Text style={[styles.statPeriod, { color: '#16A34A' }]}>Ce mois</Text>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          <View style={styles.tabRow}>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'historique' ? styles.activeTab : styles.inactiveTab]}
              onPress={() => setActiveTab('historique')}
            >
              <Text style={[styles.tabText, activeTab === 'historique' ? styles.activeTabText : styles.inactiveTabText]}>
                Historique
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'recharger' ? styles.activeTab : styles.inactiveTab]}
              onPress={() => setActiveTab('recharger')}
            >
              <Text style={[styles.tabText, activeTab === 'recharger' ? styles.activeTabText : styles.inactiveTabText]}>
                Recharger
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'transferer' ? styles.activeTab : styles.inactiveTab]}
              onPress={() => setActiveTab('transferer')}
            >
              <Text style={[styles.tabText, activeTab === 'transferer' ? styles.activeTabText : styles.inactiveTabText]}>
                Transférer
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Tab Content */}
        {activeTab === 'historique' && <HistoriqueTab />}
        {activeTab === 'recharger' && <RechargeTab />}
        {activeTab === 'transferer' && <TransferTab />}
      </ScrollView>

      {/* QR Code Modal */}
      <Modal
        visible={showQRModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowQRModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <QRCode
              value={`wallet:${balance}`}
              size={200}
            />
            <Text style={styles.modalTitle}>Mon QR Code</Text>
            <Text style={styles.modalSubtitle}>
              Scannez ce code pour recevoir un paiement
            </Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setShowQRModal(false)}
            >
              <Text style={styles.modalCloseText}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};