import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from './../../models/user';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { BirthDateValidatorService } from 'src/app/shared/services/birth-date-validator.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  /**
   * Input attribute from the parent directive [user]
   */
  @Input() userForm: FormGroup;

  @Output() updateUserEvent: EventEmitter<User> = new EventEmitter<User>();

  constructor() {}

  /**
   * Controls getter
   */
  public get lastName(): AbstractControl {
    return this.userForm.controls.lastName;
  }

  public get firstName(): AbstractControl {
    return this.userForm.controls.firstName;
  }

  public get address(): AbstractControl {
    return this.userForm.controls.address;
  }
  public get zipCode(): AbstractControl {
    return this.userForm.controls.zipCode;
  }

  public get city(): AbstractControl {
    return this.userForm.controls.city;
  }

  public get birthDate(): AbstractControl {
    return this.userForm.controls.birthDate;
  }

  public submit(): void {
    const user: User = new User().transform(this.userForm.value);
    this.updateUserEvent.emit(user);
  }

  public dismiss(): void {
    this.updateUserEvent.emit(null);
  }

  ngOnInit() {
  }

}
