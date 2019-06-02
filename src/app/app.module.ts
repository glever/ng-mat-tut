import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routing

// material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MAT_DATE_LOCALE,
  MatMenuModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    // Material
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'nl-BE' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
