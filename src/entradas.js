const rNormal = document.getElementById('radio-normal');
    const rAD = document.getElementById('radio-ad');
    
    const vNormal = document.querySelector('.normal');
    const vAD = document.querySelector('.ad');
    
    const lblNormal = document.getElementById('label-normal');
    const lblAD = document.getElementById('label-ad');

  
    rNormal.addEventListener('click', function() {
        vNormal.classList.remove('no-elegido-video');
        vAD.classList.add('no-elegido-video');
        vAD.pause();
        
        lblNormal.classList.add('activa');
        lblAD.classList.remove('activa');
    });

    
    rAD.addEventListener('click', function() {
        vNormal.classList.add('no-elegido-video');
        vAD.classList.remove('no-elegido-video');
        vNormal.pause();
        
        lblNormal.classList.remove('activa');
        lblAD.classList.add('activa');
    });
