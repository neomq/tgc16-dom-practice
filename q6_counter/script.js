let count = 0;

document.querySelector('#increment').addEventListener('click', function(){
    document.querySelector('#box').innerText = count;
    count += 1;
});

