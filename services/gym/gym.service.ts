import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Gym, IGym } from '../../classes/gym';

@Injectable({
  providedIn: 'root'
})
export class GymService {

  gymCollectionRef: AngularFirestoreCollection<IGym>;
  gyms$: Observable<IGym[]>;

  constructor(private _afs: AngularFirestore) { 
    this.gymCollectionRef = this._afs.collection<IGym>('gyms');
    this.gyms$ = this.gymCollectionRef.valueChanges();
  }

  // model addGym off of this, pass in IGym or Gym
  // addTodo(todoDesc: string) {
  //   if (todoDesc && todoDesc.trim().length) {
  //     this.todoCollectionRef.add({ description: todoDesc, completed: false });
  //   }
  // }

  getGyms() {
    return this.gyms$;
  }

}
