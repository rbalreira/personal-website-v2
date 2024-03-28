import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';
import {
  bootstrapGithub,
  bootstrapInstagram,
  bootstrapLinkedin,
} from '@ng-icons/bootstrap-icons';
import { simpleCodepen } from '@ng-icons/simple-icons';

import { SvgAvatarComponent } from '../shared/components/svg-avatar/svg-avatar.component';
import { SocialMediaComponent } from './components/social-media/components/social-media.component';

@NgModule({
  declarations: [SvgAvatarComponent, SocialMediaComponent],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      bootstrapGithub,
      bootstrapInstagram,
      bootstrapLinkedin,
      simpleCodepen,
    }),
  ],
  exports: [SvgAvatarComponent, SocialMediaComponent],
})
export class SharedModule {}
