import type { IconPath } from "drocket";

export const iconFactory: Record<string, IconPath | Array<IconPath> | string> =
  {
    filter: "filter",
    bell: "bell",
    home: "home",
    payment: "group-dollar",
    account: "user-fill",
    exit: "exit",
    wallet: "wallet-filled-money-tool",
    recipients: "user3",
    transfer: "send",
    withdraw: "coin",
    bank: "bank2",
    trade: "exchange",
    plus: "plus",
    right: "right",
    chart: "bar-chart-1",
    recharge: "add-money",
    close: "close1",
    setting: "setting1",
    warning: "noti",
    pay: "bills-1",
    info: "noti",
    invite: "gifr",
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
