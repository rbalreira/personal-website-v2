import { ElementRef } from '@angular/core';

import { AnimateFromToDirective } from './animate-from-to.directive';

describe('TransLeftRightAnimationDirective', () => {
  it('should create an instance', () => {
    const directive = new AnimateFromToDirective({} as ElementRef);
    expect(directive).toBeTruthy();
  });
});
