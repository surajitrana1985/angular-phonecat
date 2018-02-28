import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class PhoneListService {

    constructor(private http: Http) {}

    getAllPhones(): Observable<any> {
        return this.http.get('assets/api/phones.json').map(this.phoneMap);
    }

    phoneMap(response: Response) {
        return response.json() || null;
    }

}