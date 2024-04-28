import { Directive, ElementRef, Inject, OnInit } from '@angular/core';

import { CoreAnimationDirective } from '../core-animation/core-animation.directive';

@Directive({
  selector: '[appAnimateFromAnimation]',
})
export class AnimateFromDirective
  extends CoreAnimationDirective
  implements OnInit
{
  constructor(@Inject(ElementRef) protected override element: ElementRef) {
    super(element);
  }

  ngOnInit(): void {
    this.performAnimation();
  }

  performAnimation(): void {
    super.setupTimeline();

    this.timeline?.from(this.element.nativeElement, {
      x: this.fromX,
      y: this.fromY,
      duration: this.fromDuration,
      delay: this.fromDelay,
      ease: this.fromEase,
      opacity: this.fromOpacity,
    });
  }
}
