const SingleUploader = require('../../../utilities/SingleUploader');

class AvatarUpload{

    constructor(req, res, next) {
        this.upload = SingleUploader(
            'avatar',
            ['image/jpeg', 'image/jpg', 'image/png'],
            1000000,
            "Only .jpg, .jpeg or png format allowed"
        )
        
        this.upload.any()(req, res, err => {
            if (err) {
                res.status(500).json(
                    {
                        errors: {
                            avatar: err.message
                        }
                    }
                )
            } else {
                next();
            }
        })
    }


    
}

module.exports = AvatarUpload;