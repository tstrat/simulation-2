DELETE FROM houses
WHERE id = ${id} returning *;