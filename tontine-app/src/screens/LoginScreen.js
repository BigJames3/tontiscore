import React from 'react';
import { StatusBar,  ScrollView,  View,  Text,  TouchableOpacity,  TextInput,} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../theme/styles';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen({ navigation }) {
    // const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="dark-content" />
          <ScrollView style={styles.scrollView}>
            <View style={styles.loginHeader}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Feather name="arrow-left" size={24} color="#111827" />
              </TouchableOpacity>
            </View>
    
            <View style={styles.loginContent}>
              <Text style={styles.loginTitle}>Bon retour !</Text>
              <Text style={styles.loginSubtitle}>Connectez-vous à votre compte</Text>
    
              <View style={styles.formContainer}>
                <Text style={styles.label}>Numéro de téléphone</Text>
                <View style={styles.inputContainer}>
                  <Feather
                    name="phone"
                    size={20}
                    color="#9CA3AF"
                    style={styles.inputIcon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="+225 XX XX XX XX XX"
                    placeholderTextColor="#9CA3AF"
                    keyboardType="phone-pad"
                  />
                </View>
    
                <Text style={styles.label}>Mot de passe</Text>
                <View style={styles.inputContainer}>
                  <Feather
                    name="lock"
                    size={20}
                    color="#9CA3AF"
                    style={styles.inputIcon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="••••••••"
                    placeholderTextColor="#9CA3AF"
                    secureTextEntry
                  />
                </View>
    
                <TouchableOpacity
                  style={styles.primaryButton}
                  onPress={() => navigation.navigate('Dashboard')}
                >
                  <Text style={styles.primaryButtonText}>Se connecter</Text>
                </TouchableOpacity>
    
                <View style={styles.divider}>
                  <View style={styles.dividerLine} />
                  <Text style={styles.dividerText}>ou continuer avec</Text>
                  <View style={styles.dividerLine} />
                </View>
    
                <TouchableOpacity style={styles.biometricButton}>
                  <Feather name="smartphone" size={20} color="#111827" />
                  <Text style={styles.biometricButtonText}>Empreinte digitale</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      );
}
