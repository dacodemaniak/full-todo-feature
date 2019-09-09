import { Component, OnInit } from '@angular/core';

import { User } from './../../models/user';
import { UserCollection } from './../../models/user-collection';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /**
   * Collection of some users
   * @var UserCollection
   */
  private collection: UserCollection = new UserCollection();

  /**
   * The collection...
   */
  public users: Array<User>;

  public title: String = new String('Utilisateurs');

  public constructor() {}

  /**
   * Invoked just after the component constructor
   */
  ngOnInit(): void {
    this.users = this.collection.getCollection();
    // or... this.users = this.collection.users;
  }

  /**
   * Toggle the hidden status of the address
   * @return void
   */
  public toggleStatus(user: User): void {
    const currentStatus: boolean = user.isAddressHidden;

    this.collection.resetStatus();

    user.isAddressHidden = !currentStatus;
  }

}
