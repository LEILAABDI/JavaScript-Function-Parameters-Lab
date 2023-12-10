
const { spyOn } = require("expect");

// functions.js
// functions.js
function introduction(name) {
    return `Hi, my name is ${name}.`; // Updated greeting
}

module.exports = {
    introduction,
};


// functions.js
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`; // Updated greeting
}

module.exports = {
    introductionWithLanguage,
};

// functions.js
function introductionWithLanguageOptional(name, language = 'JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`; // Updated greeting
}

module.exports = {
    introductionWithLanguageOptional,
};

module.exports = {
    introduction,
    introductionWithLanguage,
    introductionWithLanguageOptional,
};
