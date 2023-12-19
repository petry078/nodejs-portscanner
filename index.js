import net from 'net'

const host = '127.0.0.1';

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

const startPort = 1; 
const endPort = 500; 
scanPorts(startPort, endPort);