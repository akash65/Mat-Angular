import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './Modules/404page/page-not-found-component/page-not-found-component.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginGuard } from './Services/loginGuard.guard';


const appRoutes: Routes = [
    // {
    //     path: '',
    //     loadChildren: './app.module#AppModule'
    // },
    {
        path: '',
        loadChildren: './Modules/Login/login.module#LoginModule'
    },
    {
        path: 'signup',
        loadChildren: './Modules/Login/login.module#LoginModule'
    },
    {
        path: 'customers',
        loadChildren: './Modules/Customers/customers.module#CustomerModule',
        // canActivate: [LoginGuard]
    },
    {
        path: '**',
        component: PageNotFoundComponent
    },

];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})


export class AppRouteModule {

}
