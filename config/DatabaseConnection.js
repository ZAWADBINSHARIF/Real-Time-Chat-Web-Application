const mongoose = require('mongoose');

class DatabaseConnection {

    static async connectDB() {
        try {
            await mongoose.connect(process.env.DATABASE_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
        } catch (error) {
            console.error({ message: error });
        }
    }
}

module.exports = DatabaseConnection;