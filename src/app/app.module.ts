import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AssginmentTdfApprochComponent } from './assginment-tdf-approch/assginment-tdf-approch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssignmentRmfApprochComponent } from './assignment-rmf-approch/assignment-rmf-approch.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AssginmentTdfApprochComponent,
    AssignmentRmfApprochComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
