import { expect } from '@open-wc/testing';
import Dashboard from './dashboard.js';

describe('Dashboard', () => {
  it('<app-dashboard> is an instance of Dashboard', async () => {
    const element = document.createElement('app-dashboard');
    expect(element).to.be.instanceOf(Dashboard);
  });
});
