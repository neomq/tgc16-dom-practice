let count = 0;

document.querySelector('#increment').addEventListener('click', function(){
    if (count >= 0 && count <= 9){
        count += 1;
    }

    if (count % 2 == 0){
        document.querySelector('#box').style.backgroundColor = "green";
    } else if (count % 2 !== 0){
        document.querySelector('#box').style.backgroundColor = "red";
    }

    document.querySelector('#box').innerText = count;
});

document.querySelector('#decrement').addEventListener('click', function(){
    if (count >= 1 && count <= 10){
        count -= 1;
    }

    if (count % 2 == 0){
        document.querySelector('#box').style.backgroundColor = "green";
    } else if (count % 2 !== 0){
        document.querySelector('#box').style.backgroundColor = "red";
    }

    document.querySelector('#box').innerText = count;
});

document.querySelector('#reset').addEventListener('click', function(){
    count = 0;
    document.querySelector('#box').innerText = count;
});

