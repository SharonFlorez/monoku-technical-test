import { Injectable } from '@angular/core';
import { OpenAI } from 'openai';
import { API_KEY } from './config';

const openAi = new OpenAI({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true,
});

@Injectable({
  providedIn: 'root',
})
export class OpenaiService {
  constructor() {}

  async analyzeSentiment(sentiment: string): Promise<string> {
    const prompt = `Analyze the sentiment of the following journal entry: "${sentiment}"`;

    const completion = await openAi.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });

    return (
      completion?.choices[0].message.content ??
      'No se dispone de un análisis de tus emociones en este momento.'
    );
  }
}
