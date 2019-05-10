class SupplyItem {
  constructor(title, demand, populationCount) {
    this.title = title
    this.demand = demand
    this.populationCount = populationCount
  }

  supplyAsFactor() {
    return (this.populationCount * this.demand).toFixed(2)
  }

  supplyAsBuilding() {
    return Math.ceil(this.populationCount * this.demand)
  }

  displayString() {
    return `${this.supplyAsBuilding} (${this.supplyAsFactor}) ${this.title}`
  }

}

module.exports = SupplyItem