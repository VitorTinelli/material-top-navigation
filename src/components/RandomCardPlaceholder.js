import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function RandomCardPlaceholder({ card, onGenerateNew }) {
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.decorCircleLarge} />
        <View style={styles.decorCircleSmall} />

        <View style={styles.topRow}>
          <Text style={styles.typeLabel}>Cartao virtual</Text>
          <Text style={styles.brand}>{card.brand}</Text>
        </View>

        <Text style={styles.number}>{card.number}</Text>

        <View style={styles.bottomRow}>
          <View>
            <Text style={styles.metaLabel}>Nome</Text>
            <Text style={styles.metaValue}>{card.holder}</Text>
          </View>

          <View>
            <Text style={styles.metaLabel}>Validade</Text>
            <Text style={styles.metaValue}>{card.expiresAt}</Text>
          </View>

          <View>
            <Text style={styles.metaLabel}>CVV</Text>
            <Text style={styles.metaValue}>{card.cvv}</Text>
          </View>
        </View>
      </View>

      <Pressable style={styles.generateButton} onPress={onGenerateNew}>
        <Text style={styles.generateButtonText}>Gerar outro cartao</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    padding: 20,
    backgroundColor: '#ff7a00',
    overflow: 'hidden',
    minHeight: 220,
  },
  decorCircleLarge: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#ffae62',
    right: -70,
    top: -90,
  },
  decorCircleSmall: {
    position: 'absolute',
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#ffaa5b',
    left: -45,
    bottom: -65,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 34,
  },
  typeLabel: {
    color: '#000000',
    fontWeight: '600',
  },
  brand: {
    color: '#f87800',
    fontWeight: '800',
    fontSize: 16,
  },
  number: {
    color: '#ffffff',
    fontSize: 24,
    letterSpacing: 1,
    fontWeight: '700',
    marginBottom: 28,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metaLabel: {
    color: '#000000',
    fontSize: 11,
    marginBottom: 4,
  },
  metaValue: {
    color: '#ffffff',
    fontWeight: '700',
  },
  generateButton: {
    marginTop: 14,
    backgroundColor: '#ff7a00',
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 12,
  },
  generateButtonText: {
    color: '#ffffff',
    fontWeight: '700',
  },
});