(function (){
    const ranges = document.querySelectorAll('.controls input')

    function shadowControl(){
        document.documentElement.style.setProperty(
            `--${this.name}`,
            this.value++ + 'px'
        );
    }
    ranges.forEach(range=>{
        range.addEventListener('change',shadowControl)
    })
})();