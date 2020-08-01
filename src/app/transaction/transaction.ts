import { IDetail } from '../shared/detail'

export interface ITransaction {
  hash160: string;
  address: string;
  n_tx: number;
  total_received: number;
  total_sent: number;
  final_balance: number;
  txs: IDetail[]
}
