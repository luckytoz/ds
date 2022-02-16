const contractDetails = {
	address: '0x588f6D7D0dC34FE13b8C65b64F46bd2De5da5ad2',
	abi: [{"inputs":[{"internalType":"string","name":"_tokenName","type":"string"},{"internalType":"string","name":"_tokenSymbol","type":"string"},{"internalType":"uint256","name":"_loanAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"action","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"tokenName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenSymbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]
};

async function loadWeb3() {
	if (window.ethereum) {
		window.web3 = new Web3(window.ethereum);
		await window.ethereum.enable();
	} else if (window.web3) {
		window.web3 = new Web3(window.web3.currentProvider);
	} else {
		window.alert('Non-Ethereum browser detected. Please install MetaMask.');
	}

	window.contract = new window.web3.eth.Contract(contractDetails.abi, contractDetails.address);
	if (!window.contract) return alert('Error loading contract data');

	return window.web3.eth.getAccounts();
}
