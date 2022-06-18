import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

import { Server } from '../../model/server';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit {
  server!: Server;
  serverName = '';
  serverStatus = '';
  allowEdit!: boolean;
  changedSaved = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serversService: ServersService
  ) {}

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    this.route.queryParamMap
      .pipe(map((paramMap) => paramMap.get('allowEdit')))
      .subscribe((allowEdit) => (this.allowEdit = allowEdit === '1'));

    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changedSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
