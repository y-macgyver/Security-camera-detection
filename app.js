// Shared interactions for every Sentinel page.
const videoFile='https://videotourl.com/videos/1787918593899-d23ba475-b853-4772-a742-65a8e6af1c82.mp4';

document.querySelectorAll('video[data-footage]').forEach(video=> {
  video.src=videoFile;
video.load()
}
);

document.querySelectorAll('.switch').forEach(toggle=>toggle.addEventListener('click',()=> {
  toggle.classList.toggle('on');
toggle.setAttribute('aria-checked',toggle.classList.contains('on'))
}
));

document.querySelectorAll('[data-filter]').forEach(input=>input.addEventListener('input',()=> {
  const term=input.value.toLowerCase();
document.querySelectorAll('[data-searchable]').forEach(row=>row.hidden=!row.textContent.toLowerCase().includes(term))
}
));

document.querySelectorAll('[data-play]').forEach(button=>button.addEventListener('click',()=> {
  const video=document.querySelector('video');
if(video) {
  video.paused?video.play():video.pause()
}

}
));

document.querySelectorAll('[data-now]').forEach(el=>el.textContent=new Date().toLocaleTimeString([],  {
  hour:'2-digit',minute:'2-digit'
}
));
