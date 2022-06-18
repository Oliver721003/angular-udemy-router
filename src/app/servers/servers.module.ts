import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ServersRoutingModule } from './servers-routing.module';
import { EditServerComponent } from './edit-server/edit-server.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers.component';

@NgModule({
  imports: [CommonModule, FormsModule, ServersRoutingModule],
  declarations: [ServersComponent, EditServerComponent, ServerComponent],
})
export class ServersModule {}
