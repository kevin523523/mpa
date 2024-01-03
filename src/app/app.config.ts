import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { withHashLocation } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,withHashLocation())]
};
