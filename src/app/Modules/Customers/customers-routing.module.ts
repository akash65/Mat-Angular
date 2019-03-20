import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { CustomersComponent } from './customers/customers.component';

const customerRoutes: Routes = [
    {
        path: '',
        component: CustomersComponent
    }
];

@NgModule({
imports: [RouterModule.forChild(customerRoutes)],
exports: [RouterModule]
})

export class CustomerRouteModule {

}
