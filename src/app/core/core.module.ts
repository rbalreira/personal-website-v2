import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared/shared.module';
import { FeaturesModule } from '@app/features/features.module';
import { throwIfAlreadyLoaded } from './guards/module-import-guard';

import { HeaderComponent } from './components/header/components/header.component';
import { SectionComponent } from './components/section/components/section.component';

import { FuncsService } from './services/funcs/funcs.service';
import { FooterComponent } from './components/footer/components/footer.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    FeaturesModule,
    FormsModule,
  ],
  declarations: [HeaderComponent, SectionComponent, FooterComponent],
  providers: [FuncsService],
  exports: [RouterModule, HeaderComponent, SectionComponent, FooterComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, CoreModule.name);
  }
}
