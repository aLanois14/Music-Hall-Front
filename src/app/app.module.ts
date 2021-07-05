import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TimeagoCustomFormatter, TimeagoFormatter, TimeagoIntl, TimeagoModule } from 'ngx-timeago'
import { NewPublicationModule } from './components/new-publication/new-publication.module';
import { RegisterModule } from './components/register/register.module';
import { HttpRequestInterceptorService } from 'src/interceptors/http-request-interceptor.service';
import { HttpResponseInterceptorService } from 'src/interceptors/http-response-interceptor.service';

export function tokenGetter() {
  return localStorage.getItem("auth_token");
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }), 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TimeagoModule.forRoot({
      formatter: { provide: TimeagoFormatter, useClass: TimeagoCustomFormatter },
    }),
    JwtModule.forRoot({
        config: {
          tokenGetter: tokenGetter
        }
    }),
    NewPublicationModule,
    RegisterModule
  ],
  providers: [
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptorService,
      multi: true,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpResponseInterceptorService,
        multi: true,
    }, HttpClient
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
