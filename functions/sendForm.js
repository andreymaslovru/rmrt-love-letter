const axios = require('axios')

const handler = (payloads) => {
    const url = process.env.API_URL

    try {
        const { data } = await axios.post(url, payloads)

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }
    } catch (error) {
        const { status, statusText, headers, data } = error.response
        return {
            statusCode: status,
            body: JSON.stringify({status, statusText, headers, data})
        }
    }
}

module.exports = { handler }