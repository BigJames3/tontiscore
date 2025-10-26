import React from 'react';
import { StatusBar,  View,  Text,  TouchableOpacity, ScrollView} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../theme/styles'; // on change le nom à l'import
// import { useNavigation } from '@react-navigation/native';

export default function NotificationsScreen({ navigation }) {
    // const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* En-tête */}
      <View style={styles.notifHeaderTop}>        
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.notifBackButton}>
          <Feather name="arrow-left" size={24} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.notificationHeaderTitle}>Notifications</Text>
        <TouchableOpacity style={styles.notifBackButton}>
            <Feather name="settings" size={24} color="#111827" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.notificationHeader}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.notifFilters}>
          <TouchableOpacity style={styles.notifFilterActive}>
            <Text style={styles.notifFilterTextActive}>Toutes</Text>
            <View style={styles.notifBadge}>
              <Text style={styles.notifBadgeText}>12</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.notifFilter}>
            <Feather name="dollar-sign" size={16} color="#6B7280" />
            <Text style={styles.notifFilterText}>Paiements</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.notifFilter}>
            <Feather name="users" size={16} color="#6B7280" />
            <Text style={styles.notifFilterText}>Groupes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.notifFilter}>
            <Feather name="award" size={16} color="#6B7280" />
            <Text style={styles.notifFilterText}>Score</Text>
          </TouchableOpacity>
        </ScrollView>
        </View>
        
        <View style={styles.settingsDivider} />

      {/* Contenu principal scrollable */}
      <ScrollView style={styles.page} contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={styles.content}>
          <Text style={styles.notifSectionTitle}>AUJOURD'HUI</Text>

          {/* Notification 1 */}
          <View style={[styles.notifCard, styles.notifCardEmerald]}>
            <View style={styles.notifIconEmerald}>
              <Feather name="bell" size={20} color="#fff" />
            </View>
            <View style={styles.notifContent}>
              <View style={styles.notifHeader}>
                <Text style={styles.notifTitle}>Rappel de cotisation</Text>
                <View style={styles.notifDot} />
              </View>
              <Text style={styles.notifText}>
                Votre cotisation pour "Famille Kouassi" est due dans 2 jours (15 juin)
              </Text>
              <View style={styles.notifFooter}>
                <Text style={styles.notifTime}>Il y a 1 heure</Text>
                <TouchableOpacity style={styles.notifAction}>
                  <Text style={styles.notifActionText}>Payer maintenant</Text>
                  <Feather name="arrow-right" size={16} color="#10B981" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Notification 2 */}
          <View style={[styles.notifCard, styles.notifCardAmber]}>
            <View style={styles.notifIconAmber}>
              <Feather name="award" size={20} color="#fff" />
            </View>
            <View style={styles.notifContent}>
              <View style={styles.notifHeader}>
                <Text style={styles.notifTitle}>Score amélioré ! 🎉</Text>
                <View style={[styles.notifDot, { backgroundColor: '#F59E0B' }]} />
              </View>
              <Text style={styles.notifText}>
                Félicitations ! Votre TontiScore est passé à 720 points. Vous avez gagné +15
                points.
              </Text>
              <View style={styles.notifFooter}>
                <Text style={styles.notifTime}>Il y a 3 heures</Text>
                <TouchableOpacity style={styles.notifAction}>
                  <Text style={[styles.notifActionText, { color: '#F59E0B' }]}>
                    Voir les détails
                  </Text>
                  <Feather name="arrow-right" size={16} color="#F59E0B" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Text style={styles.notifSectionTitle}>HIER</Text>

          {/* Notification 3 */}
          <View style={styles.notifCardSimple}>
            <View style={styles.notifIconBlue}>
              <Feather name="zap" size={20} color="#fff" />
            </View>
            <View style={styles.notifContent}>
              <Text style={styles.notifTitle}>Conseil IA du jour</Text>
              <Text style={styles.notifText}>
                Payez votre prochaine cotisation à l'avance pour gagner +10 points sur votre
                score
              </Text>
              <Text style={styles.notifTime}>Hier à 14:30</Text>
            </View>
          </View>

          {/* Notification 4 */}
          <View style={styles.notifCardSimple}>
            <View style={styles.notifIconEmerald}>
              <Feather name="check-circle" size={20} color="#fff" />
            </View>
            <View style={styles.notifContent}>
              <Text style={styles.notifTitle}>Paiement reçu</Text>
              <Text style={styles.notifText}>
                Votre cotisation de 5 000 FCFA pour "Collègues Bureau" a été enregistrée avec
                succès
              </Text>
              <Text style={styles.notifTime}>Hier à 09:15</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.notificationContent}>
          <View style={[styles.notificationCard, styles.notificationCardNew]}>
            <View style={[styles.notificationIcon, { backgroundColor: '#10B981' }]}>
              <Feather name="bell" size={20} color="#fff" />
            </View>
            <View style={styles.notificationBody}>
              <Text style={styles.notificationTitle}>Rappel de cotisation</Text>
              <Text style={styles.notificationText}>
                Votre cotisation pour "Famille Kouassi" est due dans 2 jours
              </Text>
              <Text style={styles.notificationTime}>Il y a 1 heure</Text>
            </View>
          </View>

          <View style={styles.notificationCard}>
            <View style={[styles.notificationIcon, { backgroundColor: '#F59E0B' }]}>
              <Feather name="award" size={20} color="#fff" />
            </View>
            <View style={styles.notificationBody}>
              <Text style={styles.notificationTitle}>Score amélioré !</Text>
              <Text style={styles.notificationText}>
                Votre TontiScore est passé à 720 points. Continuez comme ça !
              </Text>
              <Text style={styles.notificationTime}>Il y a 3 heures</Text>
            </View>
          </View>

          <View style={styles.notificationCard}>
            <View style={[styles.notificationIcon, { backgroundColor: '#3B82F6' }]}>
              <Feather name="zap" size={20} color="#fff" />
            </View>
            <View style={styles.notificationBody}>
              <Text style={styles.notificationTitle}>Conseil IA</Text>
              <Text style={styles.notificationText}>
                Payez à l'avance pour gagner +10 points sur votre score
              </Text>
              <Text style={styles.notificationTime}>Hier à 14:30</Text>
            </View>
          </View>

          <View style={styles.notificationCard}>
            <View style={[styles.notificationIcon, { backgroundColor: '#A855F7' }]}>
              <Feather name="users" size={20} color="#fff" />
            </View>
            <View style={styles.notificationBody}>
              <Text style={styles.notificationTitle}>Nouveau membre</Text>
              <Text style={styles.notificationText}>
                Fatou Koné a rejoint le groupe "Famille Kouassi"
              </Text>
              <Text style={styles.notificationTime}>Il y a 2 jours</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}