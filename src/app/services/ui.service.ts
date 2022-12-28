import { Injectable } from '@angular/core';Subject
import { Observable, Subject,  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showLogin: boolean = false;
  private subjet = new Subject<any>();

  constructor() { }

  toogleAddTask(): void {
    this.showLogin = !this.showLogin;
    this.subjet.next(this.showLogin);
  }

  onToggle():Observable<any> {
    return this.subjet.asObservable();
  }
}
