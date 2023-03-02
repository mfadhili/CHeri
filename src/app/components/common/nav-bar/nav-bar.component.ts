import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  homeName!: string;
  private user: any;
  userData = false;

  /** TODO : Add apiService to constructor*/
  constructor( public router: Router) {
  }

  ngOnInit(): void {
    this.homeName = "Furaha Center" || sessionStorage.getItem('homeName');
    this.user = JSON.parse(sessionStorage.getItem('user') || '{}')
  }

  logOut(): void {
    sessionStorage.removeItem('userRole');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('homeName');
    // this.router.navigateByUrl(['login'])
  }
}
