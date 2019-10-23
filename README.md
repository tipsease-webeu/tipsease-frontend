# tipsease-frontend


[Product Canvas](https://docs.google.com/document/d/1wE6sHOApe4gMkAXgG_hOBGAZfaYb4wbohlcCPUHamTg/edit#)

### Proposal
#### **What problem does your app solve?**
Traditionally service workers rely on their employers to get their part of the tips that have been collected from customers. Also, tips are traditionally added to a common jar, which is then distributed among workers, regardless of the actual performance. Tips are important because they constitute a big % of the salary for a service worker. Tipsease aims to fix 3 problems with the current situation:

1. **No need for intermediary.** 
Tips are lodged directly into the service worker account, removing the need for an intermediary to distribute tips.
1. **Direct link between performance and reward.** 
Since there is no common pot for tips (tips are paid directly to the service worker account, the employer no longer is the intermediary between customer and service worker for tip collection) we solve the injustice of all workers getting the same, regardless of their performance.
1. **Speed.** 
Tips are usually paid with together with the paycheck, once a month. With tipsease workers have their tips lodged in their account instantly.

#### **Be as specific as possible; how does your app solve the problem?**
By having an app that allows payment processing directly makes it easy for the customer to give tips directly to the service worker.

#### What is the mission statement?
Get rewarded for your efforts instantly.


### Features
#### What features are required for your minimum viable product?
* Service workers:
    * Registration
    * Login / Logout
    * Create profile
    * Check balance
    * Navigation bar
* Cusomers:
    * Registration
    * Login / Logout
    * Create profile
    * Select service worker from list
    * Tip
    * Navigation bar

#### What features may you wish to put in a future release?
* Real payment option (Stripe, etc.)
* Find by geo-location

#### What do the top 3 similar apps do for their users?
* **TipTapgo.io:** Having a quick, secure way to send money as a tip and it's totally anonymous.
* **Monzo.com:** An easy way to send money across your contacts, get paid and keep track of your income and expenses.
* **TipFlip.co:** Tip anyone, anywhere in a completely safe and secure way using location services from your mobile device.

### Frameworks - Libraries

#### What 3rd party frameworks/libraries are you considering using? 
 - Styled-Components 
 - Axios
 - React
 - Redux
 - React-Redux
 - Redux-Thunk
 - React-router-dom
 - Formik
 - Yup
 - Less
 - less-watch-compiler

#### Do APIs require you to contact its maintainer to gain access?
No

#### Are you required to pay to use the API? 
No

#### Have you considered using Apple Frameworks? (MapKit, Healthkit, ARKit?)
No

