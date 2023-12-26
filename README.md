
# step1
```
npm install
node watching.js
node index.js
```

# step2
start testing by restAPI


# add message
```
curl --location 'http://localhost:7783/message' \
--header 'Content-Type: application/json' \
--data '{
    "data": "123123"
}'
```

# update message
```
curl --location --request PUT 'http://localhost:7783/message' \
--header 'Content-Type: application/json' \
--data '{
    "id": "-Nm_ImNLkxgMY3pa8fq9",
    "data": "updateword"
}'
```

# remove message
```
curl --location --request DELETE 'http://localhost:7783/message' \
--header 'Content-Type: application/json' \
--data '{
    "id": "-Nm_HdytnBHzfbwjzdy5"
}'
```
