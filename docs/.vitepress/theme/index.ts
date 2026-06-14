import DefaultTheme from 'vitepress/theme'
import WallpaperCard from './components/WallpaperCard.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('WallpaperCard', WallpaperCard)
  },
}
