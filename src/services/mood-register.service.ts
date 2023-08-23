import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MoodRegister } from 'src/app/core/interfaces/mood-register.interface';

@Injectable({
  providedIn: 'root',
})
export class MoodRegisterService {
  constructor(private firestore: Firestore) {}

  addMood(mood: MoodRegister) {
    const moodRef = collection(this.firestore, 'moods');
    return addDoc(moodRef, mood);
  }

  getMoods(): Observable<MoodRegister[]> {
    const moodRef = collection(this.firestore, 'moods');
    return collectionData(moodRef, { idField: 'id' }) as Observable<
      MoodRegister[]
    >;
  }
}
