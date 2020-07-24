import { Injectable } from '@angular/core';
import { Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Data } from "src/app/Data";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  mid: string;
  password: string;
  role: string;

  constructor(private http: HttpClient) { }

  getData():Observable<Data[]> {
    return this.http.get<Data[]>("../assets/Data.json");
  }
}
