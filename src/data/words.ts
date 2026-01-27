export interface Word {
  id: string;
  word: string;
  pronunciation: string;
  partOfSpeech: string;
  definition: string;
  example: string;
  synonyms: string[];
  date: string;
}

export const todaysWord: Word = {
  id: "1",
  word: "Serendipity",
  pronunciation: "/ˌser.ənˈdɪp.ə.ti/",
  partOfSpeech: "noun",
  definition: "The occurrence of events by chance in a happy or beneficial way; the faculty of making fortunate discoveries by accident.",
  example: "The discovery of penicillin was a perfect example of serendipity in science.",
  synonyms: ["fortune", "luck", "chance", "providence", "fate"],
  date: new Date().toISOString().split('T')[0],
};

export const archivedWords: Word[] = [
  {
    id: "2",
    word: "Ephemeral",
    pronunciation: "/ɪˈfem.ər.əl/",
    partOfSpeech: "adjective",
    definition: "Lasting for a very short time; transitory or short-lived.",
    example: "The ephemeral beauty of cherry blossoms reminds us to appreciate the present moment.",
    synonyms: ["fleeting", "transient", "momentary", "brief", "short-lived"],
    date: "2024-01-25",
  },
  {
    id: "3",
    word: "Eloquent",
    pronunciation: "/ˈel.ə.kwənt/",
    partOfSpeech: "adjective",
    definition: "Fluent or persuasive in speaking or writing; clearly expressing or indicating something.",
    example: "Her eloquent speech moved the entire audience to tears.",
    synonyms: ["articulate", "fluent", "expressive", "persuasive", "silver-tongued"],
    date: "2024-01-24",
  },
  {
    id: "4",
    word: "Resilience",
    pronunciation: "/rɪˈzɪl.i.əns/",
    partOfSpeech: "noun",
    definition: "The capacity to recover quickly from difficulties; toughness and the ability to spring back into shape.",
    example: "The community showed remarkable resilience in the aftermath of the disaster.",
    synonyms: ["toughness", "flexibility", "durability", "strength", "adaptability"],
    date: "2024-01-23",
  },
  {
    id: "5",
    word: "Wanderlust",
    pronunciation: "/ˈwɒn.də.lʌst/",
    partOfSpeech: "noun",
    definition: "A strong desire to travel and explore the world.",
    example: "Her wanderlust led her to visit over 50 countries before turning thirty.",
    synonyms: ["restlessness", "itchy feet", "travel bug", "nomadism"],
    date: "2024-01-22",
  },
  {
    id: "6",
    word: "Luminous",
    pronunciation: "/ˈluː.mɪ.nəs/",
    partOfSpeech: "adjective",
    definition: "Full of or shedding light; bright or shining, especially in the dark.",
    example: "The luminous stars painted the night sky with their brilliant glow.",
    synonyms: ["bright", "radiant", "glowing", "brilliant", "shining"],
    date: "2024-01-21",
  },
  {
    id: "7",
    word: "Pensive",
    pronunciation: "/ˈpen.sɪv/",
    partOfSpeech: "adjective",
    definition: "Engaged in deep or serious thought; often with a sad or melancholic quality.",
    example: "She sat by the window with a pensive expression, lost in her memories.",
    synonyms: ["thoughtful", "contemplative", "reflective", "meditative", "wistful"],
    date: "2024-01-20",
  },
  {
    id: "8",
    word: "Quintessential",
    pronunciation: "/ˌkwɪn.tɪˈsen.ʃəl/",
    partOfSpeech: "adjective",
    definition: "Representing the most perfect or typical example of a quality or class.",
    example: "Paris is the quintessential romantic destination for couples worldwide.",
    synonyms: ["typical", "classic", "archetypal", "ideal", "definitive"],
    date: "2024-01-19",
  },
];

export const allWords = [todaysWord, ...archivedWords];
