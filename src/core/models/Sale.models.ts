import { TransactionTypeTypes, TransactionStatusType } from "@core/types/transaction-types";

export interface ISale {
  _id: string;
  transaction: {
    type: TransactionTypeTypes;
    status: TransactionStatusType;
  },
  date: {
    full_date: Date;
    hour: string;
  },
  payment: {
    provider: 'MasterCard' | 'AmericanExpress' | 'DinersClub';
    last_digits: string;
    method: 'dataphone' | 'payment_link';
  },
  transaction_id: string;
  amount: {
    value: number;
    note?: string;
    deduction?: number;
  },
};
