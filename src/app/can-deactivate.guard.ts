import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { CanComponentDeactivate } from './interface/can-component-deactivate.interface';

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard
  implements CanDeactivate<CanComponentDeactivate>
{
  canDeactivate(component: CanComponentDeactivate): boolean {
    if (component.canDeactivate()) {
      return true;
    } else {
      return confirm('Do you want to discard the changes?');
    }
  }
}
