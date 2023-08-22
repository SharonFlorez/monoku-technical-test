import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoodEntry } from './mood-entry';

@Injectable({
  providedIn: 'root',
})
export class MoodEntryService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';

  constructor(private http: HttpClient) {}

  addMoodEntry(entry: MoodEntry): Observable<MoodEntry> {
    return this.http.post<MoodEntry>(this.apiUrl, entry);
  }
}
