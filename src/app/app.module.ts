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

import { UsersModule } from './Modules/users/users.module';
import { UsersService } from 'core/service/users.service';
import { UserRepository } from 'core/repositories/user.repository';
import { UsersComponent } from './Modules/users/users.component';
import { EmployeesComponent } from './Modules/employees/employees.component';
import { EmployeesModule } from './Modules/employees/employees.module';



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
    EmployeesModule,

    AppRoutingModule, // must be imported as the last module as it contains the fallback route
  
  ],
  declarations: [AppComponent],
 
  bootstrap: [AppComponent],
})
export class AppModule {}
