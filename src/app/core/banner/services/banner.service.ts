import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

export type AlertType = 'success' | 'warning' | 'error';

export interface Alert {
  type: AlertType;
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class BannerService {

  public banner$ = new Subject<Alert>();

  success(text: string) {
    this.banner$.next({type: 'success', text});
  }

  warning(text: string) {
    this.banner$.next({type: 'warning', text});
  }

  error(text: string) {
    this.banner$.next({type: 'error', text});
  }

  close() {
    this.banner$.next(null);
  }


}
