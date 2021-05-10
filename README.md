# google-recaptcha-api
A simple library of captcha based on [Google reCAPTCHA Server API](https://developers.google.com/recaptcha/docs/verify) that supports Node.js.

## Install
### Using npm
```bash
npm install google-recaptcha-api --save
```

## Usage
### Node.js usage
You can use [google-recaptcha-v2](https://github.com/AmoyDreamer/google-recaptcha-v2) in browser.
```
const GoogleReCaptcha = require('google-recaptcha-api');
const captcha = new GoogleReCaptcha('your_server_captcha_key');
try {
    const res = await captcha.validate('captcha_token', 'user_ip');
    if (res.success) {
        //The response token is valid.
    } else {
        //The response token is invalid.
    }
} catch(e) {
    //Some exception, such as network error => request timeout.
}
```
You can get server_captcha_key from [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/).

## Method
new GoogleReCaptcha(secret, host) => Create an instance of google-recaptcha-api.
- secret => required, the shared key between your site and reCAPTCHA.
- host => optional, API hostname, default value is www.google.com. Specially, some areas require network proxying, such as China, just set www.recaptcha.net.

instance.validate(response, remoteip) => Using the following API to ensure the response token is valid. Return value is a promise, you can use [async-await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) synchronizing code.
- response => required, the user response token provided by the reCAPTCHA client-side integration on your site.
- remoteip => required, the user's IP address.

## License
google-recaptcha-api is [MIT licensed](https://github.com/AmoyDreamer/google-recaptcha-api/blob/master/LICENSE).
