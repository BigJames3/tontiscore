import React from 'react';
import { StatusBar,  View,  Text,  TouchableOpacity,} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import themeStyles from '../theme/styles';
import { useNavigation } from '@react-navigation/native';

export default function NotificationsScreen({ navigation }) {
    // const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.notificationHeader}>
        <Text style={styles.notificationHeaderTitle}>Notifications</Text>
        <TouchableOpacity>
          <Text style={styles.markReadText}>Tout marquer lu</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
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