#!/bin/sh

# Prev update: Tue Aug 15 17:31:17 JST 2023
# Last update: Wed Aug 16 10:45:31 JST 2023

TOPIC=${1:-"hohno/TS1"}
BROKER=${2:-"localhost"}
# BROKER=${2:-"broker.hivemq.com"}
NTPSERVER=${3:-"ntp.nict.jp"}

# example: mosquitto_sub -t $TOPIC -h $BROKER | sh ./test1a.sh 2> /dev/null | sed -u -e 's/(.)//g' -e 's/,//g' | mosquitto_pub -l -t $TOPIC -h $BROKER

z=0
p=0
i=180

while [ 1 ] ; do
  read v1 v2
  x=$(date +%s.%3N)
  if [ "x$v1" = "xkeyword1" ]; then
    /bin/echo -n "keyword2 (1)$v2, (2)$x, "
    q=$(date +%s)
    echo "debug: $( expr $p + $i ) -lt $q " 1>&2
    /bin/echo "p=$p q=$q i=$i" 1>&2
    if [ $( expr $p + $i ) -gt $q ]; then
      /bin/echo "*A*" 1>&2
    else
      /bin/echo "*B*" 1>&2
      p=$q
      # z=1.123;
      z=$(ntpdate -q "$NTPSERVER" 2> /dev/null 	|
          egrep -u 'time server'		| 
          tail -1 				|
          sed -u -e 's/^.*offset //' 		|
          awk '{print $1}'
      )
    fi
    /bin/echo -n "(3)$z, "
    /bin/echo -n "(4)"; date +%s.%3N
  fi
done | sed -u -e 's/  */ /g'

#| sed -u -e 's/(.)//g'  -e 's/,//g'

# | sed -u -e 's/  */ /g' -e 's/$/ /' -e 's/ /\t/g'
# | sed -u -e 's/  */ /g' -e 's/$/ /' -e 's/ /\t/g' -e 's/(.)//g' 
# | sed -u -e 's/(.)//g' -e 's/  */ /g' -e 's/$/ /' -e 's/ /\t/g'
