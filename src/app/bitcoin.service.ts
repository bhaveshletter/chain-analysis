import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { ITransaction } from './transaction/transaction';
import { IDetail } from './shared/detail';
import { AcknowledgementService } from './acknowledgement.service';

@Injectable({
  providedIn: 'root',
})
export class BitcoinService {
  baseUrl: string = environment.apiURL;

  constructor(
    private http: HttpClient,
    public acknowledgementService: AcknowledgementService
  ) {}

  getLatestBlock(): Observable<any> {
    this.acknowledgementService.clear();
    return this.http.get<any[]>(`${this.baseUrl}/latest-block`).pipe(
      tap((data) => {
        if (data['status_code']) {
          this.addMessage(`Error: ${data['message']}`);
        }
        return data;
      }),
      catchError(this.processError)
    );
  }

  getTransactions(bct_address: string): Observable<ITransaction[]> {
    this.acknowledgementService.clear();
    let url = `${this.baseUrl}/rawaddr/${bct_address}`;
    return this.http.get<ITransaction[]>(url).pipe(
      tap((data) => {
        if (data['status_code']) {
          this.addMessage(`Error: ${data['message']}`);
        }
        return data;
      }),
      catchError(this.processError)
    );
  }

  getTransactionDetail(txn_address: string): Observable<IDetail> {
    this.acknowledgementService.clear();
    let url = `${this.baseUrl}/rawtx/${txn_address}`;
    return this.http.get<IDetail>(url).pipe(
      tap((data) => {
        if (data['status_code']) {
          this.addMessage(`Error: ${data['message']}`);
        }
        return data;
      }),
      catchError(this.processError)
    );
  }

  processError(err: HttpErrorResponse): Observable<never> {
    this.addMessage(`Error: ${err.error.message || 'Something went wrong!'}`);
    return throwError(err.error.message);
  }

  private addMessage(message: string): void {
    this.acknowledgementService.add(message);
  }
}
