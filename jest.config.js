module.exports = {
  globals: {
    'ts-jest': {
      diagnostics: {
        warnOnly: true
      }
    }
  },
  setupFilesAfterEnv: ['<rootDir>/test_config/setup.js'],
};
