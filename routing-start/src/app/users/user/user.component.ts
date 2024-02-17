import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };
  parmasSubsricption: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params.id,
      name: this.route.snapshot.params.name,
    };
    this.parmasSubsricption = this.route.params.subscribe((o) => {
      this.user = {
        id: o.id,
        name: o.name,
      };
    });
  }

  ngOnDestroy(): void {
    this.parmasSubsricption.unsubscribe();
  }
}
