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
    CustomerInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BlogPostModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
