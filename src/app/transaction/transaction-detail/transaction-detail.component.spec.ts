import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TransactionDetailComponent } from './transaction-detail.component';
// import { BitcoinService } from '../../bitcoin.service';
// import { of } from 'rxjs';

describe('TransactionDetailComponent', () => {
  let component: TransactionDetailComponent,
    fixture: ComponentFixture<TransactionDetailComponent>;

  //   mockBitcoinService,
  //   TRANSACTION_DETAIL;

  beforeEach(async(() => {
    //   mockBitcoinService = jasmine.createSpyObj(['getTransactionDetail']);

    //   TRANSACTION_DETAIL = {
    //     block_height: 638139,
    //     double_spend: false,
    //     hash: 'ed0a9b313673147e54e60f586e954866698d7d57172900e147c71dd6430d7a99',
    //     inputs: [],
    //     lock_time: 638138,
    //     out: [],
    //     relayed_by: '0.0.0.0',
    //     result: -359357,
    //     size: 221,
    //     time: 1594122550,
    //     tx_index: 0,
    //     vin_sz: 2,
    //     vout_sz: 1,
    //     weight: 1,
    //     ver: 884,
    //   };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      // providers: [{ provide: BitcoinService, useValue: mockBitcoinService }],
      declarations: [TransactionDetailComponent],
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

  // it('should get transaction detail from the service', () => {
  //   mockBitcoinService.getTransactionDetail.and.returnValue(
  //     of(TRANSACTION_DETAIL)
  //   );

  //   expect(component.transactionDetail).toEqual(TRANSACTION_DETAIL);
  // });
});
