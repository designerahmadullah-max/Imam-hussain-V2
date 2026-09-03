export type Category =
  | "imam-hussain"
  | "muharram"
  | "karbala"
  | "companions"
  | "arbaeen"
  | "ziarat"
  | "lessons"
  | "resources";

export interface Article {
  id: number;
  slug: string;
  category: Category;
  categoryLabel: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
}

export const categoryMeta: Record<Category, { label: string; description: string; chapter: string }> = {
  "imam-hussain": { label: "Imam Hussain", description: "Life, legacy and biography of Imam Hussain (A.S.)", chapter: "CHAPTER 01" },
  "muharram": { label: "Muharram", description: "Events and remembrance of Muharram", chapter: "CHAPTER 02" },
  "karbala": { label: "Karbala", description: "History, sacrifice and the Battle of Karbala", chapter: "CHAPTER 03" },
  "companions": { label: "Companions", description: "Loyalty and sacrifice of the companions", chapter: "CHAPTER 04" },
  "arbaeen": { label: "Arbaeen", description: "The world's largest peaceful pilgrimage", chapter: "CHAPTER 05" },
  "ziarat": { label: "Ziarat", description: "Shrine, devotion and spiritual journey", chapter: "CHAPTER 06" },
  "lessons": { label: "Lessons", description: "Wisdom, moral lessons and guidance", chapter: "CHAPTER 07" },
  "resources": { label: "Resources", description: "Books, lectures and learning resources", chapter: "CHAPTER 08" },
};

const dummyContent = `
Imam Hussain ibn Ali (A.S.) was the grandson of Prophet Muhammad (PBUH) and the son of Imam Ali (A.S.) and Lady Fatima (A.S.). Born in the 4th year of Hijra, he grew up in the household of prophethood, absorbing the values of truth, justice, and compassion from his earliest days.

The stand he made at Karbala on the 10th of Muharram, 61 AH, was not merely a historical event — it was a timeless declaration that oppression must be confronted no matter the cost. With only 72 companions against an army of thousands, Imam Hussain chose death over subjugation, honor over compromise.

"Death with dignity is better than a life of humiliation." — Imam Hussain (A.S.)

His sacrifice reshaped the moral conscience of humanity. The message of Karbala transcends time, geography, and faith. From the streets of Najaf to the universities of the West, people of all backgrounds have found in the story of Imam Hussain a mirror that reflects the eternal struggle between truth and falsehood.

The annual commemoration of Ashura is not mourning for its own sake — it is a renewal of the covenant to stand for justice, to speak truth to power, and to never bow before oppression. Billions have carried this torch for fourteen centuries, and billions more will continue to do so.

The Arbaeen Walk, forty days after Ashura, brings together millions from across the globe in one of the most extraordinary expressions of human solidarity ever witnessed. People of all nationalities, faiths, and backgrounds walk side by side to honor the memory of a man who gave everything so that future generations would know what it means to live with dignity.

Imam Hussain's legacy is not the legacy of defeat — it is the legacy of eternal victory. The victory of conscience over compromise, of truth over falsehood, of love over hatred.
`;

export const articles: Article[] = [
  {
    id: 1,
    slug: "the-battle-of-karbala",
    category: "karbala",
    categoryLabel: "KARBALA",
    title: "The Battle of Karbala: What Happened and Why It Matters",
    excerpt: "Imam Hussain (A.S) is the eternal symbol of truth, justice, sacrifice and human dignity. His message of courage and principle continues to inspire the world.",
    content: dummyContent,
    image: "img1",
    author: "Editorial Team",
    date: "September 1, 2026",
    readTime: "8 min read",
  },
  {
    id: 2,
    slug: "lessons-from-karbala",
    category: "lessons",
    categoryLabel: "LESSONS",
    title: "Lessons from Karbala: Justice, Sacrifice & Courage",
    excerpt: "The events of Karbala carry timeless moral lessons that remain as relevant today as they were in 680 CE.",
    content: dummyContent,
    image: "img2",
    author: "Editorial Team",
    date: "August 28, 2026",
    readTime: "6 min read",
  },
  {
    id: 3,
    slug: "lady-zainab-voice-of-karbala",
    category: "companions",
    categoryLabel: "COMPANIONS",
    title: "Lady Zainab: The Voice of Karbala",
    excerpt: "After the tragedy of Karbala, it was Lady Zainab who carried the message forward, ensuring the world would never forget.",
    content: dummyContent,
    image: "img3",
    author: "Editorial Team",
    date: "August 25, 2026",
    readTime: "5 min read",
  },
  {
    id: 4,
    slug: "ashura-the-day-that-changed-history",
    category: "muharram",
    categoryLabel: "MUHARRAM",
    title: "Ashura: The Day That Changed History",
    excerpt: "The 10th of Muharram is one of the most significant days in Islamic history, marking the martyrdom of Imam Hussain.",
    content: dummyContent,
    image: "img4",
    author: "Editorial Team",
    date: "August 20, 2026",
    readTime: "7 min read",
  },
  {
    id: 5,
    slug: "imam-hussain-family-and-companions",
    category: "imam-hussain",
    categoryLabel: "IMAM HUSSAIN",
    title: "Imam Hussain's Family and Companions",
    excerpt: "The people who stood with Imam Hussain at Karbala were among the most devoted souls in history.",
    content: dummyContent,
    image: "img5",
    author: "Editorial Team",
    date: "August 18, 2026",
    readTime: "5 min read",
  },
  {
    id: 6,
    slug: "imam-hussain-shrine-spiritual-journey",
    category: "ziarat",
    categoryLabel: "ZIARAT",
    title: "Imam Hussain Shrine: A Spiritual Journey",
    excerpt: "Visiting the shrine of Imam Hussain in Karbala is an experience that touches the soul in ways beyond words.",
    content: dummyContent,
    image: "img6",
    author: "Editorial Team",
    date: "August 15, 2026",
    readTime: "6 min read",
  },
  {
    id: 7,
    slug: "companions-of-imam-hussain",
    category: "companions",
    categoryLabel: "COMPANIONS",
    title: "The Companions of Imam Hussain",
    excerpt: "Seventy-two men stood with Imam Hussain at Karbala. Each had a story of loyalty, faith and extraordinary courage.",
    content: dummyContent,
    image: "img7",
    author: "Editorial Team",
    date: "August 12, 2026",
    readTime: "8 min read",
  },
  {
    id: 8,
    slug: "why-imam-hussain-stood-against-yazid",
    category: "imam-hussain",
    categoryLabel: "IMAM HUSSAIN",
    title: "Why Did Imam Hussain Stand Against Yazid?",
    excerpt: "Understanding the political and moral context of Imam Hussain's refusal to pledge allegiance to Yazid.",
    content: dummyContent,
    image: "img8",
    author: "Editorial Team",
    date: "August 10, 2026",
    readTime: "7 min read",
  },
  {
    id: 9,
    slug: "life-of-imam-hussain-before-karbala",
    category: "imam-hussain",
    categoryLabel: "IMAM HUSSAIN",
    title: "The Life of Imam Hussain Before Karbala",
    excerpt: "Before the plains of Karbala, Imam Hussain lived a life of profound spiritual depth, wisdom, and devotion.",
    content: dummyContent,
    image: "img9",
    author: "Editorial Team",
    date: "August 8, 2026",
    readTime: "9 min read",
  },
  {
    id: 10,
    slug: "night-of-ashura",
    category: "muharram",
    categoryLabel: "MUHARRAM",
    title: "The Night of Ashura: What Happened Before the Battle",
    excerpt: "The night of the 9th of Muharram was filled with prayer, resolve, and a profound sense of destiny.",
    content: dummyContent,
    image: "img10",
    author: "Editorial Team",
    date: "August 5, 2026",
    readTime: "6 min read",
  },
  {
    id: 11,
    slug: "imam-hussain-letters",
    category: "lessons",
    categoryLabel: "LESSONS",
    title: "Imam Hussain's Letters: Calls for Justice and Reform",
    excerpt: "Before Karbala, Imam Hussain wrote powerful letters to Muslim leaders urging them to stand for truth.",
    content: dummyContent,
    image: "img11",
    author: "Editorial Team",
    date: "August 2, 2026",
    readTime: "5 min read",
  },
  {
    id: 12,
    slug: "march-of-arbaeen",
    category: "arbaeen",
    categoryLabel: "ARBAEEN",
    title: "The March of Arbaeen: The World's Largest Peaceful Gathering",
    excerpt: "Every year, tens of millions walk to Karbala in one of the most extraordinary expressions of human love.",
    content: dummyContent,
    image: "img1",
    author: "Editorial Team",
    date: "July 30, 2026",
    readTime: "7 min read",
  },
  {
    id: 13,
    slug: "biography-imam-hussain",
    category: "imam-hussain",
    categoryLabel: "IMAM HUSSAIN",
    title: "Biography of Imam Hussain (A.S.): From Birth to Martyrdom",
    excerpt: "A comprehensive look at the life of Imam Hussain, from his birth in Medina to his martyrdom at Karbala.",
    content: dummyContent,
    image: "img2",
    author: "Editorial Team",
    date: "July 27, 2026",
    readTime: "12 min read",
  },
  {
    id: 14,
    slug: "ziyarat-ashura",
    category: "ziarat",
    categoryLabel: "ZIARAT",
    title: "Ziyarat Ashura: The Supplication of Remembrance",
    excerpt: "Ziyarat Ashura is one of the most revered prayers in the Islamic tradition, recited to honor Imam Hussain.",
    content: dummyContent,
    image: "img3",
    author: "Editorial Team",
    date: "July 24, 2026",
    readTime: "4 min read",
  },
  {
    id: 15,
    slug: "justice-and-freedom-karbala",
    category: "lessons",
    categoryLabel: "LESSONS",
    title: "Justice and Freedom: The Core Message of Karbala",
    excerpt: "The revolution of Imam Hussain at Karbala was fundamentally about establishing justice and freeing humanity from oppression.",
    content: dummyContent,
    image: "img4",
    author: "Editorial Team",
    date: "July 20, 2026",
    readTime: "6 min read",
  },
  {
    id: 16,
    slug: "muharram-traditions",
    category: "muharram",
    categoryLabel: "MUHARRAM",
    title: "Muharram Traditions: How the World Commemorates Karbala",
    excerpt: "From processions in Iran to gatherings in India, Pakistan, Iraq and beyond — Muharram is observed across the globe.",
    content: dummyContent,
    image: "img5",
    author: "Editorial Team",
    date: "July 17, 2026",
    readTime: "8 min read",
  },
  {
    id: 17,
    slug: "habib-ibn-mazahir",
    category: "companions",
    categoryLabel: "COMPANIONS",
    title: "Habib ibn Mazahir: The Faithful Companion",
    excerpt: "Among all the companions who stood with Imam Hussain, Habib ibn Mazahir held a special place of loyalty and devotion.",
    content: dummyContent,
    image: "img6",
    author: "Editorial Team",
    date: "July 14, 2026",
    readTime: "5 min read",
  },
  {
    id: 18,
    slug: "arbaeen-walk-experience",
    category: "arbaeen",
    categoryLabel: "ARBAEEN",
    title: "Walking the Arbaeen: A Personal Journey to Karbala",
    excerpt: "Pilgrims from 90+ countries walk together for days to reach the shrine of Imam Hussain. Here is what it feels like.",
    content: dummyContent,
    image: "img7",
    author: "Editorial Team",
    date: "July 10, 2026",
    readTime: "10 min read",
  },
];
