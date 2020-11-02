import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
 
  print(arg) {
    console.log(arg);
  }

}
