const inPrice = document.querySelector('#price');
const inPeople = document.querySelector('#people');
const seTip = document.querySelector('#tip');
const btnCount = document.querySelector('.count');
const pError = document.querySelector('.error');
const pCostInfo = document.querySelector('.cost-info');
const sCost = document.querySelector('.cost');

const checkErrors = () => {
	if (inPrice.value === '' || inPeople.value === '') {
		pError.textContent = 'Uzupełnij wszystkie pola!';
		pCostInfo.style.display = 'none';
	} else {
		calculate();
	}
}

btnCount.addEventListener('click', checkErrors);

const calculate = () => {
	sum = (parseInt(inPrice.value) + (parseInt(inPrice.value) * parseFloat(seTip.value))) / parseInt(inPeople.value);
	sCost.textContent = sum.toFixed(2) + " ";
	pCostInfo.style.display = 'block';
}

