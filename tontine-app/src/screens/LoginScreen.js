import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function AuthScreen({ navigation }) {
  const [authTab, setAuthTab] = useState('login'); // login ou signup
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const renderLoginForm = () => (
    <View style={styles.form}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Numéro de téléphone</Text>
        <View style={styles.inputContainer}>
          <Feather name="phone" size={20} color="#9CA3AF" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="+225 XX XX XX XX"
            placeholderTextColor="#9CA3AF"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Mot de passe</Text>
        <View style={styles.inputContainer}>
          <Feather name="lock" size={20} color="#9CA3AF" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.primaryButton}
       onPress={() => navigation.navigate('AuthOTPS')}> 
        <Text style={styles.primaryButtonText}>Se connecter</Text>
      </TouchableOpacity>

      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.dividerText}>ou</Text>
        <View style={styles.line} />
      </View>

      <TouchableOpacity style={styles.biometricButton}>
        <Feather name="fingerprint" size={20} color="#374151" />
        <Text style={styles.biometricText}>Empreinte / Face ID</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
      </TouchableOpacity>
    </View>
  );

  const renderSignupForm = () => (
    <View style={styles.form}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nom complet</Text>
        <View style={styles.inputContainer}>
          <Feather name="user" size={20} color="#9CA3AF" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Kouassi Yao"
            placeholderTextColor="#9CA3AF"
            value={name}
            onChangeText={setName}
          />
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Numéro de téléphone</Text>
        <View style={styles.inputContainer}>
          <Feather name="phone" size={20} color="#9CA3AF" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="+225 XX XX XX XX"
            placeholderTextColor="#9CA3AF"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Mot de passe</Text>
        <View style={styles.inputContainer}>
          <Feather name="lock" size={20} color="#9CA3AF" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Confirmer le mot de passe</Text>
        <View style={styles.inputContainer}>
          <Feather name="lock" size={20} color="#9CA3AF" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
      </View>
 

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate("AuthOTPS", { phoneNumber: "+225 XX XX 00 XX" })}
      >
        <Text style={styles.primaryButtonText}>Créer un compte</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.primaryButton}
        onPress={() => navigation.navigate("AuthOTPS")}> 
        <Text style={styles.primaryButtonText}>Créer un compte 1</Text>
      </TouchableOpacity> */}
      
      <Text style={styles.terms}>
        En créant un compte, vous acceptez nos{' '}
        <Text style={styles.link}>Conditions d’utilisation</Text>.
      </Text>
    </View>
  );

  return (
    <LinearGradient colors={['#ECFDF5', '#FFFFFF']} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={22} color="#111827" />
            </TouchableOpacity>
            <Text style={styles.title}>TontiScore</Text>
          </View>

          <Text style={styles.subtitle}>
            Épargner ensemble, progresser individuellement.
          </Text>

          {/* Tabs */}
          <View style={styles.tabs}>
            <TouchableOpacity
              onPress={() => setAuthTab('login')}
              style={[
                styles.tab,
                authTab === 'login' && styles.tabActive,
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  authTab === 'login' && styles.tabTextActive,
                ]}
              >
                Connexion
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setAuthTab('signup')}
              style={[
                styles.tab,
                authTab === 'signup' && styles.tabActive,
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  authTab === 'signup' && styles.tabTextActive,
                ]}
              >
                Inscription
              </Text>
            </TouchableOpacity>
          </View>

          {/* Form */}
          {authTab === 'login' ? renderLoginForm() : renderSignupForm()}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#059669',
  },
  subtitle: {
    color: '#6B7280',
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 20,
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: '#D1FAE5',
  },
  tabText: {
    color: '#6B7280',
    fontWeight: '500',
  },
  tabTextActive: {
    color: '#047857',
  },
  form: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 6,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 12,
  },
  icon: { marginRight: 6 },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    color: '#111827',
  },
  primaryButton: {
    backgroundColor: '#10B981',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 4,
  },
  primaryButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  line: { flex: 1, height: 1, backgroundColor: '#E5E7EB' },
  dividerText: { marginHorizontal: 8, color: '#6B7280', fontSize: 14 },
  biometricButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingVertical: 14,
  },
  biometricText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#374151',
  },
  forgotPassword: {
    textAlign: 'center',
    color: '#10B981',
    marginTop: 12,
    fontWeight: '500',
  },
  terms: {
    textAlign: 'center',
    fontSize: 12,
    color: '#6B7280',
    marginTop: 12,
  },
  link: { color: '#059669', fontWeight: '600' },
});
