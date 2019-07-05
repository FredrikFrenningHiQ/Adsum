import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { IndataComponent } from './indata/indata.component';
import { CustomersComponent } from './customers/customers.component';
import { MonthViewComponent } from './month-view/month-view.component';
import { PlanningComponent } from './planning/planning.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CustomersComponent,
    IndataComponent,
    MonthViewComponent,
    PlanningComponent,
    SettingsComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'planning', component: PlanningComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'month-view', component: MonthViewComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'indata', component: IndataComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
