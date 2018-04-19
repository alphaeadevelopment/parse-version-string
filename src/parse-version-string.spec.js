import { expect } from 'chai';
import parseVersionString from '../index';

describe('parseSemver', () => {
  it('parses 1.2.3', () => {
    const semver = '1.2.3';
    const expected = {
      major: 1,
      minor: 2,
      patch: 3,
    };
    expect(parseVersionString(semver)).to.deep.equal(expected);
  })
  it('parses 10.2.03', () => {
    const semver = '10.2.03';
    const expected = {
      major: 10,
      minor: 2,
      patch: 3,
    };
    expect(parseVersionString(semver)).to.deep.equal(expected);
  })
  it('parses 1.2.3-alpha.1', () => {
    const semver = '1.2.3-alpha.1';
    const expected = {
      major: 1,
      minor: 2,
      patch: 3,
      preReleaseLabel: 'alpha.1',
      preReleaseType: 'alpha',
      preReleaseIncrement: 1,
    };
    expect(parseVersionString(semver)).to.deep.equal(expected);
  })
  it('parses 1.2.3-alpha-1', () => {
    const semver = '1.2.3-alpha-1';
    const expected = {
      major: 1,
      minor: 2,
      patch: 3,
      preReleaseLabel: 'alpha-1',
      preReleaseType: 'alpha',
      preReleaseIncrement: 1,
    };
    expect(parseVersionString(semver)).to.deep.equal(expected);
  })
  it('parses 1.2.3-alpha', () => {
    const semver = '1.2.3-alpha';
    const expected = {
      major: 1,
      minor: 2,
      patch: 3,
      preReleaseLabel: 'alpha',
      preReleaseType: 'alpha',
    };
    expect(parseVersionString(semver)).to.deep.equal(expected);
  })
  it('throws error on empty string input', () => {
    const semver = '';
    try {
      parseVersionString(semver);
      fail();
    }
    catch (e) {
      expect(e.message).to.equal('missing input version');
    }
  });
  it('throws error on null input', () => {
    const semver = null;
    try {
      parseVersionString(semver);
      fail();
    }
    catch (e) {
      expect(e.message).to.equal('missing input version');
    }
  });
  it('throws error on undefined input', () => {
    let semver;
    try {
      parseVersionString(semver);
      fail();
    }
    catch (e) {
      expect(e.message).to.equal('missing input version');
    }
  });
  it('throws error on invalid input string', () => {
    const semver = 'invalid';
    try {
      parseVersionString(semver);
      fail();
    }
    catch (e) {
      expect(e.message).to.contain('invalid version - does not match pattern');
    }
  });
})
