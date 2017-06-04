---
title: Contact | Andy Davies
short_title: Contact Me
layout: page
content_meta: "If you're looking for a freelance web developer for your next project, or a website for your business, contact me for a free consultation and quote."
---

<p style="text-align: center">Contact me using the form below and I'll get back to you as soon as possible. Alternatively, you can email me at <a href="mailto:hello@andydavi.es">hello@andydavi.es</a></p>

<form class="contact-form" method="POST" action="https://formspree.io/hello@andydavi.es">
  <input type="email" name="email" placeholder="Your email">
  <input type="tel" name="telephone" placeholder="Your phone number (optional)">
  <input type="hidden" name="_next" value="{{ site.url }}/thanks.html" />
  <textarea name="message" placeholder="Your message"></textarea>

  <!--http://stackoverflow.com/questions/35464067/flexbox-not-working-on-button-element-in-some-browsers/35466231 -->
  <button type="submit"><span class="button">send</span></button>
</form>