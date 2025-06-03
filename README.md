# AlgoCrack

## Introduction
AlgoCrack 是一個仿造 Leetcode 的網站，用於學習大型系統設計。

## Feature
TODO

## Architecture
![image](https://github.com/emberow/blog-image/blob/main/BlogImg/AlgoCrack%E6%9E%B6%E6%A7%8B.png?raw=true)

| 服務名稱 | 功能|
|---|----|
|problem-service|	CRUD 題目。|
|solution-service|	使用者能夠上傳解法、取得他人分享的解法、詢問 LLM 解法。|
|submission-service|	管理提交記錄、狀態、統計資料。|
|code-runner-service|	使用 K8s job 執行 user 上傳的程式碼，執行完關閉。|
|algo-crack-backend|	聚合所有服務提供 API 給前端。|
|AlgoCrack Frontend| 服務前端|
|gateway| 使用 k8s ingress 來做 API gateway，並串接 google Oauth2|
|redis|用於快取|
|postgres|用於持久化資料|
|chatgpt|加上適當的 prompt，來詢問 LLM 解題流程，也可以換其他 LLM|
|Google Oauth2|用於做登入驗證|

## Project Management
https://github.com/orgs/AlgoCrack/projects/5

## run Project
```bash
# use node v20
$ cd algo-crack-backend
$ yarn install
$ yarn run build
$ yarn run start
```

## CLI Lint check
```bash
yarn run lint
```

## unit test
``` bash
yarn run test
```

## swagger
[http://localhost:3000/api](http://localhost:3000/api)
