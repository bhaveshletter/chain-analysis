import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { ITransaction } from './transaction/transaction'
import { IDetail } from './shared/detail';


@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  baseUrl: string = environment.apiURL;

  constructor(private http: HttpClient) { }

  getLatestBlock(): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/latest-block`).pipe(
      tap(data => {
        return data;
      }),
      catchError(this.processError)
    );
  }

  getTransaction(bct_address: string): Observable<ITransaction[]> {
    let url = `${this.baseUrl}/rawaddr/${bct_address}`
    return this.http.get<ITransaction[]>(url).pipe(
      tap(data => {
        return data;
      }),
      catchError(this.processError)
    );
  }

  getTransactionDetail(txn_address: string): Observable<IDetail> {
    let url = `${this.baseUrl}/rawtx/${txn_address}`
    return this.http.get<IDetail>(url).pipe(
      tap(data => {
        console.log(data);
        return data;
      }),
      catchError(this.processError)
    );
  }

  processError(err: HttpErrorResponse): Observable<never> {
    return throwError(err.error.message);
  }
}
