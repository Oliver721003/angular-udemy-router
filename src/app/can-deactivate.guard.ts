import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { EditServerComponent } from './servers/edit-server/edit-server.component';

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard implements CanDeactivate<EditServerComponent> {
  canDeactivate(component: EditServerComponent): boolean {
    if (!component.allowEdit) {
      return true;
    }
    if (
      (component.serverName !== component.server.name ||
        component.serverStatus !== component.server.status) &&
      component.changedSaved
    ) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }
}
