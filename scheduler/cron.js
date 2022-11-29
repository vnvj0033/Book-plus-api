const cron = require('node-cron');

module.exports = function startCron() {

    const task = cron.schedule('0 0 0 * *', function () {
        console.log('매 분 마다 작업 실행');
    }, {
        scheduled: false
    });

    task.start();
}
