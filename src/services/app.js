import { App } from '@capacitor/app'

export const exitApp = async () => {
  return await App.exitApp()
}

export const getInfo = async () => {
  return await App.getInfo()
}

export const getState = async () => {
  return await App.getState()
}

export const getLaunchUrl = async () => {
  return await App.getLaunchUrl()
}

export const minimizeApp = async () => {
  return await App.minimizeApp()
}

// Events
export const onAppStateChange = async (call) => {
  console.log('state call')
  return await App.addListener('appStateChange', (data) => call(data))
}

export const onPause = async (call) => {
  return await App.addListener('pause', (data) => call(data))
}

export const onResume = async (call) => {
  return await App.addListener('resume', (data) => call(data))
}

export const onAppUrlOpen = async (call) => {
  return await App.addListener('appUrlOpen', (data) => call(data))
}

export const onAppRestoredResult = async (call) => {
  return await App.addListener('appRestoredResult', (data) => call(data))
}

export const onBackButton = async (call) => {
  return await App.addListener('backButton', (data) => call(data))
}

export const removeAllListeners = async () => {
  return await App.removeAllListeners()
}
