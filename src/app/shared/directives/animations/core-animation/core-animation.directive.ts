import { Directive } from '@angular/core';
import { ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger, Observer } from 'gsap/all';

@Directive({
  selector: '[appCoreAnimation]',
})
export class CoreAnimationDirective {
  // Scroll Trigger
  @Input() hasScrollTrigger: boolean = false;
  @Input() stStart?: string | number | ScrollTrigger.StartEndFunc;
  @Input() stEnd?: string | number | ScrollTrigger.StartEndFunc;

  // From animation
  @Input() fromX: gsap.TweenValue = 0;
  @Input() fromY: gsap.TweenValue = 0;
  @Input() fromDuration: gsap.TweenValue = 1;
  @Input() fromDelay: gsap.TweenValue = 0;
  @Input() fromEase: gsap.EaseString | gsap.EaseFunction = 'power1.out';
  @Input() fromOpacity: gsap.TweenValue = 0;

  // To animation
  @Input() toX: gsap.TweenValue = 0;
  @Input() toY: gsap.TweenValue = 0;
  @Input() toDuration: gsap.TweenValue = 1;
  @Input() toDelay: gsap.TweenValue = 0;
  @Input() toEase: gsap.EaseString | gsap.EaseFunction = 'power1.out';
  @Input() toOpacity: gsap.TweenValue = 0;

  @Output() complete: EventEmitter<null> = new EventEmitter();
  @Output() reverseComplete: EventEmitter<null> = new EventEmitter();
  protected timeline?: gsap.core.Timeline;

  constructor(protected element: ElementRef) {
    gsap.registerPlugin(ScrollTrigger, Observer);
  }

  protected setupTimeline(): void {
    let timeLineVars: gsap.TimelineVars = {
      onComplete: () => this.complete.emit(),
      onReverseComplete: () => this.reverseComplete.emit(),
    };

    if (this.hasScrollTrigger) {
      timeLineVars.scrollTrigger = {
        trigger: this.element.nativeElement,
        start: this.stStart,
        end: this.stEnd,
      };
    }

    this.timeline = gsap.timeline(timeLineVars);
  }
}
