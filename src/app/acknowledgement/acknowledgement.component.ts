import { Component, OnInit } from '@angular/core';
import { AcknowledgementService } from '../acknowledgement.service';

@Component({
  selector: 'app-acknowledgement',
  templateUrl: './acknowledgement.component.html',
  styleUrls: ['./acknowledgement.component.sass'],
})
export class AcknowledgementComponent implements OnInit {
  constructor(public acknowledgementService: AcknowledgementService) {}

  ngOnInit(): void {}
}
