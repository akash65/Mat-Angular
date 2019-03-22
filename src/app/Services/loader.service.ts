import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class LoaderService {
    public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    loadActive(value: boolean) {
        this.status.next(value);
    }
}
