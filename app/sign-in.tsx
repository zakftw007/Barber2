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
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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

// const paletteLight = {
// --bg-dark: hsl(224 0% 90%);
// --bg: hsl(224 0% 95%);
// --bg-light: hsl(224 100% 100%);
// --text: hsl(224 0% 4%);
// --text-muted: hsl(224 0% 28%);
// --highlight: hsl(224 100% 100%);
// --border: hsl(224 0% 50%);
// --border-muted: hsl(224 0% 62%);
// --primary: hsl(38 100% 17%);
// --secondary: hsl(209 71% 28%);
// --danger: hsl(9 21% 41%);
// --warning: hsl(52 23% 34%);
// --success: hsl(147 19% 36%);
// --info: hsl(217 22% 41%);
// };

const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  type FormData = {
    email: string;
    password: string;
  };

  // const onSubmit = (data: FormData) => {
  //   console.log("Form Data:", data);
  // };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: palette.bg }} className="px-6">
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0} // Adjust offset as needed
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
              Login to Barbers with Google or email
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
            {errors.email?.message && (
              <Text
                style={{
                  color: palette.danger,
                  fontSize: 12,
                  marginBottom: 16,
                  fontFamily: "Rubik_400Regular",
                }}
              >
              </Text>
            )}

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
            {errors.password?.message && (
              <Text
                style={{
                  color: palette.danger,
                  fontSize: 12,
                  marginBottom: 16,
                  fontFamily: "Rubik_400Regular",
                }}
              >
              </Text>
            )}

            {/* Sign In Button */}
            <TouchableOpacity
              // onPress={handleSubmit(onSubmit)}
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

            {/* Google Sign In Button */}
            <TouchableOpacity
              onPress={() => { }}
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: palette.border,
                paddingVertical: 14,
                borderRadius: 14,
                backgroundColor: palette.bgDark,
                shadowColor: palette.borderMuted,
                shadowOpacity: 0.3,
                shadowRadius: 6,
                shadowOffset: { width: 0, height: 2 },
              }}
              activeOpacity={0.5}
            >
              <Image
                source={icons.google}
                style={{ width: 22, height: 22, marginRight: 12 }}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: palette.text,
                  fontSize: 16,
                  fontFamily: "Rubik_500Medium",
                }}
              >
                Sign in with Google
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;
