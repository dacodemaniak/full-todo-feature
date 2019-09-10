import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { BirthDateValidatorService } from './../../shared/services/birth-date-validator.service';
import { UserCollection } from 'src/app/models/user-collection';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  /**
   * Manage the error placeholder
   * Keep
   * It
   * Simple and
   * Stupid
   */
  public hasErrors: boolean = false;

  /**
   * Form manager handled by ReactiveForms
   */
  public userForm: FormGroup;

  /**
   *
   * @param formBuilder As Dependency Injection
   */
  constructor(
    private formBuilder: FormBuilder,
    private birthDateValidator: BirthDateValidatorService,
    private collection: UserCollection
  ) { }

  /**
   * Controls getter
   */
  public get name(): AbstractControl {
    return this.userForm.controls.name;
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
  ngOnInit() {
    // Instanciates a new FormGroup using FormBuilder
    this.userForm = this.formBuilder.group({
      name: [
        '',
        [Validators.required, Validators.minLength(3)]
      ],
      firstName: [
        '',
        Validators.required
      ],
      address: [
        '',
        Validators.required
      ],
      zipCode: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(5),
          Validators.pattern('^(0|[1-9][0-9]*)$')
        ]
      ],
      city: [
        '',
        Validators.required
      ],
      birthDate: [
        '',
        Validators.required,
        this.birthDateValidator.isLowerThan.bind(this.birthDateValidator)
      ]
    });
  }

  public submit() {
    console.log('Yo... Datas are : ' + JSON.stringify(this.userForm.value));

    // First, instanciate a brand new User and feed with form values
    const brandNewUser: User = new User();
    brandNewUser.lastName = this.name.value;
    brandNewUser.firstName = this.firstName.value;
    brandNewUser.address = this.address.value;
    brandNewUser.city = this.city.value;
    brandNewUser.zipCode = this.zipCode.value;
    brandNewUser.birthDate = this.birthDate.value;

    // Second... (special thx for Felice) persist this user into persistent object
    this.collection.add(brandNewUser);

    // Third, go back to home...

    // Cherry on cake : put a toast to inform the end user...
  }
}
