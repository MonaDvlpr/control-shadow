(function (){
    const buttons = document.querySelectorAll('.controls button')

    function shadowControl(e){
        const suffix = this.dataset.sizing;
        document.documentElement.style.setProperty(
            `--${this.name}`,
            this.value++ + suffix
        );
    }

    buttons.forEach(button=>{
        button.addEventListener('click',shadowControl)
    })
})();