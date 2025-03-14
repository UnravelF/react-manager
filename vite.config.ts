/*
 * @Author: huanggaofeng hgfhgf1225@163.com
 * @Date: 2024-10-27 18:26:48
 * @LastEditors: huanggaofeng hgfhgf1225@163.com
 * @LastEditTime: 2025-03-14 23:22:31
 * @FilePath: /react-manager/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // 修改代理目标
        changeOrigin: true
      }
    }
  }
});
