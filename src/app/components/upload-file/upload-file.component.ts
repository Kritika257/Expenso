import { Component } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload-file',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.css'
})
export class UploadFileComponent {
  selectedFiles: File[] = [];
  uploadProgress: number | null = null;

  constructor(private http: HttpClient) {}

  onFilesSelected(event: any) {
    this.selectedFiles = Array.from(event.target.files) || [];
  }

  isValidFileCount(): boolean {
    return this.selectedFiles.length >= 1 && this.selectedFiles.length <= 3;
  }

  onUpload() {
    if (!this.isValidFileCount()) {
      return;
    }

    const formData = new FormData();
    this.selectedFiles.forEach(file => formData.append('files', file, file.name));

    this.http.post('your-api-endpoint', formData, {
      reportProgress: true,
      observe: 'events'
    }).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        if (event.total) {
          this.uploadProgress = Math.round((100 * event.loaded) / event.total);
        }
      } else if (event.type === HttpEventType.Response) {
        console.log('Upload complete', event.body);
        this.uploadProgress = null;
      }
    }, error => {
      console.error('Upload error', error);
      this.uploadProgress = null;
    });
  }
}


  /*selectedFiles: File[] = [];
  uploadProgress: number | null = null;

  onFilesSelected(event: any) {
    this.selectedFiles = Array.from(event.target.files) || [];
  }

  isValidFileCount(): boolean {
    return this.selectedFiles.length >= 1 && this.selectedFiles.length <= 3;
  }

  onUpload() {
    if (!this.isValidFileCount()) {
      return;
    }

    this.uploadProgress = 0;

    const simulateProgress = setInterval(() => {
      if (this.uploadProgress !== null) {
        this.uploadProgress += 10;
        if (this.uploadProgress >= 100) {
          clearInterval(simulateProgress);
          this.uploadProgress = 100;
          setTimeout(() => {
            this.uploadProgress = null;
            console.log('Upload complete');
          }, 500);
        }
      }
    }, 500);
  }
}*/