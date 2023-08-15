#!/bin/sh

# Last update: Tue Aug 15 17:31:17 JST 2023

# example: mosquitto_sub -t $TOPIC -h $BROKER | sh ./test1a.sh | mosquitto_pub -l -t $TOPIC -h $BROKER

NTPSERVER="ntp.nict.jp"
# BROKER="broker.hivemq.com"
BROKER="localhost"
TOPIC="hohno/TS1"

z=0
p=0
i=30

while [ 1 ] ; do
  read v1 v2
  x=$(date +%s.%3N)
  if [ "x$v1" = "xkeyword1" ]; then
    /bin/echo -n "keyword2 (1)$v2 (2)$x "
    q=$(date +%s)
    echo "debug: $( expr $p + $i ) -lt $q " 1>&2
    /bin/echo "p=$p q=$q i=$i" 1>&2
    if [ $( expr $p + $i ) -gt $q ]; then
      /bin/echo "*A*" 1>&2
    else
      p=$q
      # z=1.123;
      z=$(ntpdate -q -d "$NTPSERVER" 2> /dev/null 	|
          egrep -u 'adjust time server'			| 
          tail -1 |
          sed -u -e 's/^.*offset //' |
          awk '{print $1}'
      )
      /bin/echo "*B*" 1>&2
    fi
    /bin/echo -n "(3)$z "
    date +%s.%3N
  fi
done | sed -u -e 's/(.)//g' -e 's/  */ /g'

# | sed -u -e 's/  */ /g' -e 's/$/ /' -e 's/ /\t/g'
# | sed -u -e 's/  */ /g' -e 's/$/ /' -e 's/ /\t/g' -e 's/(.)//g' 
# | sed -u -e 's/(.)//g' -e 's/  */ /g' -e 's/$/ /' -e 's/ /\t/g'
