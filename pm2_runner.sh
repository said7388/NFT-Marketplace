#!/bin/bash
if ! type pm2 > /dev/null
then
  sudo npm install -g pm2 && pm2 start npm --name nextjs-app -- run start -- -p 3000
else
  pm2 restart nextjs-app
fi
