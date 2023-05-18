const kyoboLoadBook = require("./kyobo/loadBook")
const yes24LoadBook = require("./yes24/loadBook")

module.exports = class BookNetLoader {
    loadBooksForPlatform(platform, size, callback) {
        if (platform == 'kyobo') {
            kyoboLoadBook("1", size, (result) => {
                callback(result)
            })
        } else if (platform == 'yes24'){
            yes24LoadBook("1",size, (result) => {
                callback(result)
            })
        }
    }
}