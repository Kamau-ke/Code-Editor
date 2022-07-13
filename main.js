const left=document.querySelector('.left'),
      right=document.querySelector('.right'),
      bar=document.querySelector('.bar'),
      run=document.querySelector('.btn-run')
      iframe=document.querySelector('iframe')
      light=document.querySelector('.btn-light')
      dark=document.querySelector('.btn-dark')
      editor=document.querySelector('.editor');


const drag=(e)=>{
    e.preventDefault();

    document.selection ? document.getSelection.empty() :
    window.getSelection().removeAllRanges();

    left.style.width=(e.pageX - bar.offsetWidth /3) +'px';
    editor.resize();
}

bar.addEventListener('mousedown', ()=>{
    document.addEventListener('mousemove', drag)
})

bar.addEventListener('mouseup', ()=>{
    document.removeEventListener('mousemove', drag)
})

run.addEventListener('click', ()=>{
    const html=editor.textContent;
    iframe.src='data:text/html;charset-utf-8,' + encodeURI(html)
})

dark.addEventListener('click', ()=>{
    editor.style.backgroundColor='#363836'
    editor.style.color='#eee'
})

light.addEventListener('click', ()=>{
    editor.style.backgroundColor=''
    editor.style.color=''
})

document.getElementById('live').onclick=function (){
    if(this.checked){
        editor.addEventListener('keyup', ()=>{
            const html=editor.textContent;
            iframe.src='data:text/html;charset-utf-8,' + encodeURI(html)
        })
    }
}