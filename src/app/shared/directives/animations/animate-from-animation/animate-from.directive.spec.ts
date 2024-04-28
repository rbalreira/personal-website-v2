import { ElementRef } from '@angular/core';

import { AnimateFromDirective } from './animate-from.directive';

describe('TransLeftRightAnimationDirective', () => {
  it('should create an instance', () => {
    const directive = new AnimateFromDirective({} as ElementRef);
    expect(directive).toBeTruthy();
  });
});
