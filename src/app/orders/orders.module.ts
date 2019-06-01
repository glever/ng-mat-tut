import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { MatTabsModule } from '@angular/material';

@NgModule({
  declarations: [OrderListComponent],
  imports: [MatTabsModule, CommonModule, OrdersRoutingModule]
})
export class OrdersModule {}
