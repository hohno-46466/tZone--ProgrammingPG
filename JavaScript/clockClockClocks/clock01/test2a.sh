#!/bin/sh

# Last update Tue Aug 15 17:32:57 JST 2023

TOPIC=${1:-"hohno/TS1"}
BROKER=${2:-"broker.hivemq.com"}
NTPSERVER=${3:-"ntp.nict.jp"}

# example: mosquitto_sub -t $TOPIC -h $BROKER | sh ./test2a.sh

echo "#KEYWORD         T1             T2     NTPoffset         T3             T4      --   T2-T1   T4-T3   T3-T2 NTPoffset tDiff  tDiff+NTPoffset"
while [ 1 ] ; do
  read v1 v2 v3 v4 v5
  x=$(date +%s.%3N)
  if [ "x$v1" = "xkeyword2" ]; then
    /bin/echo "$v1 $v2 $v3 $v4 $v5 $x "
  fi
done | awk '{printf "%s || %7.3lf %7.3lf %7.3lf %7.3lf %7.3lf %7.3lf\n", $0, $3-$2, $6-$5, $5-$3, $4, (($5-$3)-($6-$2))/2, (($5-$3)-($6-$2))/2 + $4; fflush()}'

# Note: Since $4(NTPoffset) above is the same value of the result of the ntpddate
#       (if the value is negative, the local clock(T2 and T3) is ahed of UTC),
#       and tDiff is positive if local clock is ahead of remote clock (T1 and T4),
#	UTC = (localClock(T2/T3) + NTPoffset)
