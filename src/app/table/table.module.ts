import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { HeaderComponent } from './header/header.component';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCarComponent } from './add-car/add-car.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCarComponent } from './edit-car/edit-car.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    DashboardComponent,
    AddCarComponent,
    EditCarComponent,
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    NzButtonModule,
    NzPageHeaderModule,
    NzTableModule,
    NzIconModule,
    NzFormModule,
    ReactiveFormsModule,
  ],
})
export class TableModule {}
