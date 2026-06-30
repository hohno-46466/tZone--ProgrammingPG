#!/bin/bash

# 終了時（Ctrl+C）にカーソルを再表示し、画面をクリアする設定
trap 'echo -e "\e[?25h"; clear; exit' INT TERM

# 画面をクリアし、カーソルを非表示にする
clear
echo -e "\e[?25h" # 一度リセット
echo -e "\e[?25l" # カーソル非表示

while true; do
    # 現在のターミナルの行数(lines)と列数(cols)を取得
    LINES=$(tput lines)
    COLS=$(tput cols)

    # 表示する文字列を生成（例: 2026-06-30 21:05:23.4）
    # 秒未満（1桁）まで取得して同期のズレを視認しやすくする
    TIME_STR=$(date "+%Y-%m-%d %H:%M:%S.%1N")

    # 文字列の長さを取得
    STR_LEN=${#TIME_STR}

    # 中央の座標を計算
    TARGET_ROW=$((LINES / 2))
    TARGET_COL=$(((COLS - STR_LEN) / 2))

    # カーソルを中央に移動して時刻を描画（\e[H は移動、\e[K は行末までクリア）
    # ターミナルサイズが変更されても追従するように毎回位置を計算
    printf "\e[%d;%dH\e[K%s" "$TARGET_ROW" "$TARGET_COL" "$TIME_STR"

    # 0.05秒（50ミリ秒）待機してループ（busy loopを防止しつつ、秒の切り替わりを滑らかにする）
    sleep 0.05
done