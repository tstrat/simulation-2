SELECT h.name, h.address, h.city, h.state, h.zip, h.img, h.mortgage, h.rent 
FROM houses h
JOIN users 
ON users.id = h.user_id
WHERE users.id = ${id};