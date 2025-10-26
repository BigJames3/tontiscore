import React, { useState } from 'react';
import { StatusBar, View, Text, TouchableOpacity, ScrollView, TextInput,} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../theme/styles';
import { useNavigation } from '@react-navigation/native';

export default function JoinGroupeScreen({ navigation }) {

  
  const [currentTab, setCurrentTab] = useState('code'); // ✅ Onglet actif
  const [codeInputs, setCodeInputs] = useState(['', '', '', '', '']); // ✅ Ajout du state pour les 6 champs du code

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* ✅ Un seul ScrollView englobant tout le contenu */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <LinearGradient
          colors={['#4f46e5', '#3b82f6']}
          style={styles.headerGradient}
        >
          <View style={styles.headerTop}>
            <TouchableOpacity style={styles.backButton}
            onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={24} color="#fff" />
            </TouchableOpacity>
            {/* <View style={styles.stepIndicator}>
              <Text style={styles.stepText}>Étape 1/3</Text>
            </View> */}
          </View>
          <Text style={styles.headerTitle}>Rejoindre un groupe</Text>
          <Text style={styles.headerSubtitle}>
          Trouvez et rejoignez une tontine existante
          </Text>
        </LinearGradient>

        {/* Contenu principal */}

        <View style={styles.content}>
        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tab, currentTab === 'code' && styles.tabActive]}
            onPress={() => setCurrentTab('code')}>
            <Text style={[styles.tabText, currentTab === 'code' && styles.tabTextActive]}>
              Code d'invitation
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, currentTab === 'discover' && styles.tabActive]}
            onPress={() => setCurrentTab('discover')}>
            <Text style={[styles.tabText, currentTab === 'discover' && styles.tabTextActive]}>
              Découvrir
            </Text>
          </TouchableOpacity>
        </View>

        {currentTab === 'code' ? (
          <View style={styles.codeCard}>
            <View style={styles.codeIconContainer}>
              <Feather name="key" size={40} color="#fff" />
            </View>
            <Text style={styles.codeTitle}>Entrez le code d'invitation</Text>
            <Text style={styles.codeSubtitle}>
              Demandez le code à l'administrateur du groupe
            </Text>

            <View style={styles.codeInputs}>
              {codeInputs.map((value, index) => (
                <TextInput
                  key={index}
                  style={styles.codeInput}
                  maxLength={1}
                  keyboardType="default"
                  value={value}
                  onChangeText={(text) => {
                    const newInputs = [...codeInputs];
                    newInputs[index] = text;
                    setCodeInputs(newInputs);
                  }}
                />
              ))}
            </View>

            <TouchableOpacity style={[styles.primaryButton, { backgroundColor: '#3B82F6' }]}>
              <Text style={styles.primaryButtonText}>Rejoindre</Text>
            </TouchableOpacity>

            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>OU</Text>
              <View style={styles.dividerLine} />
            </View>

            <TouchableOpacity style={styles.secondaryButton}>
              <Feather name="camera" size={20} color="#374151" />
              <Text style={styles.secondaryButtonText}>Scanner un QR Code</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <View style={styles.searchContainer}>
              <Feather name="search" size={20} color="#9CA3AF" style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder="Rechercher un groupe..."
                placeholderTextColor="#9CA3AF"
              />
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
              <TouchableOpacity style={styles.filterChipActive}>
                <Text style={styles.filterChipTextActive}>Tous</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterChip}>
                <Feather name="users" size={16} color="#6B7280" />
                <Text style={styles.filterChipText}>Famille</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterChip}>
                <Feather name="heart" size={16} color="#6B7280" />
                <Text style={styles.filterChipText}>Amis</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterChip}>
                <Feather name="briefcase" size={16} color="#6B7280" />
                <Text style={styles.filterChipText}>Travail</Text>
              </TouchableOpacity>
            </ScrollView>

            {/* Group Cards */}
            <View style={styles.groupCard}>
              <View style={styles.groupCardHeader}>
                <View style={[styles.groupCardIcon, { backgroundColor: '#10B981' }]}>
                  <Feather name="users" size={28} color="#fff" />
                </View>
                <View style={styles.groupBadge}>
                  <Text style={styles.groupBadgeText}>Public</Text>
                </View>
              </View>
              <Text style={styles.groupCardTitle}>Entrepreneurs Abidjan</Text>
              <Text style={styles.groupCardDescription}>
                Groupe pour jeunes entrepreneurs de la capitale
              </Text>
              <View style={styles.groupCardStats}>
                <View style={styles.groupCardStat}>
                  <Feather name="users" size={16} color="#6B7280" />
                  <Text style={styles.groupCardStatText}>5/10 membres</Text>
                </View>
                <View style={styles.groupCardStat}>
                  <Feather name="dollar-sign" size={16} color="#6B7280" />
                  <Text style={styles.groupCardStatText}>10K/mois</Text>
                </View>
              </View>
              <View style={styles.groupCardDivider} />
              <TouchableOpacity style={styles.groupCardButton}>
                <Text style={styles.groupCardButtonText}>Voir les détails</Text>
                <Feather name="arrow-right" size={16} color="#10B981" />
              </TouchableOpacity>
            </View>

            <View style={styles.groupCard}>
              <View style={styles.groupCardHeader}>
                <View style={[styles.groupCardIcon, { backgroundColor: '#3B82F6' }]}>
                  <Feather name="briefcase" size={28} color="#fff" />
                </View>
                <View style={styles.groupBadge}>
                  <Text style={styles.groupBadgeText}>Public</Text>
                </View>
              </View>
              <Text style={styles.groupCardTitle}>Commerçants Plateau</Text>
              <Text style={styles.groupCardDescription}>
                Tontine solidaire pour commerçants du Plateau
              </Text>
              <View style={styles.groupCardStats}>
                <View style={styles.groupCardStat}>
                  <Feather name="users" size={16} color="#6B7280" />
                  <Text style={styles.groupCardStatText}>8/12 membres</Text>
                </View>
                <View style={styles.groupCardStat}>
                  <Feather name="dollar-sign" size={16} color="#6B7280" />
                  <Text style={styles.groupCardStatText}>15K/mois</Text>
                </View>
              </View>
              <View style={styles.groupCardDivider} />
              <TouchableOpacity style={styles.groupCardButton}>
                <Text style={[styles.groupCardButtonText, { color: '#3B82F6' }]}>
                  Voir les détails
                </Text>
                <Feather name="arrow-right" size={16} color="#3B82F6" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}
