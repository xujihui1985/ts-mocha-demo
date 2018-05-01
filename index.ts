import * as _ from 'lodash';

export const asyncFunc = async (hello: string) => {
  await timeout();
  console.log(hello);
  return "bbbb";
};

function timeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

async function useAsyncAsCallback(url: string, cb: () => Promise<string>) {
  await cb();
}

function isFlat<T>(array: (T | T[])[]): array is T[] {
  return !array.some(Array.isArray);
}

const num = [1, 2, 3, [4]];

enum ShirtSize {
  S,
  M,
  L
}

function prettyPrint(size: ShirtSize) {
  switch (size) {
    case ShirtSize.S: {
      return "small";
    }
    case ShirtSize.M: {
      return "middle";
    }
    case ShirtSize.L: {
      return "large";
    }
    default:
      return assertNever(size);
  }
}

function assertNever(value: never): never {
  throw new Error(`unexpected value '${value}'`);
}

// function overload

/**
 * reverse the string
 * @param str the string to reverse
 */
function reverse(str: string): string;

/**
 * reverse the array
 * @param array the array to reverse
 */
function reverse<T>(array: T[]): T[];
function reverse(stringOrArray: string | any[]): string | any[] {
  return typeof stringOrArray === "string"
    ? [...stringOrArray].reverse().join("")
    : stringOrArray.reverse().join();
}

const res = reverse([123]);
const res2 = reverse("aaaaaaaasfdsf");

type HttpStatus = 200 | 404;

// discriminated union type

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