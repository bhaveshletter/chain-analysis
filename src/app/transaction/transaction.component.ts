import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Observable, BehaviorSubject } from 'rxjs';
import { BitcoinService } from '../bitcoin.service';
import { IDetail } from '../shared/detail';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap, merge, throttleTime, scan, mergeMap } from 'rxjs/operators';

@Component({
  // selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.sass'],
})
export class TransactionComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  // error: string;
  bctAddress: string; // = '1HB5XMLmzFVj8ALj6mfBsbifRoD4miY36v';
  filteredTransactions: IDetail[] = [];
  transactions: IDetail[] = [];
  _txnFilter = undefined;
  total: number = 0;
  offset: number = 0;
  limit: number = 50;

  constructor(
    private bitcoinService: BitcoinService,
    private params: ActivatedRoute,
    private router: Router
  ) {}

  nextPage(e: any) {
    if (this.offset >= this.total) {
      return;
    }
    const end = this.viewport.getRenderedRange().end,
      total1 = this.viewport.getDataLength();

    if (end === total1) {
      // this.offset += this.limit;
      // this.getData();
    }
  }

  trackByIndex(i: any) {
    return i;
  }

  getData() {
    this.bitcoinService
      .getTransactions(this.bctAddress, this.offset, this.limit)
      .subscribe({
        next: (data) => {
          if (data['status_code']) {
            this.onRoot();
          } else {
            this.total = data['n_tx'];
            this.transactions = data['txs'];
            this.filteredTransactions = this.transactions;
          }
        },
        error: (err) => {
          this.onRoot();
          // this.error = `${err || 'Something went wrong during'}  - BCT transactions API call`
        },
      })
      .add(() => {
        console.log('Transaction call is completed.');
      });
  }

  get txnFilter(): number {
    return this._txnFilter;
  }

  set txnFilter(value: number) {
    this._txnFilter = value;
    this.filteredTransactions = this.txnFilter
      ? this.getFiltered(this.txnFilter)
      : this.transactions;
  }

  getFiltered(filterBy: number): IDetail[] {
    let search = filterBy;
    return this.transactions.filter(
      (transaction: IDetail) => transaction.result < search
    );
  }

  ngOnInit(): void {
    this.bctAddress = this.params.snapshot.paramMap.get('id');
    this.getData();
  }

  onRoot(): void {
    this.router.navigate(['']);
  }
}
