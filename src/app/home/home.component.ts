import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Details: string[]=[];  

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('../assets/Data.json').subscribe(
      data=>{
        this.Details = data as string[];
        console.log(this.Details);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );  
  }

}
