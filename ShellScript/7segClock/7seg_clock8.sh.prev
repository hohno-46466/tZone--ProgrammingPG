#!/bin/bash

# First version: 2026-06-30(Tue) 23:53 JST / 2026-06-30(Tue) 14:53 UTC by @hohno_at_MonkKB & Gemini AI

# 終了時（Ctrl+C）にカーソルを戻して画面をクリア
trap 'printf "\e[?25h"; clear; exit' INT TERM

# 画面クリアとカーソル非表示
clear
printf "\e[?25l"

# すべての文字を「完全に6マス（5マスAA＋隙間1マス）」の等幅に固定
declare -a N0=(" ###  " "#   # " "#   # " "#   # " " ###  ")
declare -a N1=("  #   " " ##   " "  #   " "  #   " " ###  ")
declare -a N2=(" ###  " "    # " " ###  " "#     " " ###  ")
declare -a N3=(" ###  " "    # " " ###  " "    # " " ###  ")
declare -a N4=(" #  # " "#   # " " #####" "    # " "    # ")
declare -a N5=(" #####" "#     " " #### " "    # " "####  ")
declare -a N6=(" ###  " "#     " " #### " "#   # " " ###  ")
declare -a N7=(" #####" "    # " "   #  " "  #   " "  #   ")
declare -a N8=(" ###  " "#   # " " ###  " "#   # " " ###  ")
declare -a N9=(" ###  " "#   # " " #### " "    # " " ###  ")
declare -a N_COLON=("      " "  #   " "      " "  #   " "      ")

get_line() {
    local char=$1
    local line_idx=$2
    if [ "$char" = ":" ]; then
        echo "${N_COLON[$line_idx]}"
    else
        local var_name="N$char[$line_idx]"
        echo "${!var_name}"
    fi
}

while true; do
    # ターミナルのサイズ取得
    LINES=$(tput lines)
    COLS=$(tput cols)

    # 時間データの取得
    DATE_STR=$(LC_TIME=C date "+%Y-%m-%d (%a)")
    HMS_STR=$(date "+%H:%M:%S")

    # 全体の幅：6マス × 8文字 = 48マス
    TOTAL_HEIGHT=7 
    TOTAL_WIDTH=48  

    START_ROW=$(((LINES - TOTAL_HEIGHT) / 2))
    START_COL=$(((COLS - TOTAL_WIDTH) / 2))

    # 1. 年月日の描画
    DATE_COL=$(( START_COL + (TOTAL_WIDTH - ${#DATE_STR}) / 2 ))
    printf "\e[%d;%dH\e[K%s" "$START_ROW" "$DATE_COL" "$DATE_STR"

    # 2. 7セグ時分秒の描画
    for i in {0..4}; do
        LINE_BUF=""
        for (( j=0; j<${#HMS_STR}; j++ )); do
            CHAR="${HMS_STR:$j:1}"
            PART=$(get_line "$CHAR" "$i")
            LINE_BUF="${LINE_BUF}${PART}"
        done

        TARGET_ROW=$((START_ROW + 2 + i))
        # 【ここが修正の肝】
        # カーソル移動「\e[%d;%dH」と行末クリア「\e[K」だけをエスケープシーケンスとして処理し、
        # 組み立てた文字（LINE_BUF）は純粋な文字列「%s」として出力します。
        # これにより、MacとLinuxの仕様差による文字ズレの可能性を根絶します。
        printf "\e[%d;%dH\e[K%s" "$TARGET_ROW" "$START_COL" "$LINE_BUF"
    done

    sleep 0.1
done
