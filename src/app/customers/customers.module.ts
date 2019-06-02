import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDialog,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerNewComponent } from './customer-new/customer-new.component';
import { RepDialogComponent } from './rep-dialog/rep-dialog.component';

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerCardComponent,
    CustomerNewComponent,
    RepDialogComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatRadioModule
  ],
  entryComponents: [RepDialogComponent]
})
export class CustomersModule {}
