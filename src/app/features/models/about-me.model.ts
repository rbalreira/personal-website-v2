/** model for About Me section */
export class AboutMe {
  /**
   * Sub-Title
   */
  subTitle: string;
  /**
   * Description
   */
  description: string;

  constructor(subTitle: string, description: string) {
    this.subTitle = subTitle;
    this.description = description;
  }
}
