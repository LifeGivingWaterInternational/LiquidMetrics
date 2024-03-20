import React, { useState } from 'react';
import {
  StyleSheet, SafeAreaView, View, Text, TouchableOpacity, TextInput,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function Input( {navigation} ) {
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
      <View style={styles.container}>

          <Text style={styles.title}>Input Data</Text>


        <KeyboardAwareScrollView>
          <View style={styles.form}>

            {/* Input for house id or gauge ID*/}
            <View style={styles.statsRow}>
              <View style={styles.statsItem}>
                <View style={{ backgroundColor: 'white', width: '100%' }}>
                  <Text style={styles.statsItemLabel}>Gauge ID OR House ID</Text>
                  <TextInput
                    onChangeText={gaugeID => setForm({ ...form, gaugeID })}
                    placeholder="Gauge ID"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    keyboardType="numeric"
                    value={form.gaugeID} />
                    <TextInput
                    autoCorrect={false}
                    onChangeText={houseID => setForm({ ...form, houseID })}
                    placeholder="House ID"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    secureTextEntry={true}
                    keyboardType="numeric"
                    value={form.houseID} />
                </View>
              </View>
            </View>

            {/* Read Amount (Input Data) */}
            <View style={styles.statsRow}>
              <View style={styles.statsItem}>
                <View style={{ backgroundColor: 'white', width: '100%' }}>
                  <Text style={styles.statsItemLabel}>Read Amount</Text>
                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="numeric"
                    onChangeText={email => setForm({ ...form, email })}
                    placeholder="123.43"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    value={form.email} />
                </View>
              </View>
            </View>
            
            {/*Submit Button */}
            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Conformation', {})
                }}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Submit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    display: 'flex',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1d1d1d',
    marginBottom: 6,
  },
  /** Form */
  form: {
    paddingVertical: 8,
  },
  formAction: {
    marginVertical: 8,
  },

  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 18,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#02C3BD',
    margin: 8,
  },
  /** Button */
  btn: {
    backgroundColor: '#02C3BD',
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  btnText: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
    color: 'black',
  },
  /** From Menu Screen */
  stats: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    marginHorizontal: -6,
  },
  statsItem: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginHorizontal: 6,
    marginBottom: 12,
  },
  statsItemLabel: {
    fontSize: 18,
    color: 'black',
    marginBottom: 2,
    fontWeight: 'bold',
    marginTop: -6,
  },
});
