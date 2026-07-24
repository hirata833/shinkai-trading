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

  if (contactForm) {
    const attachmentInput = document.getElementById('attachment');
    const attachmentName = document.getElementById('attachmentName');

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

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const company = document.getElementById('company').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const type = document.getElementById('type');
      const typeLabel = type.options[type.selectedIndex].text;
      const message = document.getElementById('message').value.trim();
      const files = attachmentInput ? Array.prototype.slice.call(attachmentInput.files || []) : [];

      const subject = tr('form.mail.subject') + typeLabel + ' - ' + name;

      const bodyLines = [
        tr('form.mail.name') + ': ' + name,
        tr('form.mail.company') + ': ' + company,
        tr('form.mail.email') + ': ' + email,
        tr('form.mail.phone') + ': ' + (phone || tr('form.mail.blank')),
        tr('form.mail.type') + ': ' + typeLabel,
        '',
        tr('form.mail.message') + ':',
        message
      ];

      if (files.length) {
        bodyLines.push(
          '',
          tr('form.mail.files') + ':',
          files.map(function (f) { return '- ' + f.name; }).join('\n'),
          '',
          tr('form.mail.fileNote')
        );
      }

      const mailtoUrl =
        'mailto:hirata@shinkai-trading.co.jp' +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(bodyLines.join('\n'));

      window.location.href = mailtoUrl;
    });
  }
})();
