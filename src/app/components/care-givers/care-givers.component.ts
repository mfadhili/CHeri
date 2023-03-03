import { Component } from '@angular/core';

@Component({
  selector: 'app-care-givers',
  templateUrl: './care-givers.component.html',
  styleUrls: ['./care-givers.component.css']
})
export class CareGiversComponent {

  /** Menu data object*/
  /** TODO: to add menu responsive to Logged in user level*/
  /** TODO: to add icons */
  MenuItems = [
    {number: 1, tag: 'Active Care givers', url: ''},
    {number: 2, tag: 'Inactive Care givers', url: ''},
    {number: 3, tag: 'New Care giver', url: ''},
    {number: 4, tag: 'Manage Care givers', url: ''},
  ]
}
