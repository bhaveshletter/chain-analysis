import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service'

@Component({
  // selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit {
  // lbHeight: number;
  // error: string;

  constructor(private bitcoinService: BitcoinService) { }

  ngOnInit(): void {    
    // this.bitcoinService.getLatestBlock().subscribe({
    //   next: data => {
    //     this.lbHeight = data.height;
    //   },
    //   error: err => {
    //     this.error = `${err || 'Something went wrong during'}  - Latest Block API call`
    //   }
    // }).add(() => {
    //   console.log('API call is completed.');
    // })
  }

  // setMessage(msg: string, error = true, success?: false, warning?: false, info?: false) {
  //   return {
  //     'display-none': !(error || success || warning || info),
  //     'info-msg': info,
  //     'success-msg': success,
  //     'warning-msg': warning,
  //     'error-msg': error
  //   }
  // }

}