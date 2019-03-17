import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../Modules/Model/user.model';

@Injectable({
    providedIn: 'root',
})

export class AppService {

   apiUrl  = 'http://localhost:3000/customers';
    constructor(private httpservice: HttpClient) {}

    get(): Observable<Customer[]> {
        return this.httpservice.get<Customer[]>(this.apiUrl);
    }

    loginCheck(userName: string, password: string) {
        if (userName === 'demo' && password === 'demo') {
             localStorage.setItem('userName', 'demo');
            // console.log(this.result);
            return true;
          } else {
            return false;
          }
    }
}
