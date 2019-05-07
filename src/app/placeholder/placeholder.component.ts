import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {

  login: String;
  password: String;

  constructor(private router: Router) { }

  ngOnInit() {
    this.login = "admin";
    this.password = "0000";
  }

  authorize(login: string, password: string) {
    if(this.login == login && this.password == password){
        this.router.navigate(['admin']);
    }
  }

}
