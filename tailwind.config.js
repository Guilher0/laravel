/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/views/*.blade.php",
    "./resources/views/*.js",
    "./resources/views/*.vue", // Caso use Vue no futuro
  ],
  // A estratégia darkMode precisa corresponder à forma como seu JS aplica o tema.
  // Seu JS original adicionava 'theme-dark' ao body.
  // O JS que forneci para Laravel adiciona 'theme-dark' ao <html> (document.documentElement)
  // Se seu JS adiciona 'theme-dark' ao <html>:
  darkMode: ['selector', '[class="theme-dark"]'],
  // Se seu JS adiciona a classe 'dark' ao <html> (mais comum no Tailwind):
  // darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // A fonte Inter já é carregada via <link> no app.blade.php.
        // Definir aqui é mais para consistência ou se você usar utilitários como font-inter.
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        // Para usar opacidade (ex: bg-primaryBg/50), as variáveis HSL
        // DEVEM ser definidas com <alpha-value> no final.
        primaryBg: 'hsl(var(--primaryBg) / <alpha-value>)',
        primaryText: 'hsl(var(--primaryText) / <alpha-value>)',
        primaryTextNeutral: 'hsl(var(--primaryTextNeutral) / <alpha-value>)',
        primaryTextHover: 'hsl(var(--primaryTextHover) / <alpha-value>)',
        onPrimaryBg: 'hsl(var(--onPrimaryBg) / <alpha-value>)',
        onPrimaryText: 'hsl(var(--onPrimaryText) / <alpha-value>)',

        neutralBg: 'hsl(var(--neutralBg) / <alpha-value>)',
        neutralText: 'hsl(var(--neutralText) / <alpha-value>)',
        onNeutralBg: 'hsl(var(--onNeutralBg) / <alpha-value>)',
        onNeutralText: 'hsl(var(--onNeutralText) / <alpha-value>)',

        ringColor: 'hsl(var(--ringColor) / <alpha-value>)',
        onRingColor: 'hsl(var(--onRingColor) / <alpha-value>)',

        // Suas tonalidades de 'primary'. No original era primary.DEFAULT: 'hsl(var(--primary))'
        // Ajustei para usar --color-primary-500 como DEFAULT, como é comum.
        primary: {
          DEFAULT: 'hsl(var(--color-primary-500) / <alpha-value>)',
          50: 'hsl(var(--color-primary-50) / <alpha-value>)',
          100: 'hsl(var(--color-primary-100) / <alpha-value>)',
          200: 'hsl(var(--color-primary-200) / <alpha-value>)',
          300: 'hsl(var(--color-primary-300) / <alpha-value>)',
          400: 'hsl(var(--color-primary-400) / <alpha-value>)',
          500: 'hsl(var(--color-primary-500) / <alpha-value>)',
          600: 'hsl(var(--color-primary-600) / <alpha-value>)',
          700: 'hsl(var(--color-primary-700) / <alpha-value>)',
          800: 'hsl(var(--color-primary-800) / <alpha-value>)',
          900: 'hsl(var(--color-primary-900) / <alpha-value>)',
          950: 'hsl(var(--color-primary-950) / <alpha-value>)',
        },
      },
      keyframes: { // Mantido do seu config original
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: '0', transform: 'translateX(2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: '0', transform: 'translateY(2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: '0', transform: 'translateX(-2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: { // Mantido do seu config original
        slideDownAndFade:
          'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade:
          'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade:
          'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms') // Mantido do seu config original
  ],
};
