import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
import { StringinterpolationComponent } from './stringinterpolation/stringinterpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { Eventbinding1Component } from './eventbinding1/eventbinding1.component';
import { FormsModule } from '@angular/forms';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { IfdirectiveComponent } from './ifdirective/ifdirective.component';
import { FordirectiveComponent } from './fordirective/fordirective.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child2Component } from './child2/child2.component';
import { Stringinterpolate2Component } from './stringinterpolate2/stringinterpolate2.component';
import { PropertyBinding2Component } from './property-binding2/property-binding2.component';
import { Stylebinding2Component } from './stylebinding2/stylebinding2.component';
import { ClassBinding2Component } from './class-binding2/class-binding2.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventBinding2Component } from './event-binding2/event-binding2.component';
import { Ifdirective1Component } from './ifdirective1/ifdirective1.component';
import { Fordirective1Component } from './fordirective1/fordirective1.component';
import { Parent11Component } from './parent11/parent11.component';
import { Child11Component } from './child11/child11.component';
import { SwitchdirectiveComponent } from './switchdirective/switchdirective.component';
import { InbildpipeComponent } from './inbildpipe/inbildpipe.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { SummaryPipe } from './utility/summary.pipe';
import { CourseComponent } from './course/course.component';
import { CourseService } from './utility/course.service';
import { StudentdataComponent } from './studentdata/studentdata.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    StudentComponent,
    StringinterpolationComponent,
    PropertybindingComponent,
    StylebindingComponent,
    ClassbindingComponent,
    EventbindingComponent,
    Eventbinding1Component,
    Task1Component,
    Task2Component,
    Task3Component,
    Parent1Component,
    Child1Component,
    IfdirectiveComponent,
    FordirectiveComponent,
    Parent2Component,
    Child2Component,
    Stringinterpolate2Component,
    PropertyBinding2Component,
    Stylebinding2Component,
    ClassBinding2Component,
    EventBindingComponent,
    EventBinding2Component,
    Ifdirective1Component,
    Fordirective1Component,
    Parent11Component,
    Child11Component,
    SwitchdirectiveComponent,
    InbildpipeComponent,
    CustomPipeComponent,
    SummaryPipe,
    CourseComponent,
    StudentdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
