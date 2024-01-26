const cron = require('node-cron');
const {} = require('../../services');
function scheduleCrons(){
    cron.schedule('*/30 * * * *', async () => {
        await BookingService.cancelOldBookings();
    });
}

module.exports = scheduleCrons;