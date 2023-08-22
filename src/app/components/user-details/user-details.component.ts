import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  user: any;
  index: any;

  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params) {
        this.index = params.get('id');
      }      
      console.log(this.index);
      // Fetch data using the index from the DataService
      this.user = this.dataService.getDataByIndex(this.index);
      console.log(this.user);
    });
  }

  editUser() {
    this.router.navigate(['/user/edit', this.index]);
  }

  deleteUser() {
    this.dataService.deleteData(this.index);
    this.router.navigate(['see-user']);
    return;
  }
}
