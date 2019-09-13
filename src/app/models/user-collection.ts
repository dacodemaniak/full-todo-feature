import { User } from './user';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserCollection {
  private _users: Array<User>;

  private _isReady: boolean = false;

  public constructor(private storage: LocalStorageService) {
    // Instanciates the users Array
    this._users = new Array<User>();
  }

  public isReady(): boolean {
    return this._isReady;
  }

  /**
   * Adds a user in the collection
   * @param user User to be added
   */
  public add(user: User): UserCollection {
    this._users.push(user); // Add an element to the array

    // Just persist all...
    this.storage.set('users', this._users);

    return this;
  }

  /**
   * Gets a user from the collection
   */
  public get(): User {
    return null;
  }

  /**
   * Update a user in the collection
   * @param user original User
   * @param newUser Modified User
   */
  public update(user: User, newUser: User): UserCollection {
    const index: number = this._users.indexOf(user);
    this._users[index] = newUser;

    // Don't forget to persist
    this.storage.set('users', this._users);

    return this;
  }

  /**
   * Removes a user from the collection
   * @param user The user to be deleted
   */
  public remove(user: User): UserCollection {
    // Gets the index value of "user" in the array
    const index: number = this._users.indexOf(user);

    // If found (index <> -1)
    if (index !== -1) {
      this._users.splice(index, 1); // Removes the index
    }
    // Invoke the persistent method
    this.storage.set('users', this._users);

    return this;
  }

  /**
   * Gets the collection of users
   * @return Array<User>
   */
  public getCollection(): Promise<Array<User>> {
    return this._hydrate();
  }

  public get users(): Array<User> {
    return this._users;
  }

  public resetStatus() {
    this._users.forEach((user, index) => {
      user.isAddressHidden = true;
    });
  }

  /**
   * Retrieve anonymous collection of things...
   * Just think to make real User
   */
  private _hydrate(): Promise<Array<User>> {

    return new Promise((resolve) => {
      let users: Array<any> = new Array<any>();

      this.storage.get('users').then((datas: Array<any>) => {
        console.log('Users from storage : ' + JSON.stringify(datas));
        users = datas;
        if (users.length) {
          users.forEach((user: any, index: number) => {
            let transformedUser: User = new User();
            this._users.push(transformedUser.transform(user));
          });
        }

        setTimeout(() => {
          this._isReady = true;
          resolve(this._users);
          console.log('Users are ready ' + this._users.length);
        }, 2000);

      });
    });
  }
}
