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

    # 【変更】LC_TIME=C と %a を追加し、Mac/Linux双方で安全にミリ秒まで結合
    if [[ "$OSTYPE" == "darwin"* ]]; then
        TIME_STR=$(LC_TIME=C date "+%Y-%m-%d (%a) %H:%M:%S")$(date "+.%1N" 2>/dev/null || echo ".0")
    else
        TIME_STR=$(LC_TIME=C date "+%Y-%m-%d (%a) %H:%M:%S.%1N")
    fi

    # 文字列の長さを取得（すべて半角なので安全に計算可能）
    STR_LEN=${#TIME_STR}

    # 中央の座標を計算
    TARGET_ROW=$((LINES / 2))
    TARGET_COL=$(((COLS - STR_LEN) / 2))

    # カーソルを中央に移動して時刻を描画
    printf "\e[%d;%dH\e[K%s" "$TARGET_ROW" "$TARGET_COL" "$TIME_STR"

    # 0.05秒（50ミリ秒）待機してループ
    sleep 0.05
done