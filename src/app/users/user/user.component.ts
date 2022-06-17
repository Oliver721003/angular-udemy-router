import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user!: { id: number; name: string };
  subscription!: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };

    this.subscription = this.route.paramMap
      .pipe(
        map((params) => ({ id: +params.get('id')!, name: params.get('name')! }))
      )
      .subscribe((user) => (this.user = user));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
