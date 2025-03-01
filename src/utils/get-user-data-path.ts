import path from 'path';
import process from 'process';
import { Settings } from '../settings';

export function getUserDataPath(settings: Settings): string { // {{{
  const globalStoragePath = process.env.HOME ? path.resolve(process.env.HOME, '.theia-ide') : path.resolve(settings.globalStorageUri.fsPath, '.theia-ide');
  return globalStoragePath;
} // }}}
