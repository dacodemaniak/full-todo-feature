import { User } from './user';

export class UserCollection {
  private _users: Array<User>;

  public constructor() {
    // Instanciates the users Array
    this._users = new Array<User>();

    // Hydrate the collection with some dummy datas
    this._hydrate();
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
  private _hydrate(): void {
    // Push a new User into the collection
    let user: User = new User(); // Sets a variable named user
    // Define this user...
    user.firstName = 'James';
    user.lastName = 'Bond';
    user.address = '10, Downing Street';
    user.city = 'London';
    user.zipCode = '00000';
    user.birthDate = new Date('1943-04-12');

    // Push this user into collection
    this._users.push(user);

    // Define another user
    user = new User();
    user.firstName = 'Jean';
    user.lastName = 'Talut';
    user.address = '22, rue de la Mécanique';
    user.city = 'Montpellier';
    user.zipCode = '34000';
    user.birthDate = new Date('1981-05-10');

    this._users.push(user);

    // Define another user
    user = new User();
    user.firstName = 'Nicole';
    user.lastName = 'Scakolsanskotcz';
    user.address = '15, Bd de la République';
    user.city = 'Toulouse';
    user.zipCode = '31000';
    user.birthDate = new Date('1962-10-20');

    this._users.push(user);

  }
}
