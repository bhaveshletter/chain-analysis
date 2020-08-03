import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { LatestBlockComponent } from './latest-block/latest-block.component';
import { TransactionComponent } from './transaction/transaction.component';
import { SatoshiToCoinPipe } from './shared/satoshi-to-coin.pipe';
import { TransactionDetailComponent } from './transaction/transaction-detail/transaction-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    LatestBlockComponent,
    TransactionComponent,
    SatoshiToCoinPipe,
    TransactionDetailComponent,
    Page404Component,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
