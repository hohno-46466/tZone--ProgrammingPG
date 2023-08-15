#!/bin/sh

# Last udpate: Tue Aug 15 17:30:58 JST 2023

# example: sh ./test0a.sh | mosquitto_pub -l -t $TOPIC -h $BROKER

TOPIC="hohno/TS1"
BROKER="localhost"

while [ 1 ]
do
  (LANG=C LC_ALL=C date 1>&2)
  echo "keyword1 $(date +%s.%3N)"
  sleep 2
done
# | mosquitto_pub -l -t $TOPIC -h $BROKER

exit 0
