const CARD_PREFIXES = ['4987', '5291', '4543', '5539', '4028'];
const CARD_NAMES = ['A. SILVA', 'M. SANTOS', 'J. OLIVEIRA', 'C. SOUZA'];
const CARD_BRANDS = ['Visa', 'Mastercard'];

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomBalance() {
  const cents = randomInt(-100000000, 100000000);
  return cents / 100;
}

export function formatCurrency(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

function pad4(value) {
  return String(value).padStart(4, '0');
}

export function generateRandomCard() {
  const prefix = CARD_PREFIXES[randomInt(0, CARD_PREFIXES.length - 1)];
  const block2 = pad4(randomInt(0, 9999));
  const block3 = pad4(randomInt(0, 9999));
  const block4 = pad4(randomInt(0, 9999));
  const month = pad4(randomInt(1, 12)).slice(2);
  const year = String(randomInt(27, 34));

  return {
    number: `${prefix} ${block2} ${block3} ${block4}`,
    holder: CARD_NAMES[randomInt(0, CARD_NAMES.length - 1)],
    expiresAt: `${month}/${year}`,
    cvv: String(randomInt(100, 999)),
    brand: CARD_BRANDS[randomInt(0, CARD_BRANDS.length - 1)],
  };
}