import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  message: string = "";
  cancelButtonText = "Cancel";
  
  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<AlertComponent>) {    
    if (data) {      
      this.message = data.message || this.message;      
      if (data.buttonText) {        
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;      
      }    
    }    
  }  
  
  onConfirmClick(): void {    
    this.dialogRef.close(true);  
  }
}
