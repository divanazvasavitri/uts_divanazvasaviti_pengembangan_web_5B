(function(){
  // DOM ready helper
  function ready(fn){ if(document.readyState!='loading') fn(); else document.addEventListener('DOMContentLoaded',fn); }

  ready(function(){
    // Live clock in header
    function updateHeaderClock(){
      const el = document.getElementById('live-clock');
      if(!el) return;
      const now = new Date();
      const date = now.toLocaleDateString('id-ID',{weekday:'short',day:'2-digit',month:'short'});
      const time = now.toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit',second:'2-digit'});
      el.innerHTML = `<div class="clock-date">${date}</div><div class="clock-time">${time}</div>`;
    }
    updateHeaderClock();
    setInterval(updateHeaderClock,1000);

    // Sidebar small clock
    function updateSidebarClock(){ const s = document.getElementById('sidebar-clock'); if(!s) return; const now = new Date(); s.textContent = now.toLocaleTimeString('id-ID'); }
    updateSidebarClock(); setInterval(updateSidebarClock,1000);

    // Welcome message
    const welcome = document.getElementById('welcome-message');
    if(welcome){
      const hour = new Date().getHours();
      const greet = hour<10? 'Selamat Pagi' : hour<15? 'Selamat Siang' : hour<18? 'Selamat Sore' : 'Selamat Malam';
      welcome.innerHTML = `<div class="welcome"><strong>${greet}!</strong><div>Selamat datang di PUSAKA — pusat studi kearsipan.</div></div>`;
      welcome.classList.add('show');
      setTimeout(()=>{ welcome.classList.remove('show'); },6000);
    }

    // registration form handling (client-side simulation)
    const regForm = document.getElementById('registration-form');
    if(regForm){
      regForm.addEventListener('submit',function(e){
        e.preventDefault();
        const resp = document.getElementById('form-response');
        resp.textContent = 'Mengirim pendaftaran...';
        setTimeout(()=>{ resp.textContent = 'Pendaftaran berhasil dikirim. Terima kasih!'; regForm.reset(); },1200);
      });
    }

    // contact form
    const contactForm = document.getElementById('contact-form');
    if(contactForm){
      contactForm.addEventListener('submit',function(e){ e.preventDefault(); document.getElementById('contact-response').textContent = 'Pesan terkirim. Kami akan menghubungi Anda.'; contactForm.reset(); });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', function(e){ const href=this.getAttribute('href'); if(href.length>1){ e.preventDefault(); document.querySelector(href).scrollIntoView({behavior:'smooth'}); }});
    });

function updateClock() {
  const clock = document.getElementById("clock");
  const greet = document.getElementById("greet");
  const now = new Date();
  const day = now.toLocaleDateString("id-ID", { weekday: "long", day: "2-digit", month: "short", year: "numeric" });
  const time = now.toLocaleTimeString("id-ID", { hour12: false });
  
  let hour = now.getHours();
  let greeting = "Selamat Datang";
  if (hour < 12) greeting = "Selamat Pagi ☀️";
  else if (hour < 18) greeting = "Selamat Sore 🌤️";
  else greeting = "Selamat Malam 🌙";

  clock.textContent = `${day} | ${time}`;
  greet.textContent = greeting;
}
setInterval(updateClock, 1000);
updateClock();

  });
})();

