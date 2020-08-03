import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'

@Component({
  // selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass'],
})
export class LayoutComponent implements OnInit {
  bctAddress: string = '';
  bctRegex = environment.bctAddressRegex;
  submitted: boolean = false;

  constructor(private bitcoinService: BitcoinService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    this.router.navigate(['/transactions', this.bctAddress]);
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
