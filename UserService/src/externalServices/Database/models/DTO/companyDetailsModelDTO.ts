interface ICompanyDetailsModel {
    id: string,
    name: string,
    logo_url: string,
    website_url: string,
    linkedin_url: string,
    twitter_url: string,
    facebook_url: string,
    angellist_url: string,
    founded_year: string,
    publicly_traded_symbol: string,
    publicly_traded_exchange: string,
    alexa_ranking: string,
    industry: string,
    estimated_num_employees: string,
    raw_address: string,
    short_description: string,
    annual_revenue_printed: string,
    total_funding_printed: string,
    last_funding_round: string,
    keywords: Array<string>;
}

interface ICompanyDetailsModelDTO {
    details: ICompanyDetailsModel[];
}


export default class CompanyDetailsModelDTO implements ICompanyDetailsModelDTO {
    details: ICompanyDetailsModel[];

    constructor(companies: ICompanyDetailsModel[]) {
        this.details = companies;
    }
}

