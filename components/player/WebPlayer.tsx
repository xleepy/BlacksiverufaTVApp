import React from 'react';
import WebView from 'react-native-webview';

const runFirst = `
window.isNativeApp = true;
true; // note: this is required, or you'll sometimes get silent failures
`;

type Props = {
  name: string;
  youtube: string;
};

export const WebPlayer = ({ name, youtube }: Props) => {
  return (
    <WebView
      injectedJavaScriptBeforeContentLoaded={runFirst}
      allowsFullscreenVideo
      thirdPartyCookiesEnabled
      accessibilityLabel={name}
      source={{
        uri: `https://www.youtube.com/embed/${youtube}`,
      }}
    />
  );
};
