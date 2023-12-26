
## step1
create firebase realtime database
save key.json -> serviceAccountKey.json
update databaseURL in firebase.js

## step2
```
npm install
node watching.js
node index.js
```

## step3
start testing by restAPI


### add message
```
curl --location 'http://localhost:7783/message' \
--header 'Content-Type: application/json' \
--data '{
    "data": "3323232"
}'
```

### update message
```
curl --location --request PUT 'http://localhost:7783/message' \
--header 'Content-Type: application/json' \
--data '{
    "id": "-Nm_ImNLkxgMY3pa8fq9",
    "data": "updateword"
}'
```

### remove message
```
curl --location --request DELETE 'http://localhost:7783/message' \
--header 'Content-Type: application/json' \
--data '{
    "id": "-Nm_HdytnBHzfbwjzdy5"
}'
```
