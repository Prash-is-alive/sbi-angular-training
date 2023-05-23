import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Subscription, finalize } from 'rxjs';

@Component({
  selector: 'material-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css']
})
export class Example2Component {

  @Input()
    requiredFileType:string;

    fileName = '';
    uploadProgress:number;
    uploadSub: Subscription;

    constructor(private http: HttpClient) {}

    onFileSelected(event) {
        const file:File = event.target.files[0];
      
        if (file) {
            this.fileName = file.name;
            const formData = new FormData();
            formData.append("thumbnail", file);

            const upload$ = this.http.post("api-url", formData, {
                reportProgress: true,
                observe: 'events'
            })
            .pipe(
                finalize(() => this.reset())
            );
          
            this.uploadSub = upload$.subscribe(event => {
              if (event.type == HttpEventType.UploadProgress) {
                this.uploadProgress = Math.round(100 * (event.loaded / event.total));
              }
            })
        }
    }

  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }

  reset() {
    this.uploadProgress = null;
    this.uploadSub = null;
  }
}