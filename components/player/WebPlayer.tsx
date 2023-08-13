import React, { useRef } from 'react';
import { useTVEventHandler } from 'react-native';
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
  const webViewRef = useRef<WebView>();
  useTVEventHandler(event => {
    console.log(event);
  });
  return (
    <WebView
      ref={webViewRef as any}
      injectedJavaScriptBeforeContentLoaded={runFirst}
      injectedJavaScript="window.postMessage(document.body))"
      allowsFullscreenVideo
      thirdPartyCookiesEnabled
      accessibilityLabel={name}
      onMessage={message => console.log(message)}
      source={{
        uri: `https://www.youtube.com/embed/${youtube}`,
      }}
    />
  );
};
