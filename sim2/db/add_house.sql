INSERT INTO houses 
(name, address, city, state, zip, img, mortgage, rent)
VALUES
(${name}, ${address}, ${city}, ${state}, ${zip}, ${img}, ${mortgage}, ${rent}) returning *;