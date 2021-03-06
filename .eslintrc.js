module.exports = {

	'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off'
	},
	
  // env: {
  //   es6: true,
  // },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
	},
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  // rules: {
	// 	"react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }]
  // },
};
