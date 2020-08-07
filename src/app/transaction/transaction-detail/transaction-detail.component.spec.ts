import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TransactionDetailComponent } from './transaction-detail.component';
import { BitcoinService } from '../../bitcoin.service';
import { of } from 'rxjs';
import { EpochToTimestampPipe } from '../../shared/epoch-to-timestamp.pipe';
import { SatoshiToCoinPipe } from '../../shared/satoshi-to-coin.pipe';
// import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TransactionDetailComponent', () => {
  let component: TransactionDetailComponent,
    fixture: ComponentFixture<TransactionDetailComponent>,
    mockBitcoinService,
    TRANSACTION_DETAIL;

  beforeEach(async(() => {
    TRANSACTION_DETAIL = {
      block_height: 638139,
      double_spend: false,
      hash: 'ed0a9b313673147e54e60f586e954866698d7d57172900e147c71dd6430d7a99',
      inputs: [],
      out: [],
      relayed_by: '0.0.0.0',
      result: -359357,
      size: 221,
      time: 1594122558,
      tx_index: 0,
      vin_sz: 2,
      vout_sz: 1,
      weight: 1,
      ver: 884,
    };

    mockBitcoinService = jasmine.createSpyObj(BitcoinService, {
      getTransactionDetail: of(TRANSACTION_DETAIL),
    });
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [{ provide: BitcoinService, useValue: mockBitcoinService }],
      declarations: [TransactionDetailComponent, EpochToTimestampPipe, SatoshiToCoinPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have button with caption Home', () => {
    let btnHome = fixture.nativeElement.querySelector('button');
    expect(btnHome.textContent).toContain('Home');
  });

  it('should get transaction detail from the service', () => {
    mockBitcoinService.getTransactionDetail.and.returnValue(
      of(TRANSACTION_DETAIL)
    );
    expect(component.transactionDetail).toEqual(TRANSACTION_DETAIL);
  });
});
