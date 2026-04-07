import { test, expect } from '@playwright/test';

test('Validación de flujo completo: Login, Tema y Logout', async ({ page }) => {
  // 1. Ir al login
  await page.goto('http://localhost:4200/login');
  
  // 2. Proceso de autenticación
  await page.getByRole('textbox', { name: 'Correo' }).fill('admin@gmail.com');
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('12');
  await page.getByRole('button', { name: 'Ingresar' }).click();

  // --- VALIDACIÓN DE ENTRADA ---
  // Verifica que llegamos al panel administrativo
  await expect(page).toHaveURL(/.*usuarios/);

  // 3. Probar el cambio de tema (Sol/Luna)
  await page.getByRole('button', { name: '☀️ 🌙' }).click();

  // 4. Cerrar sesión de forma precisa (usando el banner que arreglamos)
  await page.getByRole('banner').getByRole('button', { name: 'Cerrar Sesión' }).click();

  // --- VALIDACIÓN DE SALIDA ---
  // Verifica que el sistema nos expulsó correctamente al login
  await expect(page).toHaveURL(/.*login/);
});