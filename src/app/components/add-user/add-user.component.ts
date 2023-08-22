import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ValidatorFn, AbstractControl } from '@angular/forms';

function minLengthArray(min: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const formArray = control as FormArray;
    const length = formArray.length;
    return length >= min ? null : { minLengthArray: { requiredLength: min, actualLength: length } };
  };
}
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  form!: FormGroup;
  public dataList: any[] = [];
  public index: number = -1;

  data: any = {};

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService) {
    this.dataList = dataService.getAllData();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params) {
        let id: any = params.get('id');

        if (typeof id === 'string') {
          id = parseInt(id);
          this.index = id;
          console.log(id);
        }
      }
    });

    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      addresses: this.fb.array([], minLengthArray(1))
    });

    if (this.index === -1) {
      this.addAddress();
    } else {
      this.data = this.dataService.getDataByIndex(this.index);
      console.log(this.data);

      this.form.patchValue({
        name: this.data.name,
        email: this.data.email,
        mobile: this.data.mobile
      });

      const addressFGs = this.data.addresses.map((address: object) => this.fb.group(address));
      const addressFormArray = this.fb.array(addressFGs);
      this.form.setControl('addresses', addressFormArray);
    }
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
    if (this.index === -1) {
      this.dataService.addData(this.form.value);
      this.form.reset();
    } else {
      this.dataService.editData(this.index, this.form.value);
    }
    this.router.navigate(['/see-user']);
  }

}
