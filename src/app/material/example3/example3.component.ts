import { Component } from '@angular/core';
import { Download, DownloadService } from './download.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'material-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.css']
})
export class Example3Component {

  download$: Download;
  
  constructor(private downloads: DownloadService) {}

  download(): void {
    this.downloads
                          .download("http://localhost:8080/mtp.dmg")
                          .subscribe(state => {
                            console.log(state);
                            this.download$ = state;
                          })
                          
    /*this.downloads
      .download('/somefile.zip')
      .subscribe(blob => {
        const a = document.createElement('a')
        const objectUrl = URL.createObjectURL(blob)
        a.href = objectUrl
        a.download = 'archive.zip';
        a.click();
        URL.revokeObjectURL(objectUrl);
      })*/
  }

}
