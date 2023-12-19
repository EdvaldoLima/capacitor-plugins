import { Clipboard } from '@capacitor/clipboard'

export const writeClipboard = async (data) => {
  await Clipboard.write(data)
}

export const readClipboard = async () => {
  return await Clipboard.read()
}
