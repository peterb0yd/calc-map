import Airtable from 'airtable';
let client: Airtable.Base;

export const getAirtableClient = () => {
	if (!client) {
		const apiKey = process.env.AIRTABLE_API_KEY;
		client = new Airtable({ apiKey }).base(process.env.AIRTABLE_BASE_ID as string);
	}
	return client;
};
