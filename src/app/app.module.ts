import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllBookingsComponent } from './all-bookings/all-bookings.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { FindBookingComponent } from './find-booking/find-booking.component';
import { GetTicketComponent } from './get-ticket/get-ticket.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AllBookingsComponent,
    AddBookingComponent,
    FindBookingComponent,
    GetTicketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
