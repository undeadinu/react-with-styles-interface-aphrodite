import { expect } from 'chai';
import aphroditeInterface from '../src/aphroditeInterface';

describe('aphroditeInterface', () => {
  it('is an interface', () => {
    expect(typeof aphroditeInterface.create).to.equal('function');
    expect(typeof aphroditeInterface.resolve).to.equal('function');
  });
});
