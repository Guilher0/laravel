// vite.config.js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
// import tailwindcss from '@tailwindcss/vite'; // REMOVA OU COMENTE

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        tailwindcss(), // REMOVA OU COMENTE
    ],
});
