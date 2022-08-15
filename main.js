
// *code for Opening a new window*
const {app, BrowserWindow} = require('electron');
 let mainWindow = null;

 app.on('ready', () => {
mainWindow = new BrowserWindow();
mainWindow.webContents.loadFile('index.html');
mainWindow.setMenuBarVisibility(false);
 });

 app.on('window-all-closed', () =>{
 if(process.platform !== 'darwin'){
     app.quit();

 }
 



 });