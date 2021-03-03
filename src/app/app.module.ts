import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { AuthModule } from '@app/auth';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { AboutModule } from './about/about.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DxButtonModule } from 'devextreme-angular';
import { UsersModule } from './Modules/users/users.module';
import { UsersService } from 'core/service/users.service';
import { UserRepository } from 'core/repositories/user.repository';
import { UsersComponent } from './Modules/users/users.component';

// // service Factory
// export function usersFactory(usersService: UsersService){
//   // usersService: UsersService
//   console.log(("factory !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"));
//   let userRepository: UserRepository
//   return new UsersService(userRepository)
// }

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    AboutModule,
    AuthModule,
    UsersModule,
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
    DxButtonModule,
  ],
  declarations: [AppComponent],
  // providers: [
  //   {
  //     provide: UsersService,
  //     useFactory: usersFactory,
  //     // deps: [UsersService]
  //   }
  // ],
  bootstrap: [AppComponent],
})
export class AppModule {}
