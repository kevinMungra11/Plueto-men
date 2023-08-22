import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router,private authService: AuthService){

  }

  isSignedIn():boolean {
    return !this.authService.isSignedIn();
  }

  navigateToSignIn():void {
    this.router.navigate(['/signin']);
    return;
  }

  navigateToAddUser():void {
    this.router.navigate(['/user/add-user']);
    return;
  }

  navigateToShowUsers(): void {
    this.router.navigate(['/see-user']);
    return;
  }

  navigateToHome():void {
    localStorage.clear();
    this.router.navigate(['/signin']);
    return;
  }
}
