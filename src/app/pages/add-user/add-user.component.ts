import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
