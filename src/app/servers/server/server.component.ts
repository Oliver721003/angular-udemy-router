import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { map } from 'rxjs';

import { Server } from '../../model/server';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server!: Server;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serversService: ServersService
  ) {}

  ngOnInit() {
    this.route.data
      .pipe(map((data: Data) => data['server']))
      .subscribe((server) => (this.server = server));
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);

    // this.route.paramMap
    //   .pipe(map((params) => +params.get('id')!))
    //   .subscribe((id) => (this.server = this.serversService.getServer(id)));
  }

  onEdit(): void {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'merge',
    });
  }
}
