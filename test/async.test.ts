import { asyncFunc } from '../index';
import { expect } from 'chai';
import * as nock from 'nock';


describe('async ', ()=>{
  nock.isActive()
  nock.active();
  it('should success', async ()=>{
    const scope = nock('', {});
  

    const result = await asyncFunc('hello');
    expect(result, 'result is eq to bbbb').to.eq('bbbb');

  });
});