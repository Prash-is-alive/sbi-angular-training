import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { BlogPost } from './blog-post.model';
import { BlogPostService } from './blog-post.service';

@Component({
  selector: 'blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit, OnDestroy {
  loadedPosts: BlogPost[] = [];
  isFetching = false;
  error = null;
  private errorSub!: Subscription;

  constructor(private blogPostService: BlogPostService) {}

  ngOnInit() {
 
  }

  onCreatePost(postData: BlogPost) {
    this.blogPostService.storePost(postData);
  }

  onFetchPosts() {
    this.blogPostService.fetchPosts()
    .subscribe({
      next: (posts) => {
        this.loadedPosts = posts;
        this.isFetching = false;
      },
      error: (error) => {
        console.log(error);
        this.error = error.message;
      }
    })
    /*.subscribe(posts => {
      this.loadedPosts = posts;
      this.isFetching = false;
    }, error => {
      this.error = error.message;
    });*/
  }

  onClearPosts() {
  }

  onHandleError() {
  }

  ngOnDestroy() {

  }
}
