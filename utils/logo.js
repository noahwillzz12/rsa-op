const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');
const { AttachmentBuilder } = require('discord.js');

const LOGO_CANVAS_SIZE = 1024;
const ALPHA_MIN_THRESHOLD = 12;

async function getProcessedLogoAttachment(team) {
  if (!team || !team.logo) {
    throw new Error('Team logo not configured');
  }

  const logoPath = path.join(__dirname, '..', team.logo);
  await fs.access(logoPath);

  const rawBuffer = await sharp(logoPath)
    .ensureAlpha()
    .trim()
    .resize({
      width: LOGO_CANVAS_SIZE,
      height: LOGO_CANVAS_SIZE,
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  const { data, info } = await sharp(rawBuffer)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixelBuffer = Buffer.from(data);
  if (info.channels === 4) {
    for (let i = 0; i < pixelBuffer.length; i += 4) {
      const alpha = pixelBuffer[i + 3];
      if (alpha > 0 && alpha < ALPHA_MIN_THRESHOLD) {
        pixelBuffer[i + 3] = 0;
      }
    }
  }

  const cleanedBuffer = await sharp(pixelBuffer, { raw: info })
    .png({ compressionLevel: 9, adaptiveFiltering: false })
    .toBuffer();

  return new AttachmentBuilder(cleanedBuffer, { name: `${team.teamCode}-logo.png` });
}

module.exports = {
  getProcessedLogoAttachment,
};
