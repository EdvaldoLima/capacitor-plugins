import { App } from '@capacitor/app'

export const exitApp = async () => {
  return await App.exitApp()
}

export const getInfo = async () => {
  return await App.getInfo()
}
