import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgComponentsLibraryModule } from '@bricks/ng-components';
import { AppInitializerService } from './app-initializer.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgComponentsLibraryModule],
  providers: [
    AppInitializerService,
    {
      provide: APP_INITIALIZER,
      useFactory: (appInitializer: AppInitializerService) => () =>
        appInitializer.initializeApp(),
      deps: [AppInitializerService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
