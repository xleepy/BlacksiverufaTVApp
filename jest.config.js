module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    'react-native-webview': '<rootDir>/jest/__mocks__/WebView.js',
    'react-native-video': '<rootDir>/jest/__mocks__/Video.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'identity-obj-proxy',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
};
