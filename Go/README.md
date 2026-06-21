# tZone--ProgrammingPG/Go

A test zone for the various programming languages (Go Lang)

    ./Go
     ├──  README.md
     ├──  README.pdf
     ├──  go-hello/
     │   ├──  app
     │   ├──  go.mod
     │   └──  main.go
     ├──  go-mqtt-sub/
     │   ├──  00README.txt
     │   ├──  go.mod
     │   ├──  go.sum
     │   └──  mqttsub.go
     └──  go-tcp-echo/
         ├──  go.mod
         └──  server.go
     
     4 directories, 11 files (Fri Apr 10 04:39:23 JST 2026)


## Go言語 開発クイックリファレンス
このディレクトリ配下の各プロジェクトを再開・実行するための基本操作です。

### 1. プログラムの実行
各ディレクトリに移動し、メインのソースファイルを指定して実行します。
```bash
# 例: go-hello を実行する場合
cd go-hello
go run main.go
```

### 2. バイナリのビルド
実行ファイル（バイナリ）を作成して直接実行する場合に使用します。
```bash
go build -o app
./app
```

### 3. 依存関係の整理
ライブラリの不足や、未使用の依存関係を最新の状態に整理します。
```bash
go mod tidy
```

### 4. 新規プロジェクトの作成
新しく練習用のディレクトリを追加する際の手順です。
```bash
mkdir <new-project>
cd <new-project>
go mod init <new-project>
touch main.go
```




