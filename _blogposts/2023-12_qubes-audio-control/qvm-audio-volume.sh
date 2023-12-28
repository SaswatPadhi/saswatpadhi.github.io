#!/usr/bin/env bash

raw_sink_inputs="$(pactl list sink-inputs)"
sink_inputs="$(paste -d';' <( printf '%s' "$raw_sink_inputs" | grep 'application.name =' | cut -d'"' -f2 ) \
                           <( printf '%s' "$raw_sink_inputs" | grep 'Sink Input #' | cut -d'#' -f2 ))"
volume="${1:-100}"
shift ; set -- "${@:-;}"

for pattern in "$@" ; do
  for target in $(echo "$sink_inputs" | grep "$pattern") ; do
    id="$(echo "$target" | cut -d';' -f2)"
    pactl set-sink-input-volume $id $volume%
  done
done