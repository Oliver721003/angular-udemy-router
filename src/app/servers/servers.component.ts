import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Server } from '../model/server';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  servers: Server[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serversService: ServersService
  ) {}

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload(): void {
    // void this.router.navigate(['../servers'], { relativeTo: this.route });
  }
}
