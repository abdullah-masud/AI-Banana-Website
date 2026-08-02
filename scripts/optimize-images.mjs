import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = process.cwd()
const output = path.join(root, 'src', 'assets')
const publicDir = path.join(root, 'public')
const logo = path.join(root, 'assets', 'logos', 'AI_Banana_Logo_Transparent.png')
const profile = path.join(root, 'assets', 'logos', 'AI_Banana_Profile_Icon_Transparent.png')
const hero = path.join(root, 'assets', 'characters', 'Master Character Render v1.png')

await mkdir(output, { recursive: true })
await mkdir(publicDir, { recursive: true })

await sharp(logo).resize({ width: 900, withoutEnlargement: true }).webp({ quality: 86, effort: 6 }).toFile(path.join(output, 'logo.webp'))
await sharp(hero).resize({ width: 820, withoutEnlargement: true }).webp({ quality: 84, effort: 6 }).toFile(path.join(output, 'hero-character.webp'))
await sharp(profile).resize(192, 192, { fit: 'contain' }).png({ compressionLevel: 9 }).toFile(path.join(publicDir, 'favicon.png'))

const socialLogo = await sharp(logo).resize({ width: 1040, height: 520, fit: 'contain' }).png().toBuffer()
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#FDFDFD' } })
  .composite([{ input: socialLogo, left: 80, top: 55 }])
  .png({ compressionLevel: 9 })
  .toFile(path.join(publicDir, 'social-preview.png'))

console.log('Optimized logo, hero, favicon, and social preview.')
