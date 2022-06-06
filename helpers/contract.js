import { Contract } from '@ethersproject/contracts';
export const contractAbi = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_greeting",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "greet",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_greeting",
          "type": "string"
        }
      ],
      "name": "setGreeting",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

//this is just a template contract with a greet() and setGreeting(string memory _greeting) methods, created in contract-mock/ in order to test this
export const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

export const getContract = (library, account) => {
	const signer = library.getSigner(account).connectUnchecked();
    console.log("Signer object is: ", signer);
	var contract = new Contract(contractAddress, contractAbi, signer);
    console.log("Contract object is: ", contract);
	return contract;
};