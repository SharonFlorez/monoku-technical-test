export interface MoodRegister {
  id?: string;
  date: {
    seconds: number;
    nanoseconds: number;
  };
  mood: string;
  journalEntry: string;
}
