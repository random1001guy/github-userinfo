import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private svc: TestService, private http: HttpClient) { 
  }

  ngOnInit() {
  }
}
