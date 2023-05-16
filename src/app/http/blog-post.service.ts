import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType
} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';

import { BlogPost } from './blog-post.model';

@Injectable()
export class BlogPostService {

  constructor(private http: HttpClient) {}

  storePost(postData: BlogPost) {
    this.http.post('https://majrul.free.beeceptor.com/add-post', postData, {
      observe: 'events',
      //responseType: 'json'
    })
    .pipe(tap(event => {
      //console.log(event);
      if(event.type == HttpEventType.Sent)
        console.log('request sent to server..');
      if(event.type == HttpEventType.Response)
        console.log(event.body);
    }))
    .subscribe(responseData => {
        console.log(responseData);
    });
  }

  fetchPosts() {
    return this.http
            .get<{ [key: string] : BlogPost }>('https://majrul.free.beeceptor.com/fetch-post', {
              headers: new HttpHeaders({"Custom-Header": "123"}),
              params: new HttpParams().set('appid', '123456678980')
            })
            .pipe(map(responseData => {
              //const postsArray = [];
              const postsArray: BlogPost[] = [];
              for(const key in responseData) {
                //console.log(key);
                postsArray.push({...responseData[key], id: key} as BlogPost)
              }
              return postsArray;
            }));
            /*catchError(errorRes => {
              console.log(errorRes);
              //logging
              //throwError(() => new Error(errorRes.message));
            }))*/
      /*.subscribe(responseData => {
        console.log(responseData);
      })*/
  }

  deletePosts() {
    
  }
}
