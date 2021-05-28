import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerModel } from '../models/customer.model';

@Injectable()
export class CustomerService {
    constructor(private http: HttpClient) { }

    getCustomers() {
        return this.http.get<any>('assets/mock/customers-data.json')
            .toPromise()
            .then(res => <CustomerModel[]>res.data)
            .then(data => { return data; });
    }
}
