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
   * The collection...
   */
  public users: Array<User>;

  public title: String = new String('Utilisateurs');

  public constructor(
    private collection: UserCollection
  ) {}

  /**
   * Invoked just after the component constructor
   */
  ngOnInit(): void {
    this.users = this.collection.getCollection();
    // or... this.users = this.collection.users;
  }

  /**
   * Invoke repository method to remove the 'user'
   * @param user User to remove
   */
  public remove(user: User): void {
    this.collection.remove(user);
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
