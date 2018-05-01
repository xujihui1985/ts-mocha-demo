/**
 * try add new enum value on Shirt Size to see if it compile
 */
enum ShirtSize {
  S,
  M,
  L,
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

export function assertNever(value: never): never {
  throw new Error(`unexpected value '${value}'`);
}