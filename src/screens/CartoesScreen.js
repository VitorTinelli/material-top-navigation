import React from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import RandomCardPlaceholder from '../components/RandomCardPlaceholder';
import { generateRandomCard } from '../utils/randomGenerators';

function QuickAction({ title, subtitle }) {
  return (
    <Pressable style={styles.actionItem}>
      <Text style={styles.actionTitle}>{title}</Text>
      <Text style={styles.actionSubtitle}>{subtitle}</Text>
    </Pressable>
  );
}

export default function CartoesScreen() {
  const [card, setCard] = React.useState(generateRandomCard());

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Cartoes</Text>
        <Text style={styles.subtitle}>Gerencie seu cartao principal e virtual</Text>

        <RandomCardPlaceholder card={card} onGenerateNew={() => setCard(generateRandomCard())} />

        <Text style={styles.sectionTitle}>Ações rápidas</Text>

        <View style={styles.actionGrid}>
          <QuickAction title="Ajustar limite" subtitle="Controle em segundos" />
          <QuickAction title="Cartao virtual" subtitle="Compra online mais segura" />
          <QuickAction title="Bloquear agora" subtitle="Em caso de perda" />
          <QuickAction title="Fatura" subtitle="Resumo dos gastos" />
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
  },
  title: {
    color: '#101010',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 4,
  },
  subtitle: {
    color: '#6f6f6f',
    fontSize: 14,
    marginBottom: 18,
    fontWeight: '500',
  },
  sectionTitle: {
    marginTop: 18,
    marginBottom: 10,
    color: '#222222',
    fontWeight: '800',
    fontSize: 18,
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  actionItem: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#ececec',
    padding: 12,
    minHeight: 90,
    justifyContent: 'space-between',
  },
  actionTitle: {
    color: '#1e1e1e',
    fontWeight: '700',
  },
  actionSubtitle: {
    color: '#7e7e7e',
    fontSize: 12,
    fontWeight: '500',
  },
});