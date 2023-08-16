#!/bin/sh

# Last update: Tue Aug 15 17:31:17 JST 2023

# example: mosquitto_sub -t $TOPIC -h $BROKER | sh ./test1a.sh | mosquitto_pub -l -t $TOPIC -h $BROKER

NTPSERVER="ntp.nict.jp"
# BROKER="broker.hivemq.com"
BROKER="localhost"
TOPIC="hohno/TS1"

while [ 1 ] ; do
  read v1 v2
  x=$(date +%s.%3N)
  if [ "x$v1" = "xkeyword1" ]; then
    /bin/echo -n "keyword2 (1)$v2 (2)$x "
#    /bin/echo -n "(3)0.05 "
    /bin/echo -n "$(ntpdate -q -d "$NTPSERVER" 2> /dev/null 	|
    egrep -u 'adjust time server'			| 
    tail -1 |
    sed -u -e 's/^.*offset //' |
    awk '{printf "(3)%s ", $1;fflush()}') "
    date +%s.%3N
  fi
done | sed -u -e 's/(.)//g' -e 's/  */ /g'

# | sed -u -e 's/  */ /g' -e 's/$/ /' -e 's/ /\t/g'
# | sed -u -e 's/  */ /g' -e 's/$/ /' -e 's/ /\t/g' -e 's/(.)//g' 
# | sed -u -e 's/(.)//g' -e 's/  */ /g' -e 's/$/ /' -e 's/ /\t/g'
