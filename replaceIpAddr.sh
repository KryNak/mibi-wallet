#!/bin/bash

IP=$(ipconfig getifaddr en0)
sed -i '' -e "/REACT_APP_BACKEND_URL=/ s/=.*/=http:\/\/$IP:8080/" .env