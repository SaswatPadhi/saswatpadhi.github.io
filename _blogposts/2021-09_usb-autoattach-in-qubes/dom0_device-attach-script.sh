#!/usr/bin/env bash

# Exit immediately if any of the following commands fail
set -e

# Expect exactly one argument -- the service argument
[ "$#" -eq 1 ]

# Unpack service argument and expect exactly 2 strings
ARG=($(sed 's;+__+; ;g' <<< $1))
[ "${#ARG[@]}" -eq 2 ]

# Make sure we have a remote VM name from Qrexec
[ -n "$QREXEC_REMOTE_DOMAIN" ]

# Start the target VM, if needed
qvm-start --skip-if-running "${ARG[0]}"

# Attach the target device from remote VM to target VM
qvm-block attach "${ARG[0]}" "${QREXEC_REMOTE_DOMAIN}:${ARG[1]}"