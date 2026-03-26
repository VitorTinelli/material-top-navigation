import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { formatCurrency } from '../utils/randomGenerators';

export default function BalanceCard({ value, hidden, onToggleHidden, onRefresh }) {
  const isNegative = value < 0;

  return (
    <View style={styles.card}>
      <View style={styles.backgroundCircleTop} />
      <View style={styles.backgroundCircleBottom} />

      <Text style={styles.label}>Saldo disponivel</Text>

      <Text style={[styles.amount, isNegative ? styles.amountNegative : styles.amountPositive]}>
        {hidden ? 'R$ ••••••' : formatCurrency(value)}
      </Text>

      <View style={styles.actionsRow}>
        <Pressable style={styles.primaryButton} onPress={onRefresh}>
          <Text style={styles.primaryButtonText}>Atualizar saldo</Text>
        </Pressable>

        <Pressable style={styles.secondaryButton} onPress={onToggleHidden}>
          <Text style={styles.secondaryButtonText}>{hidden ? 'Mostrar' : 'Ocultar'}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ececec',
  },
  backgroundCircleTop: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#fff2e5',
    top: -80,
    right: -50,
  },
  backgroundCircleBottom: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#fff8f0',
    bottom: -50,
    left: -30,
  },
  label: {
    color: '#7a7a7a',
    fontSize: 14,
    marginBottom: 12,
    fontWeight: '600',
  },
  amount: {
    fontSize: 34,
    fontWeight: '800',
    marginBottom: 20,
  },
  amountPositive: {
    color: '#111111',
  },
  amountNegative: {
    color: '#a33b00',
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#ff7a00',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  secondaryButton: {
    paddingHorizontal: 16,
    backgroundColor: '#f3f3f3',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#ffffff',
    fontWeight: '700',
  },
  secondaryButtonText: {
    color: '#3a3a3a',
    fontWeight: '700',
  },
});