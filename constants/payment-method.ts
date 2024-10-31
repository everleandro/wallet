import Icons from "~/constants/icons";
const CARD = {
  icon: Icons.card,
  text: "Card",
  message: "Pay with your card",
  fee: "0.29",
  id: 1,
};
const BANK = {
  icon: Icons.bank,
  text: "Bank Transfer",
  message: "Pay with your bank",
  fee: "0.40",
  id: 2,
};
const WALLET = {
  icon: Icons.wallet,
  text: "App Wallet",
  message: "Pay with your wallet",
  fee: "0.20",
  id: 3,
};

const BTC = {
  icon: Icons.btc,
  text: "BTC",
  message: "Pay with your BTC wallet",
  fee: "0.10",
  id: 4,
};
const USDT = {
  icon: Icons.usdt,
  text: "USDT",
  message: "Pay with your USDT wallet",
  fee: "0.30",
  id: 4,
};

const SELL = {
  icon: Icons.usd,
  text: "SELL",
  message: "Pay with your SELL wallet",
  fee: "0.25",
  id: 5,
};
export const PAYMENT_METHOD = { CARD, BANK, WALLET, BTC, SELL };
export const PAYMENT_METHOD_LIST = [BANK, WALLET, SELL, USDT];
