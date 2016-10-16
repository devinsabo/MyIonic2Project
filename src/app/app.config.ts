import { OpaqueToken } from '@angular/core';

export const AppToken = new OpaqueToken('app.config');

export interface AppConfig {
    label: string;
}

export class APP_CONFIG implements AppConfig {
  label: string = 'HEY!';
}
