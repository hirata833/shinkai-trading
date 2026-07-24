(function () {
  'use strict';

  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  const header = document.getElementById('header');
  const contactForm = document.getElementById('contactForm');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  window.addEventListener('scroll', function () {
    if (header) {
      header.style.boxShadow = window.scrollY > 10 ? '0 2px 12px rgba(0,0,0,.08)' : 'none';
    }
  });

  function tr(key) {
    return window.ShinkaiI18n ? window.ShinkaiI18n.t(key) : key;
  }

  if (window.location.search.indexOf('sent=1') !== -1) {
    var sent = document.getElementById('formSent');
    if (sent) {
      sent.hidden = false;
      sent.textContent = tr('form.sent');
    }
  }

  if (contactForm) {
    const attachmentInput = document.getElementById('attachment');
    const attachmentName = document.getElementById('attachmentName');
    const typeSelect = document.getElementById('type');
    const typeText = document.getElementById('typeText');
    const formSubject = document.getElementById('formSubject');

    if (attachmentInput && attachmentName) {
      attachmentInput.addEventListener('change', function () {
        const files = Array.prototype.slice.call(attachmentInput.files || []);
        if (!files.length) {
          attachmentName.textContent = tr('form.fileNone');
          attachmentName.classList.remove('has-files');
          return;
        }
        attachmentName.textContent = files.map(function (f) { return f.name; }).join(document.documentElement.lang === 'en' ? ', ' : '、');
        attachmentName.classList.add('has-files');
      });
    }

    contactForm.addEventListener('submit', function () {
      var typeLabel = typeSelect ? typeSelect.options[typeSelect.selectedIndex].text : '';
      var name = document.getElementById('name').value.trim();
      if (typeText) typeText.value = typeLabel;
      if (formSubject) {
        formSubject.value = tr('form.mail.subject') + typeLabel + (name ? ' - ' + name : '');
      }
    });
  }
})();
