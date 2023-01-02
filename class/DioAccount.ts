export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (depositAmount: number): void => {
    if(!this.validateStatus()){
      throw new Error('Innactive account!')
    }
    this.balance += depositAmount
    console.log('New value added to your account!');
  }

  withdraw = (withdrawAmount: number): void => {
    if(!this.validateStatus()){
      throw new Error('Innactive account!')
    }
    if(!this.hasEnoughBalance(withdrawAmount)) {
      throw new Error("You don't have enough funds!")
    }
    this.balance -= withdrawAmount
    console.log('Withdraw successfully done!')
  }

  getBalance = (): void => {
    console.log(this.balance)
  }
  
  setBalance = (amountToAdd: number, type: string): void => {
    if(!this.validateStatus()){
      throw new Error('Innactive account!')
    }
    this.balance += amountToAdd
    console.log(`R$ ${amountToAdd} added to your account due to ${type}`)
  }

  getStatus = (): boolean => {
    return this.status
  }

  private validateStatus = (): boolean => {
    return this.status
  }

  private hasEnoughBalance = (amount: number): boolean => {
    if (this.balance < amount) {
      return false
    } else {
      return true
    }
  }
}
