import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from '../auth/shared/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faUser = faUser;
  isLoggedIn: boolean | undefined;
  username: string | undefined;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.authenticationService.loggedIn.subscribe((data: boolean) => this.isLoggedIn = data);
    this.authenticationService.username.subscribe((data: string) => this.username = data);
    this.isLoggedIn = this.authenticationService.isLoggedIn();
    this.username = this.authenticationService.getUsername();
  }

  goToUserProfile() {
    this.router.navigateByUrl('/user-profile/' + this.username);
  }

  logout() {
    this.authenticationService.logout();
    this.isLoggedIn = false;
    this.router.navigateByUrl('');
  }
}
