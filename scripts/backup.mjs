import { createBackup, db } from '../lib/db.mjs';
try {console.log('Đã sao lưu:',await createBackup());} finally {db.close();}
