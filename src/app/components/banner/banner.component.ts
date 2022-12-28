import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  
  showAddTask : boolean = false;
  subscription! : Subscription;

  constructor(
    private uiService:UiService,
    private router: Router
  ) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value )
   }

  ngOnInit(): void {
  }
  toggleAddTask() {
    console.log("toggleAddTask() se hizo clic");
    this.uiService.toogleAddTask();
  }

  hasRouter(route: String) {
    return this.router.url === route;
  }

}
