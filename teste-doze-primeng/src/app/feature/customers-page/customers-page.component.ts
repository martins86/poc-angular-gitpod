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
            
            this.setItemsSelectStatus(this.customers, this.statuses);
            
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
        
    }

    setItemsSelectStatus(dataList: CustomerModel[], selectlistItems: any[]): void {
        for (let i = 0; i < dataList.length; i++) {
            if (selectlistItems.length === 0) {
                selectlistItems.push(
                    {
                        label: dataList[i].status,
                        value: dataList[i].status
                    });
            } 
            else {
                if (this.isEqualValidate(selectlistItems, dataList[i].status)) {
                    selectlistItems.push(
                        {
                            label: dataList[i].status,
                            value: dataList[i].status
                        }
                    );
                }
            }
        }
    }
    
    isEqualValidate(items: any[], item: any): boolean {
        for (let i = 0; i < items.length; i++) {
            if (items[i].label === item) { return false; }
        }
        return true;
    }
}
