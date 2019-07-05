import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  public departmentList: string[] = new Array();
  public officeList: string[] = new Array();
  public activeList: string[] = new Array();
  public selectedActive: string;
  public selectedDepartment: string;
  public selectedOffice: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.departmentList.push("Revision");
    this.departmentList.push("Skatt");

    this.officeList.push("Västerås");
    this.officeList.push("Örebro");
    this.officeList.push("Stockholm");
    this.officeList.push("Skövde");

    this.activeList.push("Ja");
    this.activeList.push("Nej");

    this.selectedActive = this.activeList[0];
    this.selectedDepartment = this.departmentList[0];
    this.selectedOffice = this.officeList[0];
  }
}
