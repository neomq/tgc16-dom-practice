let count = 0;

document.querySelector('#increment').addEventListener('click', function(){
    document.querySelector('#box').innerText = count;
    count += 1;
});

document.querySelector('#decrement').addEventListener('click', function(){
    document.querySelector('#box').innerText = count;
    count -= 1;
});

document.querySelector('#reset').addEventListener('click', function(){
    count = 0;
    document.querySelector('#box').innerText = count;
});

