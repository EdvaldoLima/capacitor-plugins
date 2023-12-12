import { ActionSheet } from '@capacitor/action-sheet'
export { ActionSheetButtonStyle } from '@capacitor/action-sheet'

export const showActions = async (options) => {
  return await ActionSheet.showActions(options)
}
