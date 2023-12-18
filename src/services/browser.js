import { Browser } from '@capacitor/browser'

export const openBrowserUrl = async (options) => {
  await Browser.open(options)
}
