import { Directive, ElementRef, Inject, OnInit } from '@angular/core';

import { CoreAnimationDirective } from '../core-animation/core-animation.directive';

@Directive({
  selector: '[appAnimateFromToAnimation]',
})
export class AnimateFromToDirective
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

    this.timeline?.fromTo(
      this.element.nativeElement,
      {
        x: this.fromX,
        y: this.fromY,
        duration: this.fromDuration,
        delay: this.fromDelay,
        ease: this.fromEase,
        opacity: this.fromOpacity,
      },
      {
        x: this.toX,
        y: this.toY,
        duration: this.toDuration,
        delay: this.toDelay,
        ease: this.toEase,
        opacity: this.toOpacity,
      }
    );
  }
}
