(function (){
    const buttons = document.querySelectorAll('.controls button')
    const ranges = document.querySelectorAll('.controls input')

    function shadowControl(e){
        document.documentElement.style.setProperty(
            `--${this.name}`,
            this.value++ + 'px'
        );
        console.log(this.value)
    }

    // buttons.forEach(button=>{
    //     button.addEventListener('click',shadowControl)
    // })
    ranges.forEach(range=>{
        range.addEventListener('change',shadowControl)
    })
})();