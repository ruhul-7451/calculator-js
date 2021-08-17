function dosomething(val) {
    document.getElementById('display').value += val;
}
document.getElementById('btn-clr').addEventListener('click', function () {
    const displayItem = document.getElementById('display');
    displayItem.value = '';
})

document.getElementById('equals').addEventListener('click', function () {
    const result = eval(document.getElementById('display').value)
    document.getElementById('display').value = result;

})