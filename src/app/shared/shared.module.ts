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

import { NavContentFactoryService } from './services/nav-content/nav-content-factory.service';
import { TechStackFactoryService } from './services/tech-stack/tech-stack-factory.service';
import { SocialMediaFactoryService } from './services/social-media/social-media-factory.service';
import { ExperienceFactoryService } from './services/experience/experience-factory.service';
import { ProjectsFactoryService } from './services/projects/projects-factory.service';
import { LangsFactoryService } from './services/langs/langs-factory.service';

import { CoreAnimationDirective } from './directives/animations/core-animation/core-animation.directive';
import { AnimateFromDirective } from './directives/animations/animate-from-animation/animate-from.directive';
import { AnimateFromToDirective } from './directives/animations/animate-from-to-animation/animate-from-to.directive';

import { AvatarComponent } from './components/avatar/components/avatar.component';
import { AtomComponent } from './components/atom/components/atom.component';
import { SocialMediaComponent } from './components/social-media/components/social-media.component';
import { SocialMediaFooterComponent } from './components/social-media/components/social-media-footer.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AvatarComponent,
    AtomComponent,
    SocialMediaComponent,
    SocialMediaFooterComponent,
    CoreAnimationDirective,
    AnimateFromDirective,
    AnimateFromToDirective,
    ButtonComponent,
  ],
  imports: [
    TranslateModule,
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
    TranslateModule,
    AvatarComponent,
    AtomComponent,
    SocialMediaComponent,
    SocialMediaFooterComponent,
    ButtonComponent,
    AnimateFromDirective,
    AnimateFromToDirective,
  ],
})
export class SharedModule {}
