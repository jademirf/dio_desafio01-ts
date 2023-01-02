import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PromoAccount } from './class/PromoAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Desmennyellysson', 10)
console.log(peopleAccount)
peopleAccount.deposit(20)
peopleAccount.withdraw(10)
console.log(peopleAccount)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(30)
companyAccount.withdraw(20)
companyAccount.getLoan(250)
console.log(companyAccount)

const promoAccount: PromoAccount = new PromoAccount('Promo account', 1234)
promoAccount.deposit(240)
console.log(promoAccount)