import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: '../section.component.html',
  styleUrls: ['../section.component.scss'],
})
export class SectionComponent {
  @Input() sectionTitle = '';
  @Input() id = '';
  @Input() hasSecondaryBgColor = false;
  @Input() animationClass = '';
}
