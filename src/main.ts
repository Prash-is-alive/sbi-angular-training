import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/routing/example3/app.module';
//import { AppModule } from './app/routing/example2/app/app.module';
//import { AppModule } from './app/routing/example1/root/app.module';
//import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
