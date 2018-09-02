import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, IUser } from '../../classes/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  userDoc: AngularFirestoreDocument<User>;

  constructor(private afs: AngularFirestore) {

    this.usersCollection = this.afs.collection('users'); //ex query: ('Users', x => x.orderBy('firstname', 'asc'))

    // if we have a user list or something...?
    // this.users = this.usersCollection.snapshotChanges().pipe(
    //   map(
    //     changes => {
    //       return changes.map(
    //         a => {
    //           const data = a.payload.doc.data() as User;
    //           //data.$key = a.payload.doc.$key;
    //           return data;
    //         });
    //     })
    //   )
  }

  getUsers() {
    return this.users;
  }

  addUser(user: User) {
    this.usersCollection.add({...user});
  }

  updateUser(user: User) {
    console.log('updating', user);

    //  reference code
    //   updateTask(id, update) {
    //     //Get the task document
    //     this.taskDoc = this.db.doc<Task>(`${config.collection_endpoint}/${id}`);
    //     this.taskDoc.update(update);
    //  } //updateTask
  }

  deleteUser(user: User) { //but I really don't need a user, just the key
    //this.userDoc = this._afs.doc(`Users/${user.$key}`);
    //this.userDoc.delete();
    console.log('deleting', user);
  }

}
