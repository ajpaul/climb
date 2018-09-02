import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore'
import { User } from '../../classes/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  currentUser$ : Observable<User>;
  currentUserDoc : AngularFirestoreDocument<User>;

  constructor(private afs: AngularFirestore) { 
    this.currentUserDoc = this.afs.doc('/users/veT36nFqNEC5qGsd5IuK');
    this.currentUser$ = this.currentUserDoc.valueChanges();
  }

  getUser() {
    return this.currentUser$;
  }
}
