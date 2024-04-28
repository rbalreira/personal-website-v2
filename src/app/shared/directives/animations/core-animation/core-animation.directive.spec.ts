import { ElementRef } from '@angular/core';

import { CoreAnimationDirective } from './core-animation.directive';

describe('CoreAnimationDirective', () => {
  it('should create an instance', () => {
    const directive = new CoreAnimationDirective({} as ElementRef);
    expect(directive).toBeTruthy();
  });
});
