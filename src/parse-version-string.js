const pattern = /([0-9]+)\.([0-9]+)\.([0-9]+)(-(([a-z]+)([.-]([0-9]+))?)?)?/;

export default (version) => {
  if (!version) throw new Error('missing input version');

  const match = version.match(pattern);
  if (!match) throw new Error('invalid version - does not match pattern ' + pattern);

  const rv = {
    major: Number(match[1]),
    minor: Number(match[2]),
    patch: Number(match[3]),
  };
  if (match[5]) {
    Object.assign(rv, { preReleaseLabel: match[5] });
    Object.assign(rv, { preReleaseType: match[6] });
    if (match[8]) {
      Object.assign(rv, { preReleaseIncrement: Number(match[8]) });
    }
  }
  return rv;
};
