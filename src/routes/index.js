import Home from '@/views/Home/HomeView.vue'
import ActionSheet from '@/views/ActionSheet/ActionSheetView.vue'
import AppLauncher from '@/views/AppLauncher/AppLauncherView.vue'
import App from '@/views/App/AppView.vue'
import Browser from '@/views/Browser/BrowserView.vue'
import Camera from '@/views/Camera/CameraView.vue'
import Clipboard from '@/views/Clipboard/ClipboardView.vue'
import Device from '@/views/Device/DeviceView.vue'
import Dialog from '@/views/Dialog/DialogView.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/action-sheet',
    name: 'action-sheet',
    component: ActionSheet
  },
  {
    path: '/app-launcher',
    name: 'app-launcher',
    component: AppLauncher
  },
  {
    path: '/app',
    name: 'app',
    component: App
  },
  {
    path: '/browser',
    name: 'browser',
    component: Browser
  },
  {
    path: '/camera',
    name: 'camera',
    component: Camera
  },
  {
    path: '/clipboard',
    name: 'clipboard',
    component: Clipboard
  },
  {
    path: '/device',
    name: 'device',
    component: Device
  },
  {
    path: '/dialog',
    name: 'dialog',
    component: Dialog
  }
]
