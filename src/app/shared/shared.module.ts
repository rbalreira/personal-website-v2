import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';
import {
  bootstrapGithub,
  bootstrapInstagram,
  bootstrapLinkedin,
} from '@ng-icons/bootstrap-icons';
import { simpleCodepen } from '@ng-icons/simple-icons';
import { TranslateModule } from '@ngx-translate/core';

import { NavContentFactoryService } from '@app/shared/services/nav-content/nav-content-factory.service';
import { TechStackFactoryService } from '@app/shared/services/tech-stack/tech-stack-factory.service';
import { SocialMediaFactoryService } from './services/social-media/social-media-factory.service';
import { ExperienceFactoryService } from './services/experience/experience-factory.service';
import { ProjectsFactoryService } from './services/projects/projects-factory.service';
import { LangsFactoryService } from './services/langs/langs-factory.service';

import { CoreAnimationDirective } from './directives/animations/core-animation/core-animation.directive';
import { AnimateFromDirective } from './directives/animations/animate-from-animation/animate-from.directive';
import { AnimateFromToDirective } from './directives/animations/animate-from-to-animation/animate-from-to.directive';

import { SvgAvatarComponent } from './components/svg-avatar/components/svg-avatar.component';
import { SocialMediaComponent } from './components/social-media/components/social-media.component';
import { SocialMediaFooterComponent } from './components/social-media/components/social-media-footer.component';

@NgModule({
  declarations: [
    SvgAvatarComponent,
    SocialMediaComponent,
    SocialMediaFooterComponent,
    CoreAnimationDirective,
    AnimateFromDirective,
    AnimateFromToDirective,
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      bootstrapGithub,
      bootstrapInstagram,
      bootstrapLinkedin,
      simpleCodepen,
    }),
  ],
  providers: [
    ExperienceFactoryService,
    NavContentFactoryService,
    ProjectsFactoryService,
    SocialMediaFactoryService,
    TechStackFactoryService,
    LangsFactoryService,
  ],
  exports: [
    SvgAvatarComponent,
    SocialMediaComponent,
    SocialMediaFooterComponent,
    TranslateModule,
    AnimateFromDirective,
    AnimateFromToDirective,
  ],
})
export class SharedModule {}
