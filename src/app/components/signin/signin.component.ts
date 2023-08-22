import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(
    private authService : AuthService,
    private router : Router,
    private toastrService : ToastrService){}

  signInCredentials(email: string, password: string): void {
    this.authService.signIn(email,password).subscribe((data:any) => {
      // this.toastrService.success('', '');
      localStorage.setItem("token", data.accessToken);
      this.router.navigate(['see-user'])
    },(err : any) => {
      // this.toastrService.error('Error', 'Something went wrong');
      console.log(err)
    })
  }
}
