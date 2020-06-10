FROM node:latest

EXPOSE 19000
EXPOSE 19001

ENV ADB_IP="192.168.1.12"
ENV REACT_NATIVE_PACKAGER_HOSTNAME="192.168.1.28"

RUN apt-get update && \
  apt-get install -y android-tools-adb

WORKDIR /app

COPY package*.json app.json ./

CMD adb connect $ADB_IP && \
  npm run android