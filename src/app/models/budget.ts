export class Budget {
    private budgetName: string;
    private clientName: string;
    private labels: string[];
    private webExtras = {
        pages: 0,
        languages: 0
    }
    private total: string;

    constructor(budgetName: string, clientName: string, labels: string[], total: string) {
        this.budgetName = budgetName;
        this.clientName = clientName;
        this.labels = labels;
        this.total = total;
    }

    public setWebExtras(pages: number, languages: number) {
        this.webExtras.pages = pages;
        this.webExtras.languages = languages;
    }
}