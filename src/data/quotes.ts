/** 30 inspirational quotes — index = (date index) % 30 for daily rotation */
export const MOTIVATIONAL_QUOTES = [
  "The only way to do great work is to love what you do.",
  "Innovation distinguishes between a leader and a follower.",
  "Stay hungry, stay foolish.",
  "Your time is limited; don't waste it living someone else's life.",
  "The best way to predict the future is to create it.",
  "Excellence is not a skill, it's an attitude.",
  "Believe you can and you're halfway there.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "The only impossible journey is the one you never begin.",
  "Dream big, start small, act now.",
  "Quality is not an act, it is a habit.",
  "The secret of getting ahead is getting started.",
  "Do what you can, with what you have, where you are.",
  "It does not matter how slowly you go as long as you do not stop.",
  "Opportunities don't happen. You create them.",
  "The best time to plant a tree was 20 years ago. The second best time is now.",
  "Strive not to be a success, but rather to be of value.",
  "What you get by achieving your goals is not as important as what you become.",
  "The only place where success comes before work is in the dictionary.",
  "Don't watch the clock; do what it does. Keep going.",
  "Success usually comes to those who are too busy to be looking for it.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Act as if what you do makes a difference. It does.",
  "You are never too old to set another goal or to dream a new dream.",
  "The way to get started is to quit talking and begin doing.",
  "It always seems impossible until it's done.",
  "Start where you are. Use what you have. Do what you can.",
  "Small steps every day lead to big results.",
  "Focus on progress, not perfection.",
  "You don't have to be great to start, but you have to start to be great.",
];

/** Get quote for the day: use today's date index mod 30 so the same quote shows all day, new quote next day */
export function getQuoteForDate(date: Date): string {
  const dayOfYear = Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)
  );
  const index = dayOfYear % MOTIVATIONAL_QUOTES.length;
  return MOTIVATIONAL_QUOTES[index];
}
