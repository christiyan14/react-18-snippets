'use strict';
import { window } from 'vscode';

export function activate() {
  window.showInformationMessage('Thank you for using my extension. [Kristiyan Velkov]');
}

export function deactivate() { }