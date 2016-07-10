
export const asyncFunc = async (hello: string)=> {
  await timeout();
  console.log(hello);
  return 'bbbb';
};

function timeout() {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve();
    }, 1000);
  });
}

async function useAsyncAsCallback(url: string, cb: ()=>Promise<string>) {

  await cb();
}


