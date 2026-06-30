import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'NateTheProgrammer - Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const saira = await readFile(join(process.cwd(), 'src/app/_og/saira-semibold.ttf'));

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 22,
          background: '#0b0f14',
          padding: 84,
          fontFamily: 'Saira',
        }}
      >
        <div style={{ display: 'flex', fontSize: 30, letterSpacing: 5, color: '#6f97ff' }}>
          SOFTWARE ENGINEER
        </div>
        <div style={{ display: 'flex', fontSize: 96, color: '#e6edf3', lineHeight: 1.05 }}>
          NateTheProgrammer
        </div>
        <div style={{ display: 'flex', fontSize: 40, color: '#95a3b8', maxWidth: 900 }}>
          Whatever your software needs to do, I can build it.
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 10,
            height: 8,
            width: 180,
            background: '#ffd166',
            borderRadius: 999,
          }}
        />
      </div>
    ),
    { ...size, fonts: [{ name: 'Saira', data: saira, weight: 600, style: 'normal' }] },
  );
}
