import { Camera } from '@capacitor/camera'
export { CameraResultType } from '@capacitor/camera'

export const getPhoto = async (options) => {
  return await Camera.getPhoto(options)
}

export const pickImages = async (options) => {
  return await Camera.pickImages(options)
}

export const requestPermissions = async (options) => {
  return await Camera.requestPermissions(options)
}
