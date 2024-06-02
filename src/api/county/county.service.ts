import { getAirtableClient } from '../../lib/airtable';
import { ICounty } from './county.interfaces';
import { tableRecordToCounty } from './county.mappers';

export class CountyService {
	public static async getCounties(): Promise<Array<ICounty>> {
		const airtableClient = getAirtableClient();
		const countyTable = airtableClient('Counties');
		const records = await countyTable.select({
			maxRecords: 100,
		});
		const counties: Array<ICounty> = [];
		return new Promise((resolve, reject) => {
			records.eachPage(
				function page(records, fetchNextPage) {
					records.forEach(function (record) {
						const county = tableRecordToCounty(record);
						counties.push(county);
					});
					fetchNextPage();
				},
				function done(err) {
					if (err) {
						console.error(err);
						reject(err);
					}
					resolve(counties);
				}
			);
		});
	}
}
