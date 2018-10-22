INSERT INTO houses 
(name, address, city, state, zip, img, mortgage, rent, user_id)
VALUES
(${name}, ${address}, ${city}, ${state}, ${zip}, ${img}, ${mortgage}, ${rent}, ${id}) returning *;