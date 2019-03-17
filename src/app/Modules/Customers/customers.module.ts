import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRouteModule } from './customers-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { FormsModule } from '@angular/forms';
import { AppService } from 'src/app/Services/app.service';
import {
    MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule, MatCheckboxModule,
    MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatPaginatorModule, MatTableDataSource, MatSortModule,

} from '@angular/material';

@NgModule({
    declarations: [CustomersComponent],
    imports: [CommonModule, CustomerRouteModule, FormsModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatSortModule,
        MatCheckboxModule

    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatSortModule,
        MatCheckboxModule

    ]
})

export class CustomerModule {

}
