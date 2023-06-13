// eslint-disable-next-line @typescript-eslint/no-var-requires -- file mocker, never used in client-facing code
const path = require('path');

module.exports = {
  process(sourceText, sourcePath, options) {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- file mocker, never used in client-facing code
      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
    };
  },
};
