export class User {
  /**
   * user first name
   * @var string
   */
  private _firstName: string;

  /**
   * user last name
   * @var string
   */
  private _lastName: string;

  /**
   * user birth date
   * @var Date
   */
  private _birthDate: Date;

  /**
   * postal address of this user
   * @var string
   */
  private _address: string;

  /**
   * zipcode of this user
   * @var string
   */
  private _zipCode: string;

  /**
   * City of this user
   * @var string
   */
  private _city: string;

  /**
   * Manage visibility status of the address
   * @var boolean
   */
  private _isAddressHidden: boolean = true;

  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(value: string) {
    this._firstName = value;
  }

  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }

  public get birthDate(): Date {
    return this._birthDate;
  }
  public set birthDate(value: Date) {
    this._birthDate = value;
  }

  public get address(): string {
    return this._address;
  }
  public set address(value: string) {
    this._address = value;
  }

  public get zipCode(): string {
    return this._zipCode;
  }
  public set zipCode(value: string) {
    this._zipCode = value;
  }

  public get city(): string {
    return this._city;
  }
  public set city(value: string) {
    this._city = value;
  }

  public get isAddressHidden(): boolean {
    return this._isAddressHidden;
  }

  public set isAddressHidden(isHidden: boolean) {
    this._isAddressHidden = isHidden;
  }

  /**
   * Deserializes anonymous user to hydrate and return
   * a Full Qualified User
   * @param user
   */
  public transform(user: any): User {
    Object.assign(this, user);
    return this;
  }
}
