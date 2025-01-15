/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'

const config = {
  content: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}', '../../packages/ui/src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cafe24: ['var(--font-cafe24)'],
        nanum: ['var(--font-nanum)']
      },
      colors: {
        btn: {
          yellow: '#f4a50f',
          paleyellow: '#fff5c9',
          tenderyellow: '#fffc88',
          green: '#5ebf86',
          red: '#ed888a',
          deactivate: '#909090',
          bordergrey: '#d8d8d8',
          sky: '#46b5ff'
        },
        skyblue: '#46b5ff',
        paleblue: '#e7f4fc',
        borderblue: '#bce3f8',
        btnyellow: '#f4a50f',
        paleyellow: '#fff5c9',
        tenderyellow: '#fffc88',
        btngreen: '#5ebf86',
        btnred: '#ed888a',
        deactivate: '#909090',
        bordergrey: '#d8d8d8',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      spacing: {
        'navbar-height': '6.25rem'
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: []
} satisfies Config

export default config
