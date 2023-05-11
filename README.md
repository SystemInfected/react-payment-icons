# React Payment Icons

A react component library that easily integrate with the Shopify GrapQL API to display available payment methods. The naming convention for the icons are matched with the response data from `paymentSettings`.

Example query:

```
query {
    shop {
      paymentSettings {
        acceptedCardBrands
        supportedDigitalWallets
      }
    }
  }
```

## Usage

```
npm i @systeminfected/react-payment-icons
```

Example

```
import { Icon } from 'react-payment-method-icons'

<Icon icon='MASTERCARD'/>
```

## Credit

Logos forked from https://github.com/payrexx/payment-logos

A collection of payment method logos. The logos are free to use for commercial purposes.

## Payment methods so far

| Image                                                                  | Brand            | Shopify API name |
| ---------------------------------------------------------------------- | ---------------- | ---------------- |
| <img src="assets/card-icons/card_mastercard.svg" width="120px"/>       | Mastercard       | MASTERCARD       |
| <img src="assets/card-icons/card_visa.svg" width="120px"/>             | Visa             | VISA             |
| <img src="assets/card-icons/card_american-express.svg" width="120px"/> | American Express | AMERICAN_EXPRESS |
| <img src="assets/card-icons/card_google-pay.svg" width="120px"/>       | Google Pay       | GOOGLE_PAY       |
| <img src="assets/card-icons/card_apple-pay.svg" width="120px"/>        | Apple Pay        | APPLE_PAY        |
| <img src="assets/card-icons/card_shopify_pay.svg" width="120px"/>      | Shopify Pay      | SHOPIFY_PAY      |
| <img src="assets/card-icons/card_klarna.svg" width="120px"/>           | Klarna           | KLARNA           |

## Payment methods still to be added

### Credit cards

| Image                                                                  | Brand            |
| ---------------------------------------------------------------------- | ---------------- |
| <img src="assets/card-icons/card_discover.svg" width="120px"/>         | Discover         |
| <img src="assets/card-icons/card_diners_club.svg" width="120px"/>      | Diners           |
| <img src="assets/card-icons/card_jcb.svg" width="120px"/>              | JCB              |
| <img src="assets/card-icons/card_cartes_bancaires.svg" width="120px"/> | Cartes bancaires |

There are additional credit card logos in the repository.

### Wallets

| Image                                                             | Brand       |
| ----------------------------------------------------------------- | ----------- |
| <img src="assets/card-icons/card_paypal.svg" width="120px"/>      | PayPal      |
| <img src="assets/card-icons/card_samsung-pay.svg" width="120px"/> | Samsung Pay |
| <img src="assets/card-icons/card_alipay.svg" width="120px"/>      | Ali Pay     |
| <img src="assets/card-icons/card_wechat-pay.svg" width="120px"/>  | WeChat Pay  |

### Other Payment Methods

Over 120 additional payment method logos.
