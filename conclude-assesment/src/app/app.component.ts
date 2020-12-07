import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './shared/models/user';
import { AuthenticationService } from './shared/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: User;

  constructor(
    private router: Router,
    private authService: AuthenticationService
) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    console.log('User logged out')
}
}
