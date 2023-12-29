import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-flags',
  templateUrl: './dropdown-flags.component.html',
  styleUrls: ['./dropdown-flags.component.scss'],
})
export class DropdownFlagsComponent {
  flags = [
    { id: 1, name: 'us' },
    { id: 2, name: 'de' },
    { id: 3, name: 'pt' },
  ];
  selectedFlag: string = this.flags[0].name;

  changeDropdownToggleValue(flag: string) {
    this.selectedFlag = flag;
  }
}
