import React, { useState, useRef } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather";

export const AuthOTPScreen = ({ navigation, route }) => {
//   const { phoneNumber } = route.params; // récupérer le numéro passé
    const { phoneNumber } = route.params || { phoneNumber: "+225 XX XX XX XX" };

  const [otp, setOtp] = useState("");
  const inputsRef = useRef([]);

  const handleOTPChange = (text, index) => {
    const otpArr = otp.split("");
    otpArr[index] = text;
    const joinedOtp = otpArr.join("");
    setOtp(joinedOtp);

    if (text && index < 5) inputsRef.current[index + 1]?.focus();

    if (joinedOtp.length === 6) {
      setTimeout(() => {
        // Ici tu peux valider l'OTP avec ton API
        navigation.replace("Dashboard"); // navigation finale après validation
      }, 500);
    }
  };

  const handleResend = () => {
    console.log("Renvoyer le code OTP");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={22} color="#2563EB" />
        <Text style={styles.backText}>Retour</Text>
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.title}>Vérification</Text>
        <Text style={styles.subtitle}>Un code a été envoyé au {phoneNumber}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Entrez le code OTP</Text>

        <View style={styles.inputRow}>
          {[...Array(6)].map((_, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputsRef.current[index] = ref)}
              style={styles.input}
              keyboardType="numeric"
              maxLength={1}
              value={otp[index] || ""}
              onChangeText={(text) => handleOTPChange(text, index)}
            />
          ))}
        </View>

        <TouchableOpacity onPress={handleResend}>
          <Text style={styles.resendText}>Code non reçu ? Renvoyer</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9FAFB", padding: 16 },
  backButton: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  backText: { marginLeft: 6, color: "#2563EB", fontSize: 16 },
  header: { alignItems: "center", marginTop: 40, marginBottom: 24 },
  title: { fontSize: 24, fontWeight: "600", marginBottom: 8, color: "#111827" },
  subtitle: { fontSize: 14, color: "#6B7280", textAlign: "center" },
  card: { backgroundColor: "#fff", borderRadius: 16, padding: 24, marginHorizontal: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 4 },
  label: { textAlign: "center", fontSize: 16, fontWeight: "500", marginBottom: 16, color: "#111827" },
  inputRow: { flexDirection: "row", justifyContent: "center", marginBottom: 20, gap: 8 },
  input: { width: 44, height: 54, backgroundColor: "#F3F4F6", textAlign: "center", borderRadius: 8, fontSize: 20, borderWidth: 1, borderColor: "#D1D5DB", color: "#111827" },
  resendText: { textAlign: "center", fontSize: 14, color: "#2563EB", fontWeight: "500" },
});
