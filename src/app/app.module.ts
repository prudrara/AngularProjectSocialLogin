import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,

} from "angular5-social-login";

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("1098882861727-1cqtksb0rsbktr43ud0oekaufacahn5n.apps.googleusercontent.com")
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
