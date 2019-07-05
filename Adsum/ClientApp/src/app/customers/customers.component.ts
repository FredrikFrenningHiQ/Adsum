import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  public customerList: string[] = new Array();
  public assigneeList: string[] = new Array();
  public monthList: string[] = new Array();
  public statusList: string[] = new Array();
  public selectedAssignee: string;
  public selectedFinancialYear: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.customerList.push("OnOff");
    this.customerList.push("Ticket");
    this.customerList.push("ABB");
    this.customerList.push("TrustAB");
    this.customerList.push("Stiga");

    this.assigneeList.push("Leif");
    this.assigneeList.push("Bertil");
    this.assigneeList.push("Börje");
    this.assigneeList.push("Håkan");
    this.assigneeList.push("Stig");

    this.monthList.push("Januari");
    this.monthList.push("Februari");
    this.monthList.push("Mars");
    this.monthList.push("April");
    this.monthList.push("Maj");
    this.monthList.push("Juni");

    this.selectedAssignee = this.assigneeList[0];
    this.selectedFinancialYear = this.monthList[0];
  }
}
