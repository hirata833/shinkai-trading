(function () {
  'use strict';

  var STORAGE_KEY = 'shinkai-lang';

  var dict = {
    ja: {
      'logo.header': '信滙商事株式会社',
      'logo.company': '信滙商事株式会社',
      'meta.title': '信滙商事株式会社 | 中古分析機器の買取・販売',
      'meta.description': '信滙商事株式会社は、国内外メーカーの中古分析機器の買取・販売を行う専門商社です。',
      'nav.about': '会社概要',
      'nav.services': '事業内容',
      'nav.brands': '取扱ブランド',
      'nav.flow': 'ご利用の流れ',
      'nav.company': '会社情報',
      'nav.contact': 'お問い合わせ',
      'nav.toggle': 'メニューを開く',
      'lang.group': '言語切り替え',
      'hero.label': '中古分析機器専門商社',
      'hero.title': '分析機器の価値を、<br>次の現場へつなぐ。',
      'hero.desc': '国内外主要メーカーの中古分析機器の買取・販売を行っています。',
      'hero.ctaContact': 'お問い合わせ',
      'hero.ctaServices': '事業内容を見る',
      'stat.appraisalValue': '12時間以内',
      'stat.appraisal': '査定対応',
      'stat.makers': '取扱メーカー数',
      'stat.areaValue': '全国',
      'stat.area': '対応エリア',
      'about.title': '会社概要',
      'about.lead': '信滙商事株式会社は、理化学分析機器の中古取引を専門とする商社です。研究機関・製薬・化学・食品・環境分析など、幅広い分野で使用される分析機器の買取から販売まで一貫してサポートいたします。',
      'about.body': '国内外の主要メーカー製品を多数取り扱い、機器の状態確認を徹底したうえで次の利用者へお届けしています。不要になった機器の適正なリサイクルと、コストを抑えた機器導入の両面から、分析現場のサステナビリティに貢献します。',
      'about.f1.title': '状態確認済み',
      'about.f1.body': '出荷前に状態を明記してご提供します。',
      'about.f2.title': '国内外対応',
      'about.f2.body': '日本国内はもちろん、海外からの買取・輸出にも対応可能です。',
      'about.f3.title': '専門スタッフ',
      'about.f3.body': '分析機器に精通したスタッフが、機種選定から査定までサポートします。',
      'services.title': '事業内容',
      'services.s1.title': '中古機器の買取',
      'services.s1.body': '使用済み・余剰の分析機器を適正価格で買い取ります。ラボ移転・閉鎖・機器更新など、お急ぎの査定にも対応いたします。',
      'services.s1.li1': '出張査定（関東圏中心）',
      'services.s1.li2': '海外機器の買取',
      'services.s2.title': '中古機器の販売',
      'services.s2.body': '動作確認済みの中古分析機器を販売しています。',
      'services.s2.li2': '分光光度計・原子吸光装置',
      'services.s2.li3': 'イオンクロマトグラフ等',
      'brands.title': '取扱ブランド',
      'brands.desc': '国内外の主要分析機器メーカー製品を幅広く取り扱っています。',
      'brands.etc': 'など',
      'brands.other': 'その他',
      'brands.otherDesc': '各種分析・計測機器',
      'flow.title': 'ご利用の流れ',
      'flow.1.title': 'お問い合わせ',
      'flow.1.body': 'メールにて、機器名・型番・台数・状態などをお知らせください。',
      'flow.2.title': '査定・ご提案',
      'flow.2.body': '専門スタッフが査定し、買取価格または販売機器のご提案をいたします。',
      'flow.3.title': '契約・お支払い',
      'flow.3.body': '条件にご同意いただいた後、契約書を交わし、お支払い・引き渡しを行います。',
      'flow.4.title': '搬出・納品',
      'flow.4.body': '機器の搬出・輸送・設置を手配。必要に応じて動作確認立会いも可能です。',
      'flow.notes': '注意事項',
      'flow.n1': '測定データ等は事前に消去してください。買取後の責任は負いかねます。',
      'flow.n2': '査定・引取時に虚偽があった場合、買取をお断りすることがあります。',
      'flow.n3': 'すべての中古機器が買取できるわけではございません。あらかじめご了承ください。',
      'company.title': '会社情報',
      'company.name': '商号',
      'company.nameValue': '信滙商事株式会社',
      'company.rep': '代表者',
      'company.repValue': '代表取締役　平田 信',
      'company.founded': '設立',
      'company.foundedValue': '令和8年4月16日',
      'company.capital': '資本金',
      'company.capitalValue': '500万円',
      'company.address': '所在地',
      'company.addressValue': '〒123-0841<br>東京都足立区西新井2-5-3<br>フレール西新井第二',
      'company.license': '古物商許可証',
      'company.licenseValue': '東京都公安委員会許可　第306682619602号',
      'company.business': '事業内容',
      'company.businessValue': '理化学分析機器の中古買取・販売',
      'company.bank': '取引銀行',
      'company.bankValue': '三井住友銀行　GMOあおぞらネット銀行',
      'contact.title': 'お問い合わせ',
      'contact.desc': '機器の買取・販売に関するご相談は、下記よりお気軽にお問い合わせください。通常2営業日以内にご返信いたします。',
      'contact.hours': '（平日 9:00〜17:00）',
      'form.name': 'お名前',
      'form.company': '会社名・団体名',
      'form.email': 'メールアドレス',
      'form.phone': '電話番号',
      'form.type': 'お問い合わせ種別',
      'form.message': 'お問い合わせ内容',
      'form.required': '必須',
      'form.namePh': '山田 太郎',
      'form.companyPh': '株式会社〇〇',
      'form.phonePh': '03-1234-5678',
      'form.messagePh': '機器名・型番・台数・状態などをご記入ください',
      'form.typeBuy': '機器の買取について',
      'form.typeSell': '機器の購入について',
      'form.typeOther': 'その他',
      'form.attachment': '書類添付',
      'form.fileBtn': 'ファイルを選択',
      'form.fileNone': '選択されていません',
      'form.fileHint': '機器写真・仕様書・見積関連資料などを添付できます（複数可）',
      'form.submit': '送信する',
      'form.note': '※ 送信内容は hirata@shinkai-trading.co.jp に届きます。初回のみ確認メールのリンク承認が必要です。',
      'form.sent': '送信が完了しました。内容を確認のうえ、ご連絡いたします。',
      'form.mail.subject': '【お問い合わせ】',
      'form.mail.name': 'お名前',
      'form.mail.company': '会社名',
      'form.mail.email': 'メールアドレス',
      'form.mail.phone': '電話番号',
      'form.mail.type': 'お問い合わせ種別',
      'form.mail.message': 'お問い合わせ内容',
      'form.mail.blank': '（未入力）',
      'form.mail.files': '添付予定ファイル',
      'form.mail.fileNote': '※ 上記ファイルはメール作成画面で添付してください。',
      'footer.about': '会社概要',
      'footer.services': '事業内容',
      'footer.company': '会社情報',
      'footer.contact': 'お問い合わせ',
      'footer.privacy': 'プライバシーポリシー',
      'privacy.metaTitle': 'プライバシーポリシー | 信滙商事株式会社',
      'privacy.back': '← トップページへ戻る',
      'privacy.title': 'プライバシーポリシー',
      'privacy.intro': '信滙商事株式会社（以下「当社」）は、お客様の個人情報の保護を重要な責務と認識し、以下のとおりプライバシーポリシーを定め、適切な取り扱いに努めます。',
      'privacy.h1': '1. 個人情報の定義',
      'privacy.p1': '本ポリシーにおける「個人情報」とは、氏名、会社名、住所、電話番号、メールアドレス等、特定の個人を識別できる情報を指します。',
      'privacy.h2': '2. 個人情報の収集',
      'privacy.p2': '当社は、お問い合わせへの対応、機器の買取・販売に関する業務遂行のため、必要な範囲で個人情報を収集することがあります。',
      'privacy.h3': '3. 個人情報の利用目的',
      'privacy.l1': 'お問い合わせへの回答',
      'privacy.l2': '中古分析機器の買取・販売に関するご連絡',
      'privacy.l3': '見積書・契約書等の作成・送付',
      'privacy.l4': 'その他、上記に付随する業務',
      'privacy.h4': '4. 個人情報の第三者提供',
      'privacy.p4': '当社は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。',
      'privacy.h5': '5. 個人情報の管理',
      'privacy.p5': '当社は、個人情報の漏洩、滅失、毀損等を防止するため、適切な安全管理措置を講じます。',
      'privacy.h6': '6. お問い合わせ',
      'privacy.p6': '個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。',
      'privacy.tel': '電話',
      'privacy.dates': '制定日: 令和8年4月16日<br>最終更新: 令和8年4月16日'
    },
    en: {
      'logo.header': 'SHINKAI TRADING',
      'logo.company': 'Shinkai Trading Co., Ltd.',
      'meta.title': 'Shinkai Trading Co., Ltd. | Used Analytical Instruments',
      'meta.description': 'Shinkai Trading Co., Ltd. buys and sells used analytical instruments from major domestic and international manufacturers.',
      'nav.about': 'About',
      'nav.services': 'Services',
      'nav.brands': 'Brands',
      'nav.flow': 'Process',
      'nav.company': 'Company',
      'nav.contact': 'Contact',
      'nav.toggle': 'Open menu',
      'lang.group': 'Language',
      'hero.label': 'Used Analytical Instrument Specialists',
      'hero.title': 'Connecting instrument value<br>to the next workplace.',
      'hero.desc': 'We buy and sell used analytical instruments from major manufacturers in Japan and abroad.',
      'hero.ctaContact': 'Contact Us',
      'hero.ctaServices': 'View Services',
      'stat.appraisalValue': 'Within 12h',
      'stat.appraisal': 'Appraisal Response',
      'stat.makers': 'Manufacturers Handled',
      'stat.areaValue': 'Nationwide',
      'stat.area': 'Service Area',
      'about.title': 'About Us',
      'about.lead': 'Shinkai Trading Co., Ltd. specializes in used scientific and analytical instruments. We provide end-to-end support from purchasing to sales for instruments used across research, pharmaceuticals, chemicals, food, and environmental analysis.',
      'about.body': 'We handle a wide range of major manufacturer products and carefully confirm instrument condition before delivery to the next user. Through proper recycling of surplus equipment and cost-effective instrument sourcing, we help make analytical workplaces more sustainable.',
      'about.f1.title': 'Condition Verified',
      'about.f1.body': 'We clearly state the condition before shipment.',
      'about.f2.title': 'Domestic & International',
      'about.f2.body': 'We support purchases and exports both within Japan and from overseas.',
      'about.f3.title': 'Specialist Staff',
      'about.f3.body': 'Staff familiar with analytical instruments support model selection and appraisal.',
      'services.title': 'Services',
      'services.s1.title': 'Equipment Purchase',
      'services.s1.body': 'We purchase used or surplus analytical instruments at fair prices. Urgent appraisals for lab moves, closures, and equipment upgrades are also available.',
      'services.s1.li1': 'On-site appraisal (mainly Kanto)',
      'services.s1.li2': 'Purchase of overseas equipment',
      'services.s2.title': 'Equipment Sales',
      'services.s2.body': 'We sell used analytical instruments with confirmed operation.',
      'services.s2.li2': 'Spectrophotometers & AA systems',
      'services.s2.li3': 'Ion chromatographs and more',
      'brands.title': 'Brands We Handle',
      'brands.desc': 'We handle a wide range of analytical instruments from major manufacturers in Japan and abroad.',
      'brands.etc': 'etc.',
      'brands.other': 'Others',
      'brands.otherDesc': 'Various analytical and measurement instruments',
      'flow.title': 'How It Works',
      'flow.1.title': 'Inquiry',
      'flow.1.body': 'Please email us the instrument name, model, quantity, and condition.',
      'flow.2.title': 'Appraisal & Proposal',
      'flow.2.body': 'Our specialists appraise the equipment and propose a purchase price or sales options.',
      'flow.3.title': 'Contract & Payment',
      'flow.3.body': 'After you agree to the terms, we finalize the contract, payment, and handover.',
      'flow.4.title': 'Pickup & Delivery',
      'flow.4.body': 'We arrange removal, transport, and installation. On-site operation checks are available if needed.',
      'flow.notes': 'Notes',
      'flow.n1': 'Please erase measurement data in advance. We cannot take responsibility after purchase.',
      'flow.n2': 'If false information is found at appraisal or pickup, we may decline the purchase.',
      'flow.n3': 'Not all used instruments can be purchased. Thank you for your understanding.',
      'company.title': 'Company Information',
      'company.name': 'Company Name',
      'company.nameValue': 'Shinkai Trading Co., Ltd.',
      'company.rep': 'Representative',
      'company.repValue': 'Representative Director Shin Hirata',
      'company.founded': 'Established',
      'company.foundedValue': 'April 16, 2026 (Reiwa 8)',
      'company.capital': 'Capital',
      'company.capitalValue': '5 million yen',
      'company.address': 'Address',
      'company.addressValue': '123-0841<br>2-5-3 Nishiarai, Adachi-ku, Tokyo<br>Flair Nishiarai Daini',
      'company.license': 'Secondhand Dealer License',
      'company.licenseValue': 'Tokyo Public Safety Commission License No. 306682619602',
      'company.business': 'Business',
      'company.businessValue': 'Purchase and sale of used scientific analytical instruments',
      'company.bank': 'Bank',
      'company.bankValue': 'Sumitomo Mitsui Banking Corporation / GMO Aozora Net Bank',
      'contact.title': 'Contact',
      'contact.desc': 'Please feel free to contact us about buying or selling instruments. We usually reply within 2 business days.',
      'contact.hours': '(Weekdays 9:00–17:00)',
      'form.name': 'Name',
      'form.company': 'Company / Organization',
      'form.email': 'Email',
      'form.phone': 'Phone',
      'form.type': 'Inquiry Type',
      'form.message': 'Message',
      'form.required': 'Required',
      'form.namePh': 'Taro Yamada',
      'form.companyPh': 'Example Co., Ltd.',
      'form.phonePh': '03-1234-5678',
      'form.messagePh': 'Please include instrument name, model, quantity, and condition',
      'form.typeBuy': 'About selling equipment to us',
      'form.typeSell': 'About purchasing equipment',
      'form.typeOther': 'Other',
      'form.attachment': 'Attachments',
      'form.fileBtn': 'Choose Files',
      'form.fileNone': 'No file selected',
      'form.fileHint': 'You can attach photos, specifications, quotes, and related documents (multiple allowed)',
      'form.submit': 'Send',
      'form.note': '* Your message will be sent to hirata@shinkai-trading.co.jp. The first submission requires email confirmation.',
      'form.sent': 'Your message has been sent. We will review it and get back to you.',
      'form.mail.subject': '[Inquiry] ',
      'form.mail.name': 'Name',
      'form.mail.company': 'Company',
      'form.mail.email': 'Email',
      'form.mail.phone': 'Phone',
      'form.mail.type': 'Inquiry Type',
      'form.mail.message': 'Message',
      'form.mail.blank': '(Not provided)',
      'form.mail.files': 'Files to attach',
      'form.mail.fileNote': '* Please attach the files above in your email composer.',
      'footer.about': 'About',
      'footer.services': 'Services',
      'footer.company': 'Company',
      'footer.contact': 'Contact',
      'footer.privacy': 'Privacy Policy',
      'privacy.metaTitle': 'Privacy Policy | Shinkai Trading Co., Ltd.',
      'privacy.back': '← Back to Home',
      'privacy.title': 'Privacy Policy',
      'privacy.intro': 'Shinkai Trading Co., Ltd. (“the Company”) recognizes the protection of personal information as an important responsibility and handles it appropriately under this Privacy Policy.',
      'privacy.h1': '1. Definition of Personal Information',
      'privacy.p1': '“Personal information” in this policy means information that can identify a specific individual, such as name, company name, address, phone number, and email address.',
      'privacy.h2': '2. Collection of Personal Information',
      'privacy.p2': 'The Company may collect personal information to the extent necessary to respond to inquiries and carry out equipment purchase and sales operations.',
      'privacy.h3': '3. Purpose of Use',
      'privacy.l1': 'Responding to inquiries',
      'privacy.l2': 'Communications related to the purchase and sale of used analytical instruments',
      'privacy.l3': 'Preparing and sending quotations, contracts, and related documents',
      'privacy.l4': 'Other operations incidental to the above',
      'privacy.h4': '4. Provision to Third Parties',
      'privacy.p4': 'Except as required by law, the Company will not provide personal information to third parties without the consent of the individual.',
      'privacy.h5': '5. Management of Personal Information',
      'privacy.p5': 'The Company takes appropriate security measures to prevent leakage, loss, or damage of personal information.',
      'privacy.h6': '6. Contact',
      'privacy.p6': 'For inquiries regarding personal information, please contact us below.',
      'privacy.tel': 'Tel',
      'privacy.dates': 'Established: April 16, 2026 (Reiwa 8)<br>Last updated: April 16, 2026 (Reiwa 8)'
    }
  };

  function t(key) {
    var lang = document.documentElement.lang === 'en' ? 'en' : 'ja';
    return (dict[lang] && dict[lang][key]) || (dict.ja[key]) || key;
  }

  function apply(lang) {
    if (!dict[lang]) lang = 'ja';
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var value = dict[lang][key];
      if (value == null) return;
      el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      var value = dict[lang][key];
      if (value == null) return;
      el.innerHTML = value;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var value = dict[lang][key];
      if (value == null) return;
      el.setAttribute('placeholder', value);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      var value = dict[lang][key];
      if (value == null) return;
      el.setAttribute('aria-label', value);
    });

    var titleEl = document.querySelector('title');
    if (titleEl) {
      var titleKey = titleEl.getAttribute('data-i18n') || 'meta.title';
      if (dict[lang][titleKey]) titleEl.textContent = dict[lang][titleKey];
    }

    var desc = document.querySelector('meta[name="description"]');
    if (desc && dict[lang]['meta.description'] && !document.body.classList.contains('page-privacy')) {
      desc.setAttribute('content', dict[lang]['meta.description']);
    }

    document.querySelectorAll('#langSelect').forEach(function (select) {
      select.value = lang;
    });

    var attachmentName = document.getElementById('attachmentName');
    var attachmentInput = document.getElementById('attachment');
    if (attachmentName && attachmentInput && !(attachmentInput.files && attachmentInput.files.length)) {
      attachmentName.textContent = dict[lang]['form.fileNone'];
      attachmentName.classList.remove('has-files');
    }

    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
  }

  function init() {
    var saved = 'ja';
    try {
      saved = localStorage.getItem(STORAGE_KEY) || 'ja';
    } catch (e) {}

    document.querySelectorAll('#langSelect').forEach(function (select) {
      select.addEventListener('change', function () {
        apply(select.value);
      });
    });

    apply(saved === 'en' ? 'en' : 'ja');
  }

  window.ShinkaiI18n = {
    t: t,
    apply: apply,
    init: init,
    getLang: function () {
      return document.documentElement.lang === 'en' ? 'en' : 'ja';
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
