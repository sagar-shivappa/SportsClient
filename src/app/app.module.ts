import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared-module/shared.module';
import { FooterComponent } from './footer/footer.component';
import { HttpInterceptorInterceptor } from './Interceptors/http-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
