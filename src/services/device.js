import { Device } from '@capacitor/device'

export const getInfoDevice = async () => {
  return await Device.getInfo()
}

export const getBatteryInfo = async () => {
  return await Device.getBatteryInfo()
}

export const getLanguageTag = async () => {
  return await Device.getLanguageTag()
}

export const getLanguageCode = async () => {
  return await Device.getLanguageCode()
}
