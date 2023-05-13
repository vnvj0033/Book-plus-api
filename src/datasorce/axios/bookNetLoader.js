const kyoboLoadBook = require("./kyobo/loadBook")

module.exports = class BookNetLoader {
    loadBooksForPlatform(platform, size, callback) {
        if (platform == 'kyobo') {
            kyoboLoadBook("1", size, (result) => {
                callback(result)
            })
        }
    }
}