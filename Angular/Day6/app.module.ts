import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student.component';
import { EmployeeComponent } from './employee/employee.component';
import { StringinterpolationComponent } from './stringinterpolation/stringinterpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { EventBinding1Component } from './event-binding1/event-binding1.component';
import { EventBinding2Component } from './event-binding2/event-binding2.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    EmployeeComponent,
    StringinterpolationComponent,
    PropertyBindingComponent,
    StylebindingComponent,
    ClassbindingComponent,
    EventBinding1Component,
    EventBinding2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
