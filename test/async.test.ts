import { asyncFunc } from '../index';
import { expect } from 'chai';
import * as nock from 'nock';


describe('async ', ()=>{
  it('should success', async ()=>{

    const result = await asyncFunc('hello');
    expect(result, 'result is eq to bbbb').to.eq('bbbb');

  });
});