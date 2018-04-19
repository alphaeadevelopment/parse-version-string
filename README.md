# parse-version-string

Parses a version string into its constituent parts.

## Import
```javascript
var parseVersionString = require("parse-version-string").default;

import parseVersionString from 'parse-version-string');
```

## Usage
```javascript
parseVersionString('1.2.3-alpha.4');
// output:
// {
//   major: 1,
//   minor: 2,
//   patch: 3,
//   preReleaseLabel: 'alpha-4',
//   preReleaseType: 'alpha',
//   preReleaseIncrement: 4
// }
```
