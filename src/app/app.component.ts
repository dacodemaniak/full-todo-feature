import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  /**
   * An attribute declared for User type acceptation
   * @var User
   */
  public bond: User;

  /**
   * Manage visibility status of the address
   * @var boolean
   */
  // tslint:disable-next-line: no-inferrable-types
  public isAddressHidden: boolean = true;

  public constructor() {
    this.bond = new User();
    this.bond.firstName = 'James';
    this.bond.lastName = 'Bond';
    this.bond.address = '10, Downing Street';
    this.bond.city = 'London';
    this.bond.zipCode = '00000';
    this.bond.birthDate = new Date('1943-04-12');
  }

  /**
   * Toggle the hidden status of the address
   * @return void
   */
  public toggleStatus(): void {
      this.isAddressHidden = !this.isAddressHidden;
  }
}
