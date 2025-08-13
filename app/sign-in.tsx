import icons from "constants/icons";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "firebaseConfig";

const palette = {
  bgDark: "hsl(224 0% 1%)",
  bg: "hsl(224 0% 4%)",
  bgLight: "hsl(224 0% 9%)",
  text: "hsl(224 0% 95%)",
  textMuted: "hsl(224 0% 69%)",
  highlight: "hsl(224 0% 39%)",
  border: "hsl(224 0% 28%)",
  borderMuted: "hsl(224 0% 18%)",
  primary: "hsl(33 60% 63%)",
  danger: "hsl(9 26% 64%)",
};

type FormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await signInWithEmailAndPassword(auth, data.email.trim(), data.password);
      Alert.alert("Success", "Signed in successfully!");
      // navigate to home screen
    } catch (error: any) {
      Alert.alert("Error", error.message); // need to display generic error message 
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: palette.bg }} className="px-6">
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            paddingVertical: 40,
          }}
          keyboardShouldPersistTaps="handled"
        >
          {/* Logo */}
          <View
            style={{
              width: 140,
              height: 140,
              borderRadius: 70,
              backgroundColor: palette.bgLight,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              marginBottom: 40,
              shadowColor: palette.borderMuted,
              shadowOpacity: 0.6,
              shadowRadius: 10,
              shadowOffset: { width: 0, height: 5 },
            }}
          >
            <Text style={{ fontSize: 100, color: palette.primary }}></Text>
          </View>

          {/* Heading */}
          <Text
            style={{
              color: palette.textMuted,
              fontFamily: "Rubik_400Regular",
              fontSize: 16,
              textAlign: "center",
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            Welcome to Barbers
          </Text>

          <Text
            style={{
              color: palette.text,
              fontFamily: "Rubik_700Bold",
              fontSize: 36,
              textAlign: "center",
              marginBottom: 12,
              lineHeight: 44,
            }}
          >
            Lets find you a{"\n"}
            <Text style={{ color: palette.primary }}>barber</Text>
          </Text>

          <Text
            style={{
              color: palette.textMuted,
              fontFamily: "Rubik_400Regular",
              fontSize: 18,
              textAlign: "center",
              marginBottom: 30,
            }}
          >
            Login to Barbers with your email
          </Text>

          {/* Email Input */}
          <Text
            style={{
              color: palette.text,
              fontFamily: "Rubik_400Regular",
              fontSize: 16,
              marginBottom: 6,
            }}
          >
            Email
          </Text>
          <Controller
            control={control}
            name="email"
            rules={{
              required: "Email is required",
              pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={{
                  backgroundColor: palette.bgDark,
                  color: palette.text,
                  fontSize: 16,
                  fontFamily: "Rubik_400Regular",
                  paddingVertical: 14,
                  paddingHorizontal: 20,
                  borderRadius: 12,
                  borderWidth: errors.email ? 2 : 1,
                  borderColor: errors.email ? palette.danger : palette.border,
                  marginBottom: errors.email ? 6 : 20,
                  shadowColor: palette.borderMuted,
                  shadowOpacity: 0.3,
                  shadowRadius: 6,
                  shadowOffset: { width: 0, height: 2 },
                }}
                placeholder="Email"
                placeholderTextColor={palette.textMuted}
                keyboardType="email-address"
                autoCapitalize="none"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCorrect={false}
              />
            )}
          />

          {/* Password Input */}
          <Text
            style={{
              color: palette.text,
              fontFamily: "Rubik_400Regular",
              fontSize: 16,
              marginBottom: 6,
            }}
          >
            Password
          </Text>
          <Controller
            control={control}
            name="password"
            rules={{ required: "Password is required" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={{
                  backgroundColor: palette.bgDark,
                  color: palette.text,
                  fontSize: 16,
                  fontFamily: "Rubik_400Regular",
                  paddingVertical: 14,
                  paddingHorizontal: 20,
                  borderRadius: 12,
                  borderWidth: errors.password ? 2 : 1,
                  borderColor: errors.password ? palette.danger : palette.border,
                  marginBottom: errors.password ? 6 : 20,
                  shadowColor: palette.borderMuted,
                  shadowOpacity: 0.3,
                  shadowRadius: 6,
                  shadowOffset: { width: 0, height: 2 },
                }}
                placeholder="Enter your password"
                placeholderTextColor={palette.textMuted}
                secureTextEntry
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCorrect={false}
              />
            )}
          />

          {/* Sign In Button */}
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={{
              backgroundColor: palette.primary,
              paddingVertical: 16,
              borderRadius: 14,
              marginBottom: 25,
            }}
            activeOpacity={0.5}
          >
            <Text
              style={{
                color: palette.bg,
                fontSize: 18,
                fontFamily: "Rubik_700Bold",
                textAlign: "center",
                letterSpacing: 1.2,
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;