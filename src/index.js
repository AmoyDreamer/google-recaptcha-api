"use strict"
/**
 * @desc A simple library of captcha based on Google reCAPTCHA Server API that supports node.js.
 * @author Allen Liu
 * @document https://developers.google.com/recaptcha/docs/verify
 */
const request = require('flexible-axios')

class GoogleReCaptcha {
    //initialize Google reCAPTCHA Server config.
    constructor(secret, host) {
        this._secret = secret//The shared key between your site and reCAPTCHA.(required)
        this._host = host || 'www.google.com'//api hostname, default use www.google.com. Specially, some areas require network proxying, such as China, just set host: www.recaptcha.net.(optional)
    }
    /**
     * @desc Using the following API to ensure the response token is valid.
     * @param response The user response token provided by the reCAPTCHA client-side integration on your site.(required)
     * @param remoteip The user's IP address.(required)
     */
    async validate(response, remoteip) {
        const url = `https://${this._host}/recaptcha/api/siteverify?secret=${this._secret}&response=${response}&remoteip=${remoteip}`
        try {
            return await request.get(url)
        } catch(e) {
            throw new Error('google-recaptcha-api: network error, please try again later.')
        }
    }
}
module.exports = GoogleReCaptcha
