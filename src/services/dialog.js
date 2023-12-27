import { Dialog } from '@capacitor/dialog'

export const dialogAlert = async (options) => await Dialog.alert(options)
export const dialogPrompt = async (options) => await Dialog.prompt(options)
export const dialogConfirm = async (options) => await Dialog.confirm(options)
