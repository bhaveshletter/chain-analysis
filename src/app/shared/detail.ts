export interface IDetail {
  block_height: number;
  block_index: number;
  hash: string;
  inputs: object[];
  lock_time: number;
  out: object[];
  relayed_by: string;
  result: number;
  size: number;
  time: number;
  tx_index: number;
  vin_sz: number;
  vout_sz: number;
  weight: number;
  ver: number;
  message: string;
  status_code: number;
}
