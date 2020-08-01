import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';
import { ITransaction } from './transaction';
import { IDetail } from '../shared/detail';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.sass']
})
 
export class TransactionComponent implements OnInit {
  // error: string;
  bct_address: string = '1HB5XMLmzFVj8ALj6mfBsbifRoD4miY36v';
  totalTxns: number;
  filteredTransactions: IDetail[] = [];
  transactions: IDetail[] = [];
  _txnFilter = undefined;

  constructor(private bitcoinService: BitcoinService) {  }

  get txnFilter(): number {
    return this._txnFilter;
  }

  set txnFilter(value: number) {
    this._txnFilter = value;
    this.filteredTransactions = this.txnFilter ? this.getFiltered(this.txnFilter) : this.transactions;
  }

  getFiltered(filterBy: number): IDetail[] {
    let search = filterBy;
    return this.transactions.filter((transaction: IDetail) => 
      transaction.result < search
    )
  }

  ngOnInit(): void {
    this.bitcoinService.getTransaction(this.bct_address).subscribe({
      next: data => {
        this.totalTxns = data['n_tx'];
        this.transactions = data['txs'];
        this.filteredTransactions = this.transactions;
      },
      error: err => {
        // this.error = `${err || 'Something went wrong during'}  - BCT transactions API call`
      }
    }).add(() => {
      console.log('Transaction call is completed.');
    })
  }

}
