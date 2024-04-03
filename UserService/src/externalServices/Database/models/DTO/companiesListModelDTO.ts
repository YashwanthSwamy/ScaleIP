interface ICompaniesListModel {
    id: string;
    name: string;
    logo_url: string;
    website_url: string;
    city: string;
    state: string
}

interface ICompaniesListModelDTO {
    companies: ICompaniesListModel[];
}


export default class CompaniesListModelDTO implements ICompaniesListModelDTO {
    companies: ICompaniesListModel[];

    constructor(companies: ICompaniesListModel[]) {
        this.companies = companies;
    }
}