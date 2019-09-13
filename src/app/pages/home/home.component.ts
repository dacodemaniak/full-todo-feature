import { Component, OnInit } from '@angular/core';

import { User } from './../../models/user';
import { UserCollection } from './../../models/user-collection';
import { ToastrService } from 'ngx-toastr';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BirthDateValidatorService } from './../../shared/services/birth-date-validator.service';
import { MatDialog } from '@angular/material';
import { DeleteDialogComponent } from './../../shared/components/delete-dialog/delete-dialog.component';

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

  /**
   * The form i want to share with the children component
   */
  public userForm: FormGroup;

  /**
   * The user who was selected for update
   */
  public aUser: User;

  public constructor(
    private collection: UserCollection,
    private toaster: ToastrService,
    private formBuilder: FormBuilder,
    private birthDateValidator: BirthDateValidatorService,
    private dialog: MatDialog
  ) {}

  /**
   * Invoked just after the component constructor
   */
  ngOnInit(): void {
    this.users = this.collection.getCollection();
    // or... this.users = this.collection.users;
  }

  /**
   * Check if a User
   * @return boolean
   */
  public hasUser(): boolean {
    return this.aUser ? true : false;
  }

  /**
   * Manage the update form for a User
   * @param user User object to be updated
   */
  public loadFormFor(user: User) {
    this.aUser = user;
    // Invoke formBuilder method for this user
    this._setForm();
  }

  /**
   * Invoke repository method to remove the 'user'
   * @param user User to remove
   */
  public remove(user: User): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: user
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed : ' + JSON.stringify(result));
      if (result) {
        this.collection.remove(user);
        this.toaster.warning(
          'L\'utilisateur ' + user.lastName + ' a bien été supprimé.',
          'Suppression'
        );
      }
    });

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

  public receiveUser(user: User): void {
    if (user) {
      // Call repository to update
      console.log('Received : ' + JSON.stringify(user));
      this.collection.update(this.aUser, user);

      // Notifiy the end user
    }

    // Reset aUser to null...
    this.aUser = null;
  }

  private _setForm(): void {
    if (this.aUser) {
      // Instanciates a new FormGroup using FormBuilder
      this.userForm = this.formBuilder.group({
        lastName: [
          this.aUser.lastName,
          [Validators.required, Validators.minLength(3)]
        ],
        firstName: [
          this.aUser.firstName,
          Validators.required
        ],
        address: [
          this.aUser.address,
          Validators.required
        ],
        zipCode: [
          this.aUser.zipCode,
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(5),
            Validators.pattern('^(0|[1-9][0-9]*)$')
          ]
        ],
        city: [
          this.aUser.city,
          Validators.required
        ],
        birthDate: [
          this.aUser.birthDate,
          Validators.required,
          this.birthDateValidator.isLowerThan.bind(this.birthDateValidator)
        ]
      });
    }

  }

}
