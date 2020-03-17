 const PROFILES = require('./mock-data/profiles-mock')

//class declration

class ProfileService {
    constructor() {

    }
    findAll() {
        return PROFILES
    }
    save(profile) {

        return PROFILES.concat(profile);
    }
}
module.exports = ProfileService;