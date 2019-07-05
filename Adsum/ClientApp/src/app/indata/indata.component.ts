import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-indata',
  templateUrl: './indata.component.html',
  styleUrls: ['./indata.component.css']
})
export class IndataComponent {
  public monthList: string[] = new Array();
  public departmentList: string[] = new Array();
  public officeList: string[] = new Array();
  public taskList: string[] = new Array();

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.monthList.push("Januari");
    this.monthList.push("Februari");
    this.monthList.push("Mars");
    this.monthList.push("April");
    this.monthList.push("Maj");
    this.monthList.push("Juni");
    this.monthList.push("Juli");
    this.monthList.push("Augusti");
    this.monthList.push("September");
    this.monthList.push("Oktober");
    this.monthList.push("November");
    this.monthList.push("December");

    this.taskList.push("Redovisning");
    this.taskList.push("Bokslut");
    this.taskList.push("Revision");
    this.taskList.push("Konsultation");
    this.taskList.push("Skatt");
    this.taskList.push("Inventering");

    this.departmentList.push("Redovisning");
    this.departmentList.push("Revision");

    this.officeList.push("Västerås");
    this.officeList.push("Eskilstuna");
  }
}
