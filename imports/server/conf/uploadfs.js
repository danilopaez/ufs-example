import {UploadFS} from 'meteor/jalik:ufs';

// Add custom MIME types
UploadFS.addMimeType('kml', 'application/vnd.google-earth.kml+xml');
UploadFS.addMimeType('kmz', 'application/vnd.google-earth.kmz');

// Set default store permissions
UploadFS.config.defaultStorePermissions = new UploadFS.StorePermissions({
    insert: function (userId, file) {
        return true;
    },
    remove: function (userId, file) {
        return !file.userId || userId === file.userId;
    },
    update: function (userId, file) {
        return !file.userId || userId === file.userId;
    },
});