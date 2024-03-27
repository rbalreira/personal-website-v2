/** model for NavMenu section */
export class NavMenu {
  /**
   * Name
   */
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export let navMenuContent: NavMenu[] = [
  { name: 'Experience' },
  { name: 'Projects' },
  { name: 'About' },
  { name: 'Contact' },
];
