const Web3 = require("web3")
const web3 = new Web3();
const account_1 = web3.eth.accounts.create();
console.log(account_1)
const wallet_1 = web3.eth.accounts.wallet
console.log(wallet_1)
const randon_accounts_10 = web3.eth.accounts.wallet.create(10,"sub");
console.log(randon_accounts_10)
const enc = web3.eth.accounts.encrypt(account_1.privateKey, "password");
console.log(enc)
const enc_single_wallet = web3.eth.accounts.wallet.encrypt(wallet_1);
console.log(enc_single_wallet)