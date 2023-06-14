// eslint-disable-next-line @typescript-eslint/no-var-requires -- file mocker
const path = require('path');

module.exports = {
  process(sourceText, sourcePath, options) {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- file mocker
      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
    };
  },
};
