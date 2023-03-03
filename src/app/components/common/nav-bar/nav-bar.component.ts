import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  /** Data variables*/
  homeName!: string;
  private user: any;
  userData = false;

  /** TODO : Add apiService to constructor*/
  constructor( public router: Router) {
  }

  /** Load Home name and User's name from session storage*/
  ngOnInit(): void {
    this.homeName = "Furaha Center" || sessionStorage.getItem('homeName');
    this.user = JSON.parse(sessionStorage.getItem('user') || '{}')
  }


  /** Log out function. Cleans session storage */
  logOut(): void {
    sessionStorage.removeItem('userRole');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('homeName');
    // this.router.navigateByUrl(['login'])
  }
}
