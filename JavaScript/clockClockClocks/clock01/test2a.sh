#!/bin/sh

# Last update Tue Aug 15 17:32:57 JST 2023

# example: mosquitto_sub -t $TOPIC -h $BROKER | sh ./test2a.sh

NTPSERVER="ntp.nict.jp"
BROKER="broker.hivemq.com"
TOPIC="hohno/TS1"

echo "#KEYWORD          0              0      0                 0              0      --   T2-T1   T4-T3   T3-T2   tDiff   tDiff+NTPoffset"
while [ 1 ] ; do
  read v1 v2 v3 v4 v5
  x=$(date +%s.%3N)
  if [ "x$v1" = "xkeyword2" ]; then
    /bin/echo "$v1 $v2 $v3 $v4 $v5 $x "
  fi
done | awk '{printf "%s || %7.3lf %7.3lf %7.3lf %7.3lf %7.3lf\n", $0, $3-$2, $6-$5, $5-$3, (($5-$3)-($6-$2))/2, (($5-$3)-($6-$2))/2 + $4; fflush()}'

