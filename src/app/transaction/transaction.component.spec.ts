import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TransactionComponent } from './transaction.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BitcoinService } from '../bitcoin.service';
import { of } from 'rxjs';
import { Observable, throwError } from 'rxjs';

describe('TransactionComponent', () => {
  let component: TransactionComponent,
    fixture: ComponentFixture<TransactionComponent>,
    mockBitcoinService,
    TRANSACTIONS;

  beforeEach(async(() => {
    mockBitcoinService = jasmine.createSpyObj(['getTransaction']);

    TRANSACTIONS = {
      message: '',
      status_code: '',
      hash160: 'b169f2b0b866db05900b93a5d76345f18d3afb24',
      address: '1HB5XMLmzFVj8ALj6mfBsbifRoD4miY36v',
      n_tx: 26632,
      total_received: 404349207757,
      total_sent: 404349207757,
      final_balance: 0,
      txs: [
        {
          block_height: 638139,
          block_index: 0,
          hash:
            'ed0a9b313673147e54e60f586e954866698d7d57172900e147c71dd6430d7a99',
          inputs: [],
          lock_time: 638138,
          out: [],
          relayed_by: '0.0.0.0',
          result: -359357,
          size: 221,
          time: 1594122550,
          tx_index: 0,
          vin_sz: 2,
          vout_sz: 1,
          weight: 1,
          ver: 884,
        },
      ],
    };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [TransactionComponent],
      providers: [{ provide: BitcoinService, useValue: mockBitcoinService }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get transactions from the service', () => {
    mockBitcoinService.getTransaction.and.returnValue(of(TRANSACTIONS));

    expect(component.transactions['txs'].length).toBe(1);
  });
});
