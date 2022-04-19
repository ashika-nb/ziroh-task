import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
    this.authService.checkLoginObservable.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn)

    console.log(this.isLoggedIn)
  }
  isLoggedIn: boolean = false;
  ngOnInit(): void {

  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
