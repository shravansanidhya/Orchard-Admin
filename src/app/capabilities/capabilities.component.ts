import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-capabilities',
  templateUrl: './capabilities.component.html',
  styleUrls: ['./capabilities.component.css']
})
export class CapabilitiesComponent implements OnInit {

  capabilities: string[]=[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('../assets/Capabilities.json').subscribe(
      data=>{
        this.capabilities = data as string[];
        console.log(this.capabilities);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    ); 
  }

}
