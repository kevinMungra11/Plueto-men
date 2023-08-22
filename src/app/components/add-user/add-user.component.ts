import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {
  form!: FormGroup;
  public dataList: any[] = [];

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.dataList = dataService.getAllData();
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      addresses: this.fb.array([])
    });

    this.addAddress();
  }

  get addresses(): FormArray {
    return this.form.get('addresses') as FormArray;
  }

  addAddress() {
    const addressGroup = this.fb.group({
      pincode: ['', Validators.required],
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required]
    });

    this.addresses.push(addressGroup);
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }

  onSubmit() {
    this.dataService.addData(this.form.value);
    this.form.reset();
  }

}
