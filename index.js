const Web3 = require("web3")
const web3 = new Web3();
const account_1 = web3.eth.accounts.create();
//console.log(account_1)
const wallet_1 = web3.eth.accounts.wallet
//console.log(wallet_1)
const randon_accounts_10 = web3.eth.accounts.wallet.create(10,"sub");
//console.log(randon_accounts_10)
const enc = web3.eth.accounts.encrypt(account_1.privateKey, "password");
//console.log(enc)
const enc_single_wallet = web3.eth.accounts.wallet.encrypt(wallet_1);
//console.log(enc_single_wallet)
class DogWallet {
    constructor(name,address,numberOfWallet){
        this.name == name;
        this.address == address;
        this.numberOfWallet == numberOfWallet;
    }
    generateAddress(type){
        if(type == "normal_account"){
            const acc = web3.eth.accounts.create();
            return acc;
        }else if(type  == "user_wallet"){
            const acc = web3.eth.accounts.wallet.create(this.numberOfWallet,"@@@")
            return acc;
        }else{
            return "type can't be read :("
        }     
    }
    hashWallet(type,password,privateKey){
        if(type == "normal_account"){
            const hash = web3.eth.accounts.encrypt(privateKey,password)
            return hash
        }else{
           const hash = web3.eth.accounts.wallet.encrypt(password)
           return hash
        }
    }
    de_hashWallet(type,password,hashed){
        if(type == "normal_account"){
            const hash = web3.eth.accounts.decrypt(hashed,password)
            return hash
        }else{
           const hash = web3.eth.accounts.wallet.decrypt(hashed,password)
           return hash
        } 
    }
}
const dogWallet = new DogWallet("Divine",account_1.address,10);
const generateAddress = dogWallet.generateAddress("normal_account")
const generateWallet = dogWallet.generateAddress("user_wallet")
const hashPrivateKey_Account = dogWallet.hashWallet("normal_account","chimdindu",generateAddress.address);
const hashPrivateKey_Walet = dogWallet.hashWallet("","chimdindu",generateWallet)
const de_hashWallet_account = dogWallet.de_hashWallet("normal_wallet","chimdindu",hashPrivateKey_Account)
const de_hashWallets = dogWallet.de_hashWallet("user_wallet","chimdindu",hashPrivateKey_Walet)
console.log("generateAddress")
console.log(generateAddress)
console.log("generateWallet")
console.log(generateWallet)
console.log("hashPrivateKey_Account")
console.log(hashPrivateKey_Account)
console.log("hashPrivateKey_Walet");
console.log(hashPrivateKey_Walet)
console.log("de_hashWallet_account");
console.log(de_hashWallet_account);
console.log("de_hashWallets");
console.log(de_hashWallets)
