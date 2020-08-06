import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDetail } from '../../shared/detail';
import { BitcoinService } from '../../bitcoin.service';

@Component({
  // selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.sass'],
})
export class TransactionDetailComponent implements OnInit {
  // error: string;
  transactionDetail: IDetail;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bitcoinService: BitcoinService
  ) {}

  ngOnInit(): void {
    this.bitcoinService
      .getTransactionDetail(this.route.snapshot.paramMap.get('id'))
      .subscribe({
        next: (data) => {
          if (data['status_code']) {
            this.onRoot();
          } else {
            this.transactionDetail = data;
          }
        },
        error: (err) => {
          this.onRoot();
          // this.error = `${err || 'Something went wrong during'}  - Transaction detail API call`
        },
      })
      .add(() => {
        console.log('Transaction detail call is completed.');
      });
  }

  onRoot(): void {
    this.router.navigate(['']);
  }
}
