function cityTaxes(nameInfo, populationInfo, treasuryInfo) {
    let object = {
        name: nameInfo,
        population: populationInfo,
        treasury: treasuryInfo,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percent) {
            this.population += (this.population*percent/100)
        },
        applyRecession(percent) {
            this.treasury -= this.treasury*percent/100
        }
    };
    return object
}
