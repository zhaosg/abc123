#!/usr/bin/env bash
cp release-signing.properties ./platforms/android
ionic build android --prod --release
