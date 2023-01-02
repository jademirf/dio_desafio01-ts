import { DioAccount } from "./DioAccount"

export class PromoAccount extends DioAccount {
  deposit = (depositAmount: number): void => {
    this.setBalance((depositAmount + 10), "PROMO DEPOSIT")
    console.log('New value added to your account plus R$ 10,00!');
  }
}