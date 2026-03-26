import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import BalanceCard from '../components/BalanceCard';
import { formatCurrency, generateRandomBalance } from '../utils/randomGenerators';

function InsightBox({ title, value, tone }) {
  return (
    <View style={[styles.insightBox, tone === 'positive' ? styles.positive : styles.warning]}>
      <Text style={styles.insightTitle}>{title}</Text>
      <Text style={styles.insightValue}>{value}</Text>
    </View>
  );
}

export default function SaldoScreen() {
  const [balance, setBalance] = React.useState(generateRandomBalance());
  const [hidden, setHidden] = React.useState(false);

  const investedValue = Math.abs(balance * 0.27);
  const monthlyFlow = Math.abs(balance * 0.11);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.greeting}>Bom dia</Text>
        <Text style={styles.title}>Resumo da conta</Text>

        <BalanceCard
          value={balance}
          hidden={hidden}
          onToggleHidden={() => setHidden((current) => !current)}
          onRefresh={() => setBalance(generateRandomBalance())}
        />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Visão rápida</Text>
          <Text style={styles.sectionHint}>Atualizado agora</Text>
        </View>

        <View style={styles.insightsGrid}>
          <InsightBox
            title="Reserva"
            value={hidden ? 'R$ ••••••' : formatCurrency(investedValue)}
            tone="positive"
          />
          <InsightBox
            title="Fluxo mensal"
            value={hidden ? 'R$ ••••••' : formatCurrency(monthlyFlow)}
            tone="warning"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  content: {
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 24,
    gap: 14,
  },
  greeting: {
    color: '#6d6d6d',
    fontSize: 14,
    fontWeight: '600',
  },
  title: {
    color: '#101010',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 4,
  },
  sectionHeader: {
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1d1d1d',
  },
  sectionHint: {
    color: '#8f8f8f',
    fontWeight: '600',
    fontSize: 12,
  },
  insightsGrid: {
    flexDirection: 'row',
    gap: 10,
  },
  insightBox: {
    flex: 1,
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
  },
  insightTitle: {
    fontSize: 12,
    color: '#707070',
    marginBottom: 8,
    fontWeight: '600',
  },
  insightValue: {
    fontSize: 16,
    color: '#1b1b1b',
    fontWeight: '800',
  },
  positive: {
    backgroundColor: '#f6fff6',
    borderColor: '#daf3da',
  },
  warning: {
    backgroundColor: '#fff8f0',
    borderColor: '#ffe3c0',
  },
});