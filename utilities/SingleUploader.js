const multer = require('multer');
const path = require('path');
const createError = require('http-errors');

class SingleUploader {

    constructor(
        sub_folder_path,
        allow_file_type,
        file_size_limit,
        error_message
    ) {
        this.UPLOAD_FOLDER = `${__dirname}/../uploads/${sub_folder_path}`;
        this.storage = multer.diskStorage(
            {
                destination: (req, file, callback) => {
                    callback(null, this.UPLOAD_FOLDER);
                },
                filename: (req, file, callback) => {
                    const fileExt = path.extname(file.originalname);

                    const fileName = file.originalname
                        .replace(fileExt, '')
                        .toLowerCase()
                        .split(' ')
                        .join('-') +
                        '-' +
                        Date.now();

                    callback(null, fileName)

                }
            }
        )

        this.uploader = multer(
            {
                storage: this.storage,
                limits: {
                    fileSize: file_size_limit
                },
                fileFilter: (req, file, callback) => {
                    if (allow_file_type.includes(file)) {
                        callback(null, true);
                    } else {
                        callback(createError(error_message));
                    }
                }

            }
        )
        return this.uploader;
    }
}

module.exports = SingleUploader;