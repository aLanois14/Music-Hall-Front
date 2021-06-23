export const APICATALOG = {
	"refresh-token":{
        "url": "Authentication/RefreshToken"
    },
    //LOGIN
    "login" : {
        "url": "Authentication/Login"
    },
    //REGISTER
    "validate-email-availability" : {
        "url": "Authentication/ValidateEmailAvailability/{{email}}"
    },  
    "register" : {
        "url": "Authentication/Register"
    },
    "confirm-email" : {
        "url": "Authentication/ConfirmEmail"
    },
    //PUBLICATION
    "publication-new" : {
        "url": "Publication/NewPublication"
    },
    "publication-get-all" : {
        "url": "Publication/GetAll"
    }
}

export const ENVS = {
    "DEV" : "https://localhost:44374/api",
    "PREPROD" : "https://fairwai.sixmon.net/api",
    "PROD" : "https://fairwai.sixmon.net/api"
}

export const SIGNALR = {
    "DEV" : "https://localhost:44374/",
    "PREPROD" : "https://fairwai.sixmon.net/",
    "PROD" : "https://fairwai.sixmon.net/"
}

export const BASE = {
    "DEV" : "http://localhost:8100",
    "PREPROD" : "https://fairwai.sixmon.net",
    "PROD" : "https://fairwai.sixmon.net"
}