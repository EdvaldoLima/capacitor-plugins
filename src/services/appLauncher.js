import { AppLauncher } from '@capacitor/app-launcher'

export const canOpenUrl = async () => {
  return await AppLauncher.canOpenUrl({ url: 'com.android.chrome' })
}

export const openUrl = async () => {
  return await AppLauncher.openUrl({ url: 'com.android.chrome' })
}
