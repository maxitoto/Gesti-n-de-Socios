#!/bin/bash

(cd client && npm run dev) &

(cd server && node server.js) &

wait

