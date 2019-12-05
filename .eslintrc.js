module.exports = {
  // env: {
  //   es6: true,
  // },
  // extends: [
  //   'plugin:react/recommended',
  //   'airbnb',
	// ],
	'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'no-use-before-define':  'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off'
	},
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
		'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
  },
};
