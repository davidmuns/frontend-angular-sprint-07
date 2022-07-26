export class Budget {
    private name: string;
    private client: string;
    private options: string[];
    private webExtras = {
        pages: 0,
        languages: 0
    }
    private total: string;

    constructor(name: string, client: string, options: string[], total: string) {
        this.name = name;
        this.client = client;
        this.options = options;
        this.total = total;
    }

    public setWebExtras(pages: number, languages: number) {
        this.webExtras.pages = pages;
        this.webExtras.languages = languages;
    }
}