import React from 'react';
import {  StatusBar,  View,  Text,  TouchableOpacity,  ScrollView,  TextInput,} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../theme/styles';
import { useNavigation } from '@react-navigation/native';

export default function CreateGroupeScreen({ navigation }) {
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
            <View style={styles.stepIndicator}>
              <Text style={styles.stepText}>Étape 1/3</Text>
            </View>
          </View>
          <Text style={styles.headerTitle}>Créer un groupe</Text>
          <Text style={styles.headerSubtitle}>
            Configurez votre nouvelle tontine
          </Text>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
        </LinearGradient>

        {/* Contenu principal */}
        <View style={styles.contentGrid}>
          {/* Informations de base */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Informations de base</Text>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nom du groupe</Text>
              <View style={styles.inputContainer}>
                <Feather
                  name="users"
                  size={20}
                  color="#9CA3AF"
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Ex: Famille Kouassi"
                  placeholderTextColor="#9CA3AF"
                />
              </View>
            </View>

            {/* Type de groupe */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Type de groupe</Text>
              <View style={styles.typeGrid}>
                <TouchableOpacity style={[styles.typeCard, styles.typeCardActive]}>
                  <View style={[styles.typeIcon, styles.typeIconEmerald]}>
                    <Feather name="users" size={24} color="#059669" />
                  </View>
                  <Text style={styles.typeCardTextActive}>Famille</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.typeCard}>
                  <View style={[styles.typeIcon, styles.typeIconBlue]}>
                    <Feather name="heart" size={24} color="#2563EB" />
                  </View>
                  <Text style={styles.typeCardText}>Amis</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.typeCard}>
                  <View style={[styles.typeIcon, styles.typeIconAmber]}>
                    <Feather name="briefcase" size={24} color="#D97706" />
                  </View>
                  <Text style={styles.typeCardText}>Travail</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.typeCard}>
                  <View style={[styles.typeIcon, styles.typeIconPurple]}>
                    <Feather name="grid" size={24} color="#9333EA" />
                  </View>
                  <Text style={styles.typeCardText}>Autre</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Description */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Description (optionnel)</Text>
              <TextInput
                style={styles.textarea}
                placeholder="Décrivez l'objectif de votre tontine..."
                placeholderTextColor="#9CA3AF"
                multiline
                numberOfLines={4}
              />
            </View>
          </View>

          {/* Détails financiers */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Détails financiers</Text>

            {/* Montant de cotisation */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Montant de cotisation</Text>
              <View style={styles.inputContainer}>
                <Feather
                  name="dollar-sign"
                  size={20}
                  color="#9CA3AF"
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Ex: 50 000"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="numeric"
                />
                <Text style={styles.inputSuffix}>FCFA</Text>
              </View>
            </View>

            {/* Fréquence */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Fréquence de paiement</Text>
              <View style={styles.frequencyGrid}>
                <TouchableOpacity style={styles.frequencyButton}>
                  <Text style={styles.frequencyButtonText}>Hebdomadaire</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.frequencyButton, styles.frequencyButtonActive]}
                >
                  <Text style={styles.frequencyButtonTextActive}>Mensuel</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Nombre de membres */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nombre de membres</Text>
              <View style={styles.inputContainer}>
                <Feather name="users" size={20} color="#9CA3AF" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Ex: 8"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="numeric"
                />
              </View>
              <Text style={styles.helperText}>
                Chaque membre recevra le montant total à tour de rôle
              </Text>
            </View>

            {/* <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Suivant</Text>
            <Feather name="arrow-right" size={20} color="#fff" />
            </TouchableOpacity> */}
            
          </View>

          
          {/* Ordres de distribution */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Ordres de distribution</Text>

            {/* Résumé */}
            <View style={styles.infoBox}>
              <View>
                <View style={styles.notifDot} />
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.infoTitle}>Ordre aléatoire</Text>
                <Text style={styles.infoText}>
                  Le système tire au sort l'ordre de réception
                </Text>
              </View>
            </View>
            {/* Résumé */}
            <View style={styles.infoBox}>
              <View>
                <View style={styles.notifBadgeText} />
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.infoTitle}>Basé sur le score</Text>
                <Text style={styles.infoText}>
                  Les meilleurs scores reçoivent en premier
                </Text>
              </View>
            </View>
           
           
            {/* Date de début */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Date de début</Text>
              <TouchableOpacity style={styles.dateButton}>
                <View style={styles.dateButtonContent}>
                  <Feather name="calendar" size={20} color="#9CA3AF" />
                  <Text style={styles.dateButtonText}>Sélectionner une date</Text>
                </View>
                <Feather name="chevron-down" size={20} color="#9CA3AF" />
              </TouchableOpacity>
            </View>

            {/* Résumé */}
            <View style={styles.infoBox}>
              <View style={styles.infoIcon}>
                <Feather name="info" size={20} color="#fff" />
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.infoTitle}>Résumé</Text>
                <Text style={styles.infoText}>
                  Avec 8 membres cotisant 50 000 FCFA par mois, chaque membre recevra 400
                  000 FCFA à son tour.
                </Text>
              </View>
            </View>            
          </View>

          {/* cONDITIONS D'UTILISATION */}
          <View style={styles.card}>

                      {/* Support */}
          <View style={styles.card}>

            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <View style={styles.menuIcon}>
                  <Feather name="mail" size={20} color="#111827" />
                </View>
                <Text style={styles.menuItemText}>Conditions d'utilisation</Text>
              </View>
              <Feather name="chevron-right" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          </View>

         
            <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Suivant</Text>
            <Feather name="arrow-right" size={20} color="#fff" />
            </TouchableOpacity>
            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
