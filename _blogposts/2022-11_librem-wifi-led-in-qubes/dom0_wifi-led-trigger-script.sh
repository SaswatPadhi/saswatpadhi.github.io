#!/usr/bin/env bash

# Exit immediately if any of the following commands fail
set -e

# Expect exactly one argument -- the service argument
[ "$#" -eq 1 ]

# Since this is an "airplane mode" indicator,
# we must invert the status code to set the brightness
if [ "$1" == "up" ]; then
  echo 0 > /sys/class/leds/librem_ec\:airplane/brightness
elif [ "$1" == "down" ]; then
  echo 1 > /sys/class/leds/librem_ec\:airplane/brightness
fi