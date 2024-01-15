import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared/shared.module';
import { FeaturesModule } from '@app/features/features.module';
import { throwIfAlreadyLoaded } from './guards/module-import-guard';

import { HeaderComponent } from './components/header/header.component';
import { SectionComponent } from './components/section/section.component';

import { FuncsService } from './services/funcs/funcs.service';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    FeaturesModule,
    FormsModule,
  ],
  declarations: [HeaderComponent, SectionComponent],
  providers: [FuncsService],
  exports: [RouterModule, HeaderComponent, SectionComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, CoreModule.name);
  }
}
