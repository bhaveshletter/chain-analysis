import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';
import { IDetail } from '../shared/detail';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  // selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.sass'],
})
export class TransactionComponent implements OnInit {
  // error: string;
  bctAddress: string; // = '1HB5XMLmzFVj8ALj6mfBsbifRoD4miY36v';
  filteredTransactions: IDetail[] = [];
  transactions: IDetail[] = [];
  _txnFilter = undefined;

  constructor(
    private bitcoinService: BitcoinService,
    private params: ActivatedRoute,
    private router: Router
  ) {}

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
    this.bitcoinService
      .getTransaction(this.bctAddress)
      .subscribe({
        next: (data) => {
          console.log(data);
          if (data['status_code']) {
            this.onRoot();
          } else {
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

  onRoot(): void {
    this.router.navigate(['']);
  }
}
