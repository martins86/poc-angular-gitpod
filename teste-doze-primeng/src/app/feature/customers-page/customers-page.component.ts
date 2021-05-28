import { Component, OnInit } from '@angular/core';

import { CustomerModel, RepresentativeModel } from './shared/models/customer.model';

import { CustomerService } from './shared/services/cusomer.service';

@Component({
    selector: 'app-customers-page',
    templateUrl: './customers-page.component.html',
    styleUrls: ['./customers-page.component.scss']
})
export class CustomersPageComponent implements OnInit {

    customers: CustomerModel[] = [];

    representatives: RepresentativeModel[] = [];

    statuses: any[] = [];

    loading: boolean = true;

    activityValues: number[] = [0, 100];

    constructor(private customerService: CustomerService) { }

    ngOnInit() {
        this.customerService.getCustomers().then(customers => {
            this.customers = customers;
            this.loading = false;

            this.customers.forEach(customer => customer.date = new Date(customer.date ? customer.date : ''));
        });

        this.representatives = [
            { name: "Amy Elsner", image: 'amyelsner.png' },
            { name: "Anna Fali", image: 'annafali.png' },
            { name: "Asiya Javayant", image: 'asiyajavayant.png' },
            { name: "Bernardo Dominic", image: 'bernardodominic.png' },
            { name: "Elwin Sharvill", image: 'elwinsharvill.png' },
            { name: "Ioni Bowcher", image: 'ionibowcher.png' },
            { name: "Ivan Magalhaes", image: 'ivanmagalhaes.png' },
            { name: "Onyama Limba", image: 'onyamalimba.png' },
            { name: "Stephen Shaw", image: 'stephenshaw.png' },
            { name: "Xuxue Feng", image: 'xuxuefeng.png' }
        ];

        this.statuses = [
            { label: 'Unqualified', value: 'unqualified' },
            { label: 'Qualified', value: 'qualified' },
            { label: 'New', value: 'new' },
            { label: 'Negotiation', value: 'negotiation' },
            { label: 'Renewal', value: 'renewal' },
            { label: 'Proposal', value: 'proposal' }
        ]
    }
}
