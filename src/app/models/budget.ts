export class Budget {
  private id: number = Math.floor(Math.random() * 1000) + 1;
  private budgetName: string;
  private clientName: string;
  private labels: string[];
  private webExtras = {
    pages: 0,
    languages: 0
  }
  private total: number;
  private date: Date = new Date();

  constructor(budgetName: string, clientName: string, labels: string[], total: number) {
    this.budgetName = budgetName;
    this.clientName = clientName;
    this.labels = labels;
    this.total = total;
  }

  public setWebExtras(pages: number, languages: number): void {
    this.webExtras.pages = pages;
    this.webExtras.languages = languages;
  }
  public getBudgetName(): string {
    return this.budgetName;
  }

  public getClientName(): string {
    return this.clientName;
  }
  public getLabels(): string[] {
    return this.labels;
  }

  public getWebExtras() {
    return this.webExtras;
  }

  public getTotal(): number {
    return this.total;
  }

  public getDate() {
    return this.date;
  }

  public getId() {
    return this.id;
  }
}
