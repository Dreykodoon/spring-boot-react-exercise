INSERT INTO content (id, name, title, description, type, mimetype, url, parent_id) VALUES
    ('1', 'asset 1', 'asset title 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
     'asset', 'pdf', '/asset 1', null),
    ('2', 'document 2', 'document title 2', 'Lorem ipsum dolor', 'document', null, null, null),
    ('3', 'asset 3', 'asset title 3', 'desc 3', 'asset', 'jpg', '/asset 3', null),
    ('4', 'asset 4', 'asset title 4', 'desc 4', 'asset', 'pdf', '/document 2/asset 4', 2),
    ('5', 'document 5 name', 'document title 5', 'interesting stuff', 'document', null, null, 2),
    ('6', 'really really really long document 6 name', 'document title 6', '', 'document', null, null, 2),
    ('7', 'document 7', 'document title 7', 'another one', 'document', null, null, null),
    ('8', 'asset 8', 'really really really long asset title 8', 'desc 8', 'asset', 'jpg', '/document 7/asset 8', 7);