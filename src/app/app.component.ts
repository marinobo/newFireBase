import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { collection, addDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBwXrGHau--58q5ehtA3hGGFn6Nuxm1qYA',
  authDomain: 'fazt-crud-fb-e8ea1.firebaseapp.com',
  databaseURL: 'https://fazt-crud-fb-e8ea1-default-rtdb.firebaseio.com',
  projectId: 'fazt-crud-fb-e8ea1',
  storageBucket: 'fazt-crud-fb-e8ea1.appspot.com',
  messagingSenderId: '802837471344',
  appId: '1:802837471344:web:a4bbceec4bc76bc4ca54b5',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  async save() {
    const db = getFirestore();
    const table = (document.getElementById('title') as any).value;
    const title = (document.getElementById('title') as any).value;
    const description = (document.getElementById('description') as any).value;
    try {
      const docRef = await addDoc(collection(db, `${table}`), {
        title,
        description,
      });
      alert('Se inserto de manera correcta la información');
    } catch (e) {
      alert(`${e}`);
    }
  }
}
