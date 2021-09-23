import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { ContractsComponent } from './views/contracts/contracts.component';
import { SearchComponent } from './utils/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickerComponent } from './utils/datepicker/datepicker.component';
import { SelectComponent } from './utils/select/select.component';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContractsComponent,
    SearchComponent,
    DatepickerComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatMomentDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatMenuModule,
    MatDividerModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
