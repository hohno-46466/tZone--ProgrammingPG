#!/bin/bash

# 終了時（Ctrl+C）にカーソルを再表示し、画面をクリアする設定
trap 'printf "\e[?25h"; clear; exit' INT TERM

# 画面をクリアし、カーソルを非表示にする
clear
printf "\e[?25h" # 一度リセット
printf "\e[?25l" # カーソル非表示

while true; do
    # 現在のターミナルの行数(lines)と列数(cols)を取得
    LINES=$(tput lines)
    COLS=$(tput cols)

    # 【互換性修正】MacとLinuxで1秒未満（0.1秒桁）を安全に取得
    if [[ "$OSTYPE" == "darwin"* ]]; then
        TIME_STR=$(date "+%Y-%m-%d %H:%M:%S")$(date "+.%1N" 2>/dev/null || echo ".0")
    else
        TIME_STR=$(date "+%Y-%m-%d %H:%M:%S.%1N")
    fi

    # 文字列の長さを取得（すべて半角なのでMacでも文字数＝バイト数で安全）
    STR_LEN=${#TIME_STR}

    # 中央の座標を計算
    TARGET_ROW=$((LINES / 2))
    TARGET_COL=$(((COLS - STR_LEN) / 2))

    # カーソルを中央に移動して時刻を描画（%s で安全に出力）
    printf "\e[%d;%dH\e[K%s" "$TARGET_ROW" "$TARGET_COL" "$TIME_STR"

    # 0.05秒（50ミリ秒）待機してループ
    sleep 0.05
done