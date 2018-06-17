exports.handler = (event, context, callback) => {
  //if (event.body) {
    //const apiKey = process.env.MG_TOKEN
    //const domain = process.env.MG_DOMAIN
    //const mailgun = require('mailgun-js')({apiKey, domain})
    //const report = JSON.parse(event.body)['csp-report']

    //const blockedUri = report['blocked-uri']
    //if (
      //blockedUri === 'data' ||
      //blockedUri === '' ||
      //blockedUri === 'eval' ||
      //blockedUri === 'self'
    //) {
      //return callback(null, {
        //statusCode: 200,
        //body: `Didnt send report, blocked URI (${blockedUri})is not helpful`
      //})
    //}

    //var data = {
      //from: 'CSP Report Bot <csp@stefanjudis.com>',
      //to: 'ste@gmail.com',
      //subject: `Blocked resource (${blockedUri}) on ${report['document-uri']}`,
      //text: JSON.stringify(report, null, 2)
    //}

    //mailgun.messages().send(data, (error, body) => {
      //if (error) {
        //return callback(error)
      //}

      //callback(null, {
        //statusCode: 200,
        //body: 'Sent'
      //})
    //})
  //} else {
    callback(null, {
      statusCode: 400,
      body: 'No report, hmm?'
    })
  //}
}
