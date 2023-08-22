import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
  public users: any[] = [];

  constructor(private router : Router, private dataService: DataService) {

  }

  ngOnInit(): void {
    this.users = this.dataService.getAllData();
  }

  navigateToAddUser():void {
    this.router.navigate(['/user/add-user']);
    return;
  }

  redirectToDetails(index: number) {
    this.router.navigate(['details', index]);
  }
}
