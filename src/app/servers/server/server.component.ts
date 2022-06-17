import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute,
    private serversService: ServersService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);

    this.route.paramMap
      .pipe(map((params) => +params.get('id')!))
      .subscribe((id) => (this.server = this.serversService.getServer(id)));
  }
}
