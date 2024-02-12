const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    sendPassword: (password) => ipcRenderer.send('send-password', password)
});
