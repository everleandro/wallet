import type { IconPath } from "drocket";

export const iconFactory: Record<string, IconPath | Array<IconPath> | string> =
  {
    filter: "filter",
    bell: "bell",
    home: "home",
    payment: "group-dollar",
    account: "user-fill",
    accountBusiness: "store",
    accountPersonal: "user",
    exit: "exit",
    wallet: "wallet-filled-money-tool",
    recipients: "user3",
    transfer: "send",
    withdraw: "coin",
    shieldCheck: "secure1",
    bank: "bank2",
    setting: "setting1",
    trade: "exchange",
    plus: "plus",
    right: "right",
    chart: "bar-chart-1",
    recharge: "add-money",
    close: "close1",
    warning: "noti",
    pay: "bills-1",
    info: "noti",
    invite: "gifr",
    logout: "logout",
    search: "magnify",
    arrowback: "arrow-back",
  };

export default defineNuxtPlugin(() => {
  return {
    provide: {
      icon: iconFactory,
    },
  };
});
