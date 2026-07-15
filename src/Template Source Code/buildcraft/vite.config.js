import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Copy assets from brain directory to public directory
try {
  const publicDir = path.resolve(__dirname, 'public')
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }
  
  const filesToCopy = [
    {
      src: 'C:\\Users\\DELL\\.gemini\\antigravity\\brain\\491f2233-65aa-4846-9c95-f575752aec45\\dubai_skyscraper_hero_1781155130377.png',
      dest: 'dubai_skyscraper_hero.png'
    },
    {
      src: 'C:\\Users\\DELL\\.gemini\\antigravity\\brain\\491f2233-65aa-4846-9c95-f575752aec45\\creek_tower_construction_1781155144405.png',
      dest: 'creek_tower_construction.png'
    },
    {
      src: 'C:\\Users\\DELL\\.gemini\\antigravity\\brain\\491f2233-65aa-4846-9c95-f575752aec45\\engineers_construction_site_1781155157792.png',
      dest: 'engineers_construction_site.png'
    }
  ]

  filesToCopy.forEach(file => {
    if (fs.existsSync(file.src)) {
      fs.copyFileSync(file.src, path.join(publicDir, file.dest))
      console.log(`Successfully copied ${file.dest}`)
    } else {
      console.warn(`Source file not found: ${file.src}`)
    }
  })
} catch (err) {
  console.error('Failed to copy construction assets:', err)
}

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
})
