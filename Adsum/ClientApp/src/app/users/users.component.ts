import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  public assigneeList: string[] = new Array();
  public selectedAssignee: string;


  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.assigneeList.push("Leif");
    this.assigneeList.push("Bertil");
    this.assigneeList.push("Börje");
    this.assigneeList.push("Håkan");
    this.assigneeList.push("Stig");

    this.selectedAssignee = this.assigneeList[0];
  }
}
