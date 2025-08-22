# pkmn-api-node

## Setup
### Make .env file
```
# データベース接続情報
DB_HOST=localhost
DB_USER=USER_NAME
DB_PASS=PASSWORD
DB_NAME=_pkmn

# 1ページあたりのリスト件数（任意）
LIST_PER_PAGE=10
```

## Start
※ Need MySQL(MariaDB) has started
```
node index.js
 or
npm start
```

## Access
### pokedex
- http://localhost:3000/api/pokedex/v1/zenkoku
- http://localhost:3000/api/pokedex/v1/names

### type
- http://localhost:3000/api/type/v1/types
- http://localhost:3000/api/type/v1/relations