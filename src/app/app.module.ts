import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DialogService } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';

import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { HttpZonesComponent } from './components/http-zones/http-zones.component';
import { HttpUpstreamsComponent } from './components/http-upstreams/http-upstreams.component';
import { TcpUdpZonesComponent } from './components/tcp-udp-zones/tcp-udp-zones.component';
import { CachesComponent } from './components/caches/caches.component';
import { SharedZonesComponent } from './components/shared-zones/shared-zones.component';
import { ClusterComponent } from './components/cluster/cluster.component';
import { ResolversComponent } from './components/resolvers/resolvers.component';
import { SettingsComponent } from './components/popups/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    HttpZonesComponent,
    HttpUpstreamsComponent,
    TcpUdpZonesComponent,
    CachesComponent,
    SharedZonesComponent,
    ClusterComponent,
    ResolversComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DialogModule
  ],
  providers: [
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
