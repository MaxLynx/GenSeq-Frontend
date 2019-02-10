import { Component } from '@angular/core';
import { GeneralService } from './general.service';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GenSeq';
  connection = true;

  constructor(private data: GeneralService) { }

  ngOnInit() {
    this.testConnection();
  }

  ngOnChanges() {
    this.testConnection();
  }


  testConnection() {
    this.data.testBackendConnection().subscribe(
      data => {
        if(data)
        this.connection = true;
        else
        this.connection = false;
      },
      error => {
        this.connection = false;
      }
    );
  }

}
