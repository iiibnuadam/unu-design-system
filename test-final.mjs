// Test final build
try {
  console.log('Testing ESM import...');
  const designSystem = await import('./dist/index.js');
  console.log('✅ ES Module import successful');
  console.log('📦 Sample exports:', Object.keys(designSystem).slice(0, 10));
  console.log('📊 Total exports:', Object.keys(designSystem).length);
} catch (error) {
  console.error('❌ ES Module import failed:', error.message);
}

// Test CJS require
try {
  console.log('\nTesting CJS require...');
  const { createRequire } = await import('module');
  const require = createRequire(import.meta.url);
  const unu = require('./dist/index.cjs');
  console.log('✅ CJS require successful');
  console.log('📦 Sample exports:', Object.keys(unu).slice(0, 10));
  console.log('📊 Total exports:', Object.keys(unu).length);
} catch (error) {
  console.error('❌ CJS require failed:', error.message);
}
