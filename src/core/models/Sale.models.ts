import { PaymentMethodTypes } from "@core/types/payment-methods.types";
import { PaymenProviderstTypes } from "@core/types/payments.types";
import { TransactionTypeTypes, TransactionStatusType } from "@core/types/transaction-types";

export interface ISale {
  _id: string;
  transaction: {
    type: TransactionTypeTypes;
    status: TransactionStatusType;
    id: string;
  },
  date: {
    full_date: Date;
  },
  payment: {
    provider: PaymenProviderstTypes ;
    last_digits: string;
    method: PaymentMethodTypes;
  },
  amount: {
    value: number;
    note?: string;
    deduction?: number;
  },
};
