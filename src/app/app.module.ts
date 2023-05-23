import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateExample1Component } from './template-driven-forms/template-example1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateExample2Component } from './template-driven-forms/template-example2.component';
import { TemplateExample3Component } from './template-driven-forms/template-example3.component';
import { PasswordMatchValidator } from './template-driven-forms/custom-validator';
import { ReactiveExample1Component } from './reactive-forms/reactive-example1.component';
import { ReactiveExample2Component } from './reactive-forms/reactive-example2.component';
import { ReactiveExample3Component } from './reactive-forms/reactive-example3.component';
import { AddCustomerComponent } from './reactive-forms/reusable/add-customer.component';
import { AddRetailerComponent } from './reactive-forms/reusable/add-retailer.component';
import { ReactiveExample4Component } from './reactive-forms/reactive-example4.component';
import { ReactiveExample5Component } from './reactive-forms/reactive-example5.component';
import { SharedAddressComponent } from './reactive-forms/reusable/shared-address/shared-address.component';
import { ObsExample1Component } from './observable/obs-example1.component';
import { ObsExample2Component } from './observable/obs-example2.component';
import { ObsExample3aComponent } from './observable/obs-example3a.component';
import { ObsExample3bComponent } from './observable/obs-example3b.component';
import { ParentComponent } from './parent-child/parent/parent.component';
import { ChildComponent } from './parent-child/child/child.component';
import { BlogPostModule } from './http/blog-post.module';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CalculatorComponent } from './testing/calculator/calculator.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExample1Component } from './material/example1/material-example1.component';
import { AlertComponent } from './material/alert.component';
import { Example2Component } from './material/example2/example2.component';
import { Example3Component } from './material/example3/example3.component';
import { AnimationComponent } from './animations/animation.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateExample1Component,
    TemplateExample2Component,
    TemplateExample3Component,
    PasswordMatchValidator,
    ReactiveExample1Component,
    ReactiveExample2Component,
    ReactiveExample3Component,
    ReactiveExample4Component,
    ReactiveExample5Component,
    SharedAddressComponent,
    AddCustomerComponent,
    AddRetailerComponent,
    SharedAddressComponent,
    ObsExample1Component,
    ObsExample2Component,
    ObsExample3aComponent,
    ObsExample3bComponent,
    ParentComponent,
    ChildComponent,
    CustomerInfoComponent,
    CalculatorComponent,
    MaterialExample1Component,
    Example2Component,
    Example3Component,
    AlertComponent,
    Example2Component,
    Example3Component,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BlogPostModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
