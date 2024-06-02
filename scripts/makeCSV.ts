
const collection = require('./county-collection');
const Airtable = require('airtable');
const airtable = new Airtable({
    apiKey: 'patFAf7Pj619eLPuY.a18bfc2e4d296f107738fc7067e80506eb8f0d9e89583186df5d9e1ee734ab7b',
});
const ffs = require('fs');
const ppath = require('path');

const createCSV = async () => {
    const header = Object.keys(collection[0]).join(',');
    const csv = collection.map((record: Record<string, any>) => {
        return Object.values(record).join(',');
    }).join('\n');
    const data = [header, csv].join('\n');

    ffs.writeFileSync(ppath.join(__dirname, 'collection.csv'), data);
}

createCSV();