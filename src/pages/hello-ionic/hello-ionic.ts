import { Inject, Component } from '@angular/core';

import {AppToken, AppConfig} from '../../app/app.config';

@Component({
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(@Inject(AppToken) private config: AppConfig) {
    console.log('Hello world');
    console.log(config);
    console.log(config.label);
    console.log(this.config.label);
  }
}
