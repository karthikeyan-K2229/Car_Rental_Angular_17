import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { CarListComponent } from './components/car-list/car-list.component';
import { BookingsComponent } from './components/bookings/bookings.component';

export const routes: Routes = [
    {path: '',redirectTo: 'bookings',pathMatch: 'full'},
    {path:"car",component:CarListComponent},
    {path:"bookings",component:BookingsComponent}
];
