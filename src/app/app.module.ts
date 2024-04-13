import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { HomeComponent } from './features/pages/home/components/home.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FeaturesModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  bootstrap: [HomeComponent],
})
export class AppModule {}
