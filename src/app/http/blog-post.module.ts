import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BlogPostComponent } from './blog-post.component';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { LoggingInterceptorService } from './interceptors/logging-interceptor.service';
import { BlogPostService } from './blog-post.service';

@NgModule({
  declarations: [BlogPostComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
  {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    BlogPostService
  ],
  exports: [BlogPostComponent]
})
export class BlogPostModule {}
