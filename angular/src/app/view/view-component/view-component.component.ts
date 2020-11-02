import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  username: String;
  response: any;

  constructor(private http: HttpClient) { 
  }

  ngOnInit(): void {
  }

  getApiResponse() {
    let obs = this.http.get('https://api.github.com/users/' + this.username); 
    obs.subscribe((response) => {
      this.response = response;
    })
  }

}
