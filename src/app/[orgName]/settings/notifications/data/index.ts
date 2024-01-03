export const notification_topics: {
  [key: string]: { [key: string]: boolean };
} = {
  contacts: {
    new_lead_added: true,
    account_upgraded: true,
  },
  inbox: {
    assigned_message: false,
    mention: false,
  },
};

export const notification_topics_labels: { [key: string]: string } = {
  new_lead_added: "A new lead is added",
  account_upgraded: "An account has upgraded",
  assigned_message: "A message is assigned to me",
  mention: "Somebody mentions me",
};
