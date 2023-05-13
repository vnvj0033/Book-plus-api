const kyoboLoadBook = require("./kyobo/loadBook")

exports.module = class BookNetLoader {
    loadBooksForPlatform(platform, size) {
        if (platform == "kyobo") {
            kyoboLoadBook("1", "20", (result) => {
                console.log(result)
                return result
            })
        }
    }
}