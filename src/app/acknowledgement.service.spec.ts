import { TestBed } from '@angular/core/testing';

import { AcknowledgementService } from './acknowledgement.service';

describe('AcknowledgementService', () => {
  let service: AcknowledgementService,
    message = 'This is message';

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcknowledgementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have 0 message in starting', () => {
    expect(service.messages.length).toEqual(0);
  });

  it('should a message when add is invoked', () => {
    service.add(message);

    expect(service.messages.length).toEqual(1);
  });

  it('should a message at last position which is added latest', () => {
    let firstMessage = 'First message',
      latestMessage = 'Latest message';

    service.add(firstMessage);
    service.add(latestMessage);

    expect(service.messages[service.messages.length - 1]).toBeTruthy(
      latestMessage
    );
  });

  it('should be no message when clear is invoked', () => {
    service.add(message);

    service.clear();

    expect(service.messages.length).toEqual(0);
  });
});
