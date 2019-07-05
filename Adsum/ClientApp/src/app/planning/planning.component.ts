import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent {
  public customerList: string[] = new Array();
  public taskList: string[] = new Array();
  public assigneeList: string[] = new Array();
  public monthList: string[] = new Array();
  public statusList: string[] = new Array();
  public selectedAssignee: string;
  public selectedMonth: string;
  public selectedFinancialYear: string;
  public selectedStatus: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.customerList.push("OnOff");
    this.customerList.push("Ticket");
    this.customerList.push("ABB");
    this.customerList.push("TrustAB");
    this.customerList.push("Stiga");

    this.taskList.push("Skatt");
    this.taskList.push("Revision");

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

    this.statusList.push("-");
    this.statusList.push("Inkommet");
    this.statusList.push("Genomgång");
    this.statusList.push("Klart");
    this.selectedMonth = this.monthList[0];
    this.selectedFinancialYear = this.monthList[0];
    this.selectedStatus = this.statusList[0];
  }
  
}
