import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'

export default defineConfig({
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
        },
        {
            file: 'dist/index.esm.js',
            format: 'es',
        },
    ],
    plugins: [typescript()],
})