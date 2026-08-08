export type ChatRow = {
  id: string;
  name: string;
  preview: string;
  time: string;
  /** null = WhatsApp default (no DP) */
  avatar: string | null;
  brand?: boolean;
  group?: boolean;
  collage?: string[];
  pinned?: boolean;
  unread: number;
};

export type Bubble = {
  id: string;
  from: "user" | "kedu" | "other";
  name?: string;
  text: string;
  time: string;
  bold?: string;
};

export const FAMILY_COLLAGE = [
  "/avatars/mum.jpg",
  "/avatars/amaka.jpg",
  "/avatars/david.jpg",
  "/avatars/ngozi.jpg",
];

export const CHATS: ChatRow[] = [
  {
    id: "kedu",
    name: "Kedu",
    preview: "It's 7:42PM. Transfers reopen at 6AM.",
    time: "7:42 PM",
    avatar: "/kedu-mark.png",
    brand: true,
    pinned: true,
    unread: 2,
  },
  {
    id: "family",
    name: "Extended Family",
    preview: "Uncle Joe: Who has seen my message?",
    time: "7:41 PM",
    avatar: null,
    group: true,
    collage: FAMILY_COLLAGE,
    pinned: true,
    unread: 48,
  },
  {
    id: "amaka",
    name: "Amaka",
    preview: "don't tell me you're dumping me",
    time: "5:51 PM",
    avatar: "/avatars/amaka.jpg",
    unread: 4,
  },
  {
    id: "chioma",
    name: "Chioma",
    preview: "Are we still on for Saturday?",
    time: "4:02 PM",
    avatar: "/avatars/chioma.jpg",
    unread: 2,
  },
  {
    id: "bola",
    name: "Bola",
    preview: "Abeg send the deck before standup",
    time: "3:40 PM",
    avatar: null,
    unread: 3,
  },
  {
    id: "office",
    name: "Office Group",
    preview: "Can someone take this ASAP???",
    time: "2:18 PM",
    avatar: null,
    group: true,
    unread: 11,
  },
  {
    id: "mum",
    name: "Mum",
    preview: "Send the school fees when you can o",
    time: "1:05 PM",
    avatar: "/avatars/mum.jpg",
    unread: 1,
  },
  {
    id: "foodplace",
    name: "FoodPlace",
    preview: "Your order is ready 👀",
    time: "12:40 PM",
    avatar: "/avatars/foodplace.jpg",
    unread: 1,
  },
  {
    id: "tunde",
    name: "Tunde",
    preview: "Just sent the transfer 👍",
    time: "Yesterday",
    avatar: null,
    unread: 0,
  },
  {
    id: "funke",
    name: "Funke",
    preview: "Happy birthday in advance!!! 🎂",
    time: "Yesterday",
    avatar: null,
    unread: 2,
  },
];

export const FAMILY_THREAD: Bubble[] = [
  {
    id: "f1",
    from: "other",
    name: "Uncle Joe",
    text: "Who has seen my message?",
    time: "7:38 PM",
  },
  {
    id: "f2",
    from: "other",
    name: "Aunty Bisi",
    text: "Good evening family 🙏",
    time: "7:38 PM",
  },
  {
    id: "f3",
    from: "other",
    name: "Cousin Debo",
    text: "Pls everybody check the group",
    time: "7:39 PM",
  },
  {
    id: "f4",
    from: "other",
    name: "Uncle Joe",
    text: "I said who has seen my message???",
    time: "7:39 PM",
  },
  {
    id: "f5",
    from: "other",
    name: "Aunty Ngozi",
    text: "Amen 🙏🙏🙏",
    time: "7:40 PM",
  },
  {
    id: "f6",
    from: "other",
    name: "Bro Kola",
    text: "😂😂😂",
    time: "7:40 PM",
  },
  {
    id: "f7",
    from: "other",
    name: "Aunty Bisi",
    text: "God will provide 🙌",
    time: "7:40 PM",
  },
  {
    id: "f8",
    from: "other",
    name: "Uncle Joe",
    text: "So nobody will answer me?",
    time: "7:41 PM",
  },
];

export const KEDU_THREAD: Bubble[] = [
  {
    id: "k1",
    from: "user",
    text: "FoodPlace just dropped their account",
    time: "7:41 PM",
  },
  {
    id: "k2",
    from: "user",
    text: "transfer 15k?",
    time: "7:41 PM",
  },
  {
    id: "k3",
    from: "kedu",
    text: "It's 7:42PM. Transfers reopen at 6AM.",
    bold: "Transfer blocked.",
    time: "7:42 PM",
  },
  {
    id: "k4",
    from: "user",
    text: "ah come on. please",
    time: "7:42 PM",
  },
  {
    id: "k5",
    from: "kedu",
    text: "No. Land fund stays locked till morning.\nNo override.",
    time: "7:42 PM",
  },
  {
    id: "k6",
    from: "user",
    text: "fine. what did I even spend this week",
    time: "7:43 PM",
  },
  {
    id: "k7",
    from: "kedu",
    text: "Food ₦18.4k · Transfers ₦6.2k · Noise ₦4.1k",
    time: "7:43 PM",
  },
  {
    id: "k8",
    from: "user",
    text: "lock snacks after 7 too",
    time: "7:43 PM",
  },
  {
    id: "k9",
    from: "kedu",
    text: "Done. Strict mode is on. Sleep — the money will still be there.",
    time: "7:44 PM",
  },
];

export const familyChat = CHATS.find((c) => c.id === "family")!;
export const keduChat = CHATS.find((c) => c.id === "kedu")!;
