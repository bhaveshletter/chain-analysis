import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionDetailComponent } from './transaction/transaction-detail/transaction-detail.component';
import { Page404Component } from './page404/page404.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: LayoutComponent },
      { path: 'transactions/:id', component: TransactionComponent },
      {
        path: 'transaction-details/:id',
        component: TransactionDetailComponent,
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', component: Page404Component, pathMatch: 'full' },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
