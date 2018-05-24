import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular5-social-login";

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("50573442860-6lf1eme9lnsjra8vl8mil36qn2ecm959.apps.googleusercontent.com")
      },
    ]
  )
  return config;
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports:[
    BrowserModule,

    SocialLoginModule
  ],
  providers: [

    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
