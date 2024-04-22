const adviceId = document.getElementById('advice-id');
const quote = document.getElementById('quote');
const btn = document.getElementById('dice-btn');

const apiUrl = 'https://api.adviceslip.com/advice';

async function searchAdvice() {
    
    try{
        const result = await fetch(apiUrl)
        .then((data) => data.json());

        showAdvice(result.slip);

    } catch (error) {
        console.error(error);
        alert('Advice not found');
    }
}

const showAdvice = (slip) => {
    const { id , advice } = slip;
    console.log(id);
    console.log(advice);
    adviceId.innerText = `${id}`;
    quote.innerText = `"${advice}"`;
}

searchAdvice();

btn.addEventListener('click', searchAdvice);
