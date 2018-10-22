INSERT INTO users (name, password)
VALUES (${username}, ${password}) returning *;