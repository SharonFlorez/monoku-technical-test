export class GetMoodHelper {
  public static getEmoji(mood: string) {
    switch (mood) {
      case 'happy':
        return '😄';
      case 'good':
        return '😊';
      case 'neutral':
        return '😐';
      case 'bad':
        return '😞';
      case 'awful':
        return '😢';
      default:
        return '';
    }
  }
}
