import Icons from "~/constants/icons";
const Home = { icon: "home", title: "Home", to: "/home" };
const Payment = { icon: Icons.payment, title: "Payment", to: "/payment" };
const Account = { icon: Icons.account, title: "Account", to: "/account" };
const Recipients = {
  icon: Icons.recipients,
  title: "Recipients",
  to: "/recipients",
};
const test = { icon: Icons.setting, title: "setting", to: "/payment" };
const TransferAndPay = {
  icon: Icons.transferAndPay,
  title: "Transfer & Pay",
  to: "/transfer-pay",
  stacked: true,
};

export const DESKTOP_LINKS = [Home, Payment, Account, Recipients];
export const MOBILE_LINKS = [Home, TransferAndPay, Payment, Recipients];
export const MOBILE_DRAWER_LINKS = [test, test, test];
