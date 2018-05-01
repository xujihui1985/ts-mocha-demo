import * as _ from 'lodash';
import { assertNever } from "../assert_never";

type Result<T> =
  | { success: true; value: T }
  | { success: false; error: string };

function tryParseNumber(str: string): Result<number> {
  if (/\d/.test(str)) {
    return {
      success: true,
      value: Number.parseInt(str, 10)
    };
  }
  return {
    success: false,
    error: "aaaa"
  };
}

const result = tryParseNumber("adadsf");
if (result.success) {
  console.log(result.value);
} else {
  console.log(result.error);
}

class Cash {
  kind: 'cash';
}
class Paypal {
  kind: 'paypal';
  email: string;
}
class CreditCard {
  kind: 'creditcard';
  cardNumber: string; 
  securityCode: string;
}

type PaymentMethod = Cash | Paypal | CreditCard;

function payMoney(method: PaymentMethod) {
  switch(method.kind) {
    case "cash": {
      console.log(method.kind);
      break;
    }
    case "creditcard": {
      console.log(method.securityCode)
      break;
    }
    case "paypal": {
      console.log(method.email)
      break;
    }
    default: {
      return assertNever(method);
    }
  }
}

function prop<T, K extends keyof T>(obj: T, key: K) {
  return _.get(obj, key);
}

const c = new CreditCard();

const cardNumber = prop(c, 'cardNumber');