declare module 'react-native-beauty-webview' {
  type BeautyWebViewProperties = {
    visible: boolean
    onPressClose: any
    url: string
    backgroundColor?: string
    headerContent?: 'dark' | 'light'
    headerBackground?: string
    progressColor?: string
    progressHeight?: number
    loadingText?: string
    copyLinkTitle?: string
    openBrowserTitle?: string
    extraMenuItems?: any[]
    animationType?: 'slide' | 'fade'
    progressBarType?: 'normal' | 'background'
    onLoadEnd?: any
    onLoadStart?: any
    navigationVisible?: boolean
    closeIcon?: React.Component
    menuIcon?: React.Component
    onGoBack?: any
    onGoForward?: any
  }

  const BeautyWebView: React.FunctionComponent<BeautyWebViewProperties>

  export default BeautyWebView
}
