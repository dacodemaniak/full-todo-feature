import { User } from './user';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '../shared/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class UserCollection {
  private _users: Array<User>;

  public constructor(private storage: LocalStorageService) {
    // Instanciates the users Array
    this._users = new Array<User>();

    // Hydrate the collection with some dummy datas
    this._hydrate();
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
   * @param user User updated
   */
  public update(user: User): UserCollection {
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
  public getCollection(): Array<User> {
    return this._users;
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
  private _hydrate(): void {
    const users: Array<any> = this.storage.get('users');
    if (users.length) {
      users.forEach((user: any, index: number) => {
        let transformedUser: User = new User();
        this._users.push(transformedUser.transform(user));
        // or...
        //this._users.push(new User().transform(user));
      });
    }
  }
}
