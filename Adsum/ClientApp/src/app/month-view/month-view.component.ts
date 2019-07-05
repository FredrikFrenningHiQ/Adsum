import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.css']
})

export class MonthViewComponent {
  public departmentList: string[] = new Array();
  public assigneeList: string[] = new Array();
  public monthList: string[] = new Array();
  public officeList: string[] = new Array();
  public selectedAssignee: string;
  public selectedMonth: string;
  public selectedDepartment: string;
  public selectedOffice: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.assigneeList.push("Alla");
    this.assigneeList.push("Bertil");
    this.assigneeList.push("Börje");
    this.assigneeList.push("Håkan");
    this.assigneeList.push("Stig");

    this.departmentList.push("Revision");
    this.departmentList.push("Skatt");

    this.monthList.push("Januari");
    this.monthList.push("Februari");
    this.monthList.push("Mars");
    this.monthList.push("April");
    this.monthList.push("Maj");
    this.monthList.push("Juni");

    this.officeList.push("Västerås");
    this.officeList.push("Örebro");
    this.officeList.push("Stockholm");
    this.officeList.push("Skövde");

    this.selectedAssignee = this.assigneeList[0];
    this.selectedMonth = this.monthList[0];
    this.selectedDepartment = this.departmentList[0];
    this.selectedOffice = this.officeList[0];
  }
}
