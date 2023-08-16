#!/bin/sh

# Last udpate: Tue Aug 15 17:30:58 JST 2023

TOPIC=${1:-"hohno/TS1"}
BROKER=${2-"localhost"}

# example: sh ./test0a.sh | mosquitto_pub -l -t $TOPIC -h $BROKER

while [ 1 ]
do
  (LANG=C LC_ALL=C date 1>&2)
  echo "keyword1 $(date +%s.%3N)"
  sleep 2
done
# | mosquitto_pub -l -t $TOPIC -h $BROKER

exit 0
