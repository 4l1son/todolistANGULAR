import { ApplicationRef, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; // Importe o módulo AppModule

import { AppComponent } from './app/app.component'; 

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(moduleRef => {
    const appRef = moduleRef.injector.get(ApplicationRef);
    appRef.bootstrap(AppComponent); 
  })
  .catch(err => console.error(err));
