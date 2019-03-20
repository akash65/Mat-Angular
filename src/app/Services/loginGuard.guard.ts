import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()

export class LoginGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate() {
        if (localStorage.getItem('userName') != null) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
