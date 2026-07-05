const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');
app.whenReady().then(async () => {
  try {
    const win = new BrowserWindow({ width: 412, height: 915, show: false });
    await win.loadFile(path.join(__dirname, 'page.html'));
    await new Promise(r => setTimeout(r, 900));
    const closed = await win.webContents.executeJavaScript('__measure()');
    fs.writeFileSync(path.join(__dirname, 'debug.json'), JSON.stringify({ d: await win.webContents.executeJavaScript('__debug()'), row: await win.webContents.executeJavaScript('__rowDebug()') }, null, 1));
    fs.writeFileSync(path.join(__dirname, 'measure-closed.json'), JSON.stringify(closed, null, 1));
    fs.writeFileSync(path.join(__dirname, 'phone-closed.png'), (await win.webContents.capturePage()).toPNG());
    await win.webContents.executeJavaScript('__openSheet()');
    await new Promise(r => setTimeout(r, 400));
    const open = await win.webContents.executeJavaScript('__measure()');
    fs.writeFileSync(path.join(__dirname, 'sheet-debug.json'), JSON.stringify(await win.webContents.executeJavaScript('__sheetDebug()'), null, 1));
    fs.writeFileSync(path.join(__dirname, 'measure-open.json'), JSON.stringify(open, null, 1));
    fs.writeFileSync(path.join(__dirname, 'phone-sheet.png'), (await win.webContents.capturePage()).toPNG());
  } catch (e) {
    fs.writeFileSync(path.join(__dirname, 'error.txt'), String(e && e.stack || e));
  }
  app.exit(0);
});
