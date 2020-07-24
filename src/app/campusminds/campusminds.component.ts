import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
@Component({
  selector: 'app-campusminds',
  templateUrl: './campusminds.component.html',
  styleUrls: ['./campusminds.component.css']
})
export class CampusmindsComponent implements OnInit {

  campusminds: string[]=[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('../assets/CampusMinds.json').subscribe(
      data=>{
        this.campusminds = data as string[];
        console.log(this.campusminds);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );  
  }
}
