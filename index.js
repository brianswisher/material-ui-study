require('babel/register');

var spawn = require('child_process').spawn;

ls = spawn('./node_modules/babel/bin/babel-node.js', ['./server/app']);

ls.on('error', function (err) {
  console.log('ls error', err);
});

ls.stdout.on('data', function (data) {
  console.log('stdout: ' + data);
});

ls.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});

ls.on('close', function (code) {
  console.log('child process exited with code ' + code);
});
