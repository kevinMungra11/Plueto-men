import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private dataList: any[] = [];

  constructor() { }

  getAllData(): any[] {
    return this.dataList;
  }

  addData(data: any): void {
    this.dataList.push(data);
    console.log(this.dataList);
  }

  editData(index: number, updatedData: any): void {
    if (index >= 0 && index < this.dataList.length) {
      this.dataList[index] = updatedData;
    }
  }
  deleteData(index: number): void {
    if (index >= 0 && index < this.dataList.length) {
      this.dataList.splice(index, 1);
    }
  }

  getDataByIndex(index: number): any {
    return this.dataList[index];
  }
}