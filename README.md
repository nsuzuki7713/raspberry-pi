# Raspberry Piで動かすプログラム

## ネットワークのスピード計測

実行

```bash
# ビルド
$ yarn tsc
# バックグラウンドで実行
$ forever start dist/src/index.js 
# プロセス確認
$ forever list
# 停止
$ forever stop (listで確認したuid)
```

https://qiita.com/n_morioka/items/837967c0e2711198bd74