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



type HttpStatus = 200 | 404;
