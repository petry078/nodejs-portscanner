import net from 'net';
import promptSync from 'prompt-sync';

const prompt = promptSync();

let host = prompt('Host: ');

function scanPort(port) {
  const socket = new net.Socket();

  socket.connect(port, host, () => {
    console.log(`Port ${port} is open`);
    socket.destroy();
  });

  socket.on('error', (err) => {
    console.log(`Port ${port} is closed`);
  });
}

function scanPorts(startPort, endPort) {
  console.log(`Scanning ports from ${startPort} to ${endPort} on ${host}`);
  for (let port = startPort; port <= endPort; port++) {
    scanPort(port);
  }
}

let startPort = Number(prompt('First port to scan: '));
let endPort = Number(prompt('Last port to scan: '));
scanPorts(startPort, endPort);
